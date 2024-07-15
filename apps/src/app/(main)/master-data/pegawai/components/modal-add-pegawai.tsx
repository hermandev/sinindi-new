import { Golongan, Jabatan, Pangkat } from "@/libs/db/types";
import {
  Button,
  ComboboxItem,
  Group,
  Loader,
  Modal,
  OptionsFilter,
  Select,
  SimpleGrid,
  TextInput,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import React, { useEffect, useState, useTransition } from "react";
import { z } from "zod";
import { getDataPangkat } from "../../pangkat/actions";
import { getDataJabatan } from "../../jabatan/actions";
import { getDataGolongan } from "../../golongan/actions";
import { IconDeviceFloppy } from "@tabler/icons-react";
import { checkNipPegawai, checkNrpPegawai, tambahPegawai } from "../actions";
import { useDebouncedValue } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";

type Props = {
  opened: boolean;
  close: () => void;
};

const PegawaiSchema = z.object({
  nip: z.string().min(1, { message: "Tidak boleh kosong" }),
  nrp: z.string().min(1, { message: "Tidak boleh kosong" }),
  nama_lengkap: z.string().min(1, { message: "Tidak boleh kosong" }),
  kelamin: z.string().min(1, { message: "Pilih jenis kelamin" }),
  jabatan: z.string().min(1, { message: "Pilih jabatan" }),
  pangkat: z.string().min(1, { message: "Pilih pangkat" }),
  golongan: z.string().min(1, { message: "Pilih golongan" }),
  no_hp: z.string().min(1, { message: "Tidak boleh kosong" }),
});

function ModalAddPegawai({ opened, close }: Props) {
  const [loadSubmit, transitionSubmit] = useTransition();
  const [_, transitionFetch] = useTransition();
  const [loadCheckNip, transitionCheckNip] = useTransition();
  const [loadCheckNrp, transitionCheckNrp] = useTransition();
  const [dataPangkat, setDataPangkat] = useState<Pangkat[]>([]);
  const [dataJabatan, setDataJabatan] = useState<Jabatan[]>([]);
  const [dataGolongan, setDataGolongan] = useState<Golongan[]>([]);

  const form = useForm<z.infer<typeof PegawaiSchema>>({
    initialValues: {
      nip: "",
      nrp: "",
      nama_lengkap: "",
      kelamin: "",
      jabatan: "",
      golongan: "",
      pangkat: "",
      no_hp: "",
    },
    validate: zodResolver(PegawaiSchema),
  });

  const [checkNip] = useDebouncedValue(form.getInputProps("nip").value, 500);
  const [checkNrp] = useDebouncedValue(form.getInputProps("nrp").value, 500);

  const handleSubmit = (data: z.infer<typeof PegawaiSchema>) => {
    transitionSubmit(async () => {
      let username: string = "";
      if (data.nip === "-") {
        if (data.nrp === "-") {
          return;
        }
        username = data.nrp;
      } else {
        username = data.nip;
      }

      const result = JSON.parse(
        await tambahPegawai({
          nip: data.nip,
          nrp: data.nrp,
          nama_lengkap: data.nama_lengkap,
          kelamin: data.kelamin,
          no_hp: data.no_hp,
          jabatan: data.jabatan,
          pangkat: data.pangkat,
          golongan: data.golongan,
          username: username,
          password: username,
        }),
      );

      if (!result.error) {
        notifications.show({
          title: "Success",
          message: "Data Pegawai berhasil di daftarkan",
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

  const fetchData = () => {
    transitionFetch(async () => {
      const resPangkat = getDataPangkat();
      const resJabatan = getDataJabatan();
      const resGolongan = getDataGolongan();

      const [pangkat, jabatan, golongan] = await Promise.all([
        resPangkat,
        resJabatan,
        resGolongan,
      ]);
      if (pangkat && jabatan && golongan) {
        //@ts-ignore
        setDataPangkat(pangkat);
        //@ts-ignore
        setDataJabatan(jabatan);
        //@ts-ignore
        setDataGolongan(golongan);
      }
    });
  };

  const optionsFilter: OptionsFilter = ({ options, search }) => {
    const splittedSearch = search.toLowerCase().trim().split(" ");
    return (options as ComboboxItem[]).filter((option) => {
      const words = option.label.toLowerCase().trim().split(" ");
      return splittedSearch.every((searchWord) =>
        words.some((word) => word.includes(searchWord)),
      );
    });
  };

  const handleCheckNip = (nip: string) => {
    transitionCheckNip(async () => {
      const result = JSON.parse(await checkNipPegawai(nip));
      if (!result.error) {
        form.setErrors({
          nip: "NIP sudah terdaftar",
        });
      }
    });
  };

  const handleCheckNrp = (nrp: string) => {
    transitionCheckNrp(async () => {
      const result = JSON.parse(await checkNrpPegawai(nrp));
      if (!result.error) {
        form.setErrors({
          nrp: "NRP sudah terdaftar",
        });
      }
    });
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opened]);

  useEffect(() => {
    if (checkNip !== "") {
      handleCheckNip(checkNip);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkNip]);

  useEffect(() => {
    if (checkNrp !== "") {
      handleCheckNrp(checkNrp);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkNrp]);

  return (
    <Modal
      opened={opened}
      onClose={close}
      title="Tambah Data Pegawai"
      size="lg"
      closeOnEscape={false}
      closeOnClickOutside={false}
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
    >
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <SimpleGrid cols={2} mb="md">
          <TextInput
            label="NIP"
            placeholder="Masukan NIP"
            withAsterisk
            {...form.getInputProps("nip")}
            rightSection={loadCheckNip ? <Loader size="xs" /> : ""}
          />
          <TextInput
            label="NRP"
            placeholder="Masukan NRP"
            withAsterisk
            {...form.getInputProps("nrp")}
            rightSection={loadCheckNrp ? <Loader size="xs" /> : ""}
          />
        </SimpleGrid>
        <SimpleGrid cols={1} mb="md">
          <TextInput
            label="Nama Lengkap"
            placeholder="Masukan Nama Lengkap"
            {...form.getInputProps("nama_lengkap")}
          />
        </SimpleGrid>
        <SimpleGrid cols={2} mb="md">
          <Select
            label="Jenis Kelamin"
            placeholder="Pilih Jenis Kelamin"
            withAsterisk
            data={[
              { value: "L", label: "Laki-Laki" },
              { value: "P", label: "Perempuan" },
            ]}
            {...form.getInputProps("kelamin")}
          />
          <TextInput
            label="Nomor HP/ Whatsapp"
            placeholder="contoh: 085xxxx"
            withAsterisk
            {...form.getInputProps("no_hp")}
          />
        </SimpleGrid>
        <SimpleGrid cols={3} mb="md">
          <Select
            label="Pangkat"
            placeholder="Pilih Pangkat"
            withAsterisk
            data={dataPangkat.map((item: Pangkat) => ({
              label: item.nama,
              value: item.id,
            }))}
            filter={optionsFilter}
            nothingFoundMessage="Nothing found..."
            searchable
            {...form.getInputProps("pangkat")}
          />
          <Select
            label="Jabatan"
            placeholder="Pilih Jabatan"
            withAsterisk
            data={dataJabatan.map((item: Jabatan) => ({
              label: item.nama,
              value: item.id,
            }))}
            filter={optionsFilter}
            nothingFoundMessage="Nothing found..."
            searchable
            {...form.getInputProps("jabatan")}
          />
          <Select
            label="Golongan"
            placeholder="Pilih Golongan"
            withAsterisk
            data={dataGolongan.map((item: Golongan) => ({
              label: item.nama,
              value: item.id,
            }))}
            filter={optionsFilter}
            nothingFoundMessage="Nothing found..."
            searchable
            {...form.getInputProps("golongan")}
          />
        </SimpleGrid>

        <Group justify="space-between" mt="xl">
          <Button variant="outline" color="gray" onClick={close}>
            Batal
          </Button>
          <Button
            leftSection={<IconDeviceFloppy size="1rem" />}
            loading={loadSubmit}
            type="submit"
          >
            Simpan
          </Button>
        </Group>
      </form>
    </Modal>
  );
}

export default ModalAddPegawai;
