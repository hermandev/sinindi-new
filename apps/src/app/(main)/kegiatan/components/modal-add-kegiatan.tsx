"use client";
import {
  Button,
  Grid,
  Group,
  Modal,
  Radio,
  Select,
  SimpleGrid,
  TextInput,
  rem,
} from "@mantine/core";
import React, { useEffect, useRef, useState, useTransition } from "react";
import {
  createKegiatan,
  getKabupaten,
  getProvinsi,
  getSettings,
} from "../actions";
import { Kabupaten, Provinsi, Settings } from "@/libs/db/types";
import { IconPlus } from "@tabler/icons-react";
import { DatePickerInput } from "@mantine/dates";
import "@mantine/dates/styles.css";
import z from "zod";
import { useForm, zodResolver } from "@mantine/form";
import moment from "moment";
import { notifications } from "@mantine/notifications";

type Props = {
  opened: boolean;
  close: () => void;
};

const SchemaData = z.object({
  isi_surat: z.string().min(1, { message: "Tidak boleh kosong" }),
  kegiatan: z.string().min(1, { message: "Tidak boleh kosong" }),
  jenis: z.string().min(1, { message: "Belum dipilih" }),
  tgl_berangkat: z.string(),
  tgl_kembali: z.string(),
  transportasi: z.string().min(1, { message: "Belum dipilih" }),
  daerah_tujuan: z.string().min(1, { message: "Belum dipilih" }),
  jumlah_hari: z.number(),
});

function ModalAddKegiatan({ opened, close }: Props) {
  const [loadSubmit, startSubmit] = useTransition();
  const [, startTransition] = useTransition();
  const [settings, setSettings] = useState<Settings | null>(null);
  const [provinsi, setProvinsi] = useState<any>([]);
  const [kabupaten, setKabupaten] = useState<any>([]);
  const selectRef = useRef(null);

  const [tanggal, setTanggal] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [errTanggal, setErrTanggal] = useState("");
  const [hari, setHari] = useState(0);

  const form = useForm<z.infer<typeof SchemaData>>({
    initialValues: {
      isi_surat: "",
      kegiatan: "",
      jenis: "LD",
      tgl_berangkat: "",
      tgl_kembali: "",
      transportasi: "",
      daerah_tujuan: "",
      jumlah_hari: 0,
    },
    validate: zodResolver(SchemaData),
  });

  const initData = () => {
    startTransition(async () => {
      const result = await getSettings();
      setSettings(result as Settings);
    });
  };

  const handleGetProvinsi = () => {
    startTransition(async () => {
      const result = await getProvinsi();
      setProvinsi(result);
    });
  };

  const handleGetKabupaten = () => {
    startTransition(async () => {
      const idProv = settings?.provinsi!;
      const result = await getKabupaten(idProv);
      setKabupaten(result);
    });
  };

  const handleChangeTanggal = (e: any) => {
    setTanggal(e);
    const selisihMilidetik = e[1] - e[0];
    if (e[0] !== null && e[1] !== null) {
      const selisihHari = selisihMilidetik / (1000 * 60 * 60 * 24);
      setHari(selisihHari + 1);
    }

    form.setValues({
      tgl_berangkat: moment(e[0]).format("YYYY-MM-DD"),
      tgl_kembali: moment(e[1]).format("YYYY-MM-DD"),
    });
  };

  const handleSubmit = (data: z.infer<typeof SchemaData>) => {
    if (tanggal[0] === null || tanggal[1] === null) {
      setErrTanggal("Tanggal keberangkatan belum diisi");
      return;
    } else {
      setErrTanggal("");
    }
    startSubmit(async () => {
      data.jumlah_hari = hari;
      const result = JSON.parse(await createKegiatan(data));
      if (!result.error) {
        notifications.show({
          title: "Success",
          message: "Kegiatan berhasil dibuat!",
          color: "teal",
          autoClose: 2000,
        });
        close();
      } else {
        notifications.show({
          title: "Opps!",
          message: "Terjadi keslahan saat mengirim data",
          color: "red",
          autoClose: 2000,
        });
      }
    });
  };

  useEffect(() => {
    form.setFieldValue("daerah_tujuan", "");

    if (form.values.jenis === "LD") {
      handleGetProvinsi();
    } else {
      handleGetKabupaten();
    }
  }, [form.getInputProps("jenis").value]);

  useEffect(() => {
    initData();
    handleGetProvinsi();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opened]);
  return (
    <Modal
      opened={opened}
      onClose={close}
      title="Buat Kegiatan"
      size="lg"
      closeOnEscape={false}
      closeOnClickOutside={false}
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
    >
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <SimpleGrid>
          <TextInput
            label="Surat"
            withAsterisk
            placeholder="Masukan Isi Surat"
            {...form.getInputProps("isi_surat")}
          />
        </SimpleGrid>
        <SimpleGrid mt="md">
          <TextInput
            label="Kegiatan"
            withAsterisk
            placeholder="Masukan Judul Kegiatan"
            {...form.getInputProps("kegiatan")}
          />
        </SimpleGrid>
        <Grid mt="md">
          <Grid.Col span={{ base: 12, xs: 6 }}>
            <Radio.Group
              label="Tempat Pelaksanaan"
              withAsterisk
              {...form.getInputProps("jenis")}
            >
              <Group mt="sm">
                <Radio value="DD" label="Dalam Provinsi" />
                <Radio value="LD" label="Luar Provinsi" />
              </Group>
            </Radio.Group>
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 6 }}>
            {form.values.jenis === "LD" ? (
              <Select
                label="Pilih Provinsi"
                data={provinsi.map((item: Provinsi) => {
                  return {
                    value: item.id.toString(),
                    label: item.nama,
                  };
                })}
                searchable
                clearable
                allowDeselect={false}
                ref={selectRef}
                {...form.getInputProps("daerah_tujuan")}
              />
            ) : (
              <Select
                label="Pilih Kabupaten"
                data={kabupaten.map((item: Kabupaten) => {
                  return {
                    value: item.id.toString(),
                    label: item.nama,
                  };
                })}
                searchable
                clearable
                allowDeselect={false}
                ref={selectRef}
                {...form.getInputProps("daerah_tujuan")}
              />
            )}
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 6 }}>
            <Radio.Group
              label="Transportasi"
              withAsterisk
              {...form.getInputProps("transportasi")}
            >
              <Group mt="sm">
                <Radio value="DARAT" label="Darat" />
                <Radio value="LAUT" label="Laut" />
                <Radio value="UDARA" label="Udara" />
              </Group>
            </Radio.Group>
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 6 }}>
            <DatePickerInput
              label="Tanggal Berangkat & Kembali"
              type="range"
              value={tanggal}
              onChange={(e) => handleChangeTanggal(e)}
              clearable
              error={errTanggal}
              dropdownType="modal"
            />
          </Grid.Col>
        </Grid>
        <Group justify="end" mt="lg">
          <Button
            type="submit"
            leftSection={
              <IconPlus style={{ width: rem(16), height: rem(16) }} />
            }
            loading={loadSubmit}
          >
            Buat Kegiatan
          </Button>
        </Group>
      </form>
    </Modal>
  );
}

export default ModalAddKegiatan;
