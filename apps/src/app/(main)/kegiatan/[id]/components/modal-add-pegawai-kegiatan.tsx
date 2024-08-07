"use client";
import { getDataPegawai } from "@/app/(main)/master-data/pegawai/actions";
import { Kegiatan, Pegawai } from "@/libs/db/types";
import { useAppSelector } from "@/libs/redux/hooks";
import {
  Button,
  Checkbox,
  Group,
  Modal,
  Select,
  SimpleGrid,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { IconPlus } from "@tabler/icons-react";
import { useEffect, useState, useTransition } from "react";
import z from "zod";
import { addPegawaiDalamDaerah, addPegawaiLuarDaerah } from "../actions";
import { notifications } from "@mantine/notifications";

type Props = {
  opened: boolean;
  close: () => void;
};

const SchemaData = z.object({
  idKegiatan: z.string(),
  pegawai: z.string().min(1, { message: "Belum dipilih" }),
  status: z.boolean(),
});

function ModalAddPegawaiKegiatan({ opened, close }: Props) {
  const [, startInitData] = useTransition();
  const [, startSubmit] = useTransition();
  const [pegawai, setPegawai] = useState<any | null>(null);
  const itemKegiatan: Kegiatan | null = useAppSelector(
    (x) => x.kegiatan.pegawai.item,
  );
  const initData = () => {
    startInitData(async () => {
      const result = await getDataPegawai();
      setPegawai(result);
    });
  };

  const form = useForm<z.infer<typeof SchemaData>>({
    initialValues: {
      idKegiatan: "",
      pegawai: "",
      status: false,
    },
    validate: zodResolver(SchemaData),
  });

  const handleSubmit = (data: z.infer<typeof SchemaData>) => {
    startSubmit(async () => {
      if (itemKegiatan) {
        data.idKegiatan = itemKegiatan.id;
        if (itemKegiatan.jenis === "DD") {
          const result = JSON.parse(
            await addPegawaiDalamDaerah({
              kegiatan: itemKegiatan,
              pegawai: data.pegawai,
              status: data.status,
            }),
          );

          if (!result.error) {
            notifications.show({
              title: "Success",
              message: "Pegawai berhasil di tambahkan!",
              color: "teal",
              autoClose: 2000,
            });
            close();
          } else {
            notifications.show({
              title: "Opps!",
              message: result.data,
              color: "red",
              autoClose: 2000,
            });
          }
        }

        if (itemKegiatan.jenis === "LD") {
          const result = JSON.parse(
            await addPegawaiLuarDaerah({
              kegiatan: itemKegiatan,
              pegawai: data.pegawai,
              status: data.status,
            }),
          );
          if (!result.error) {
            notifications.show({
              title: "Success",
              message: "Pegawai berhasil di tambahkan!",
              color: "teal",
              autoClose: 2000,
            });
            close();
          } else {
            notifications.show({
              title: "Opps!",
              message: result.data,
              color: "red",
              autoClose: 2000,
            });
          }
        }
      }
    });
  };

  useEffect(() => {
    initData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opened]);
  return (
    <Modal
      opened={opened}
      onClose={close}
      title="Pegawai Melaksanakan Perjalanan Dinas"
      size="lg"
      closeOnEscape={false}
      closeOnClickOutside={false}
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
    >
      <form onSubmit={form.onSubmit((value) => handleSubmit(value))}>
        <SimpleGrid>
          <Select
            label="Pilih Pegawai"
            clearable
            searchable
            data={
              pegawai
                ? pegawai.map((item: Pegawai) => {
                    return {
                      value: `${item.id}`,
                      label: `${item.expand.pangkat.nama} - ${item.nama_lengkap.toUpperCase()}`,
                    };
                  })
                : []
            }
            {...form.getInputProps("pegawai")}
          />
          <Checkbox label="Ketua ?" {...form.getInputProps("status")} />
        </SimpleGrid>
        <Group justify="end">
          <Button
            leftSection={<IconPlus size="1rem" />}
            color="green"
            type="submit"
          >
            Tambah
          </Button>
        </Group>
      </form>
    </Modal>
  );
}

export default ModalAddPegawaiKegiatan;
