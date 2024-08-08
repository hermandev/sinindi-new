import { DasarSprint, Kegiatan } from "@/libs/db/types";
import { useAppSelector } from "@/libs/redux/hooks";
import {
  Button,
  Center,
  Group,
  Modal,
  Paper,
  SimpleGrid,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { IconDeviceFloppy, IconPlus } from "@tabler/icons-react";
import React, { useEffect, useState, useTransition } from "react";
import z from "zod";
import { getDasarSprintByKegiatan } from "../actions";
import DataTable, { TableColumn } from "react-data-table-component";

type Props = {
  opened: boolean;
  close: () => void;
};

const SchemaData = z.object({
  no_sprint: z.string().min(1, { message: "Tidak boleh kosong" }),
});

function ModalAddSprint({ opened, close }: Props) {
  const kegiatan: Kegiatan | null = useAppSelector(
    (x) => x.kegiatan.sprint.item,
  );
  const [loadInit, startInitData] = useTransition();
  const [point, setPoint] = useState<any[]>([]);

  const form = useForm<z.infer<typeof SchemaData>>({
    initialValues: {
      no_sprint: "",
    },
    validate: zodResolver(SchemaData),
  });

  const handleSubmit = (data: z.infer<typeof SchemaData>) => {
    console.log(data);
  };

  const initData = () => {
    if (kegiatan) {
      startInitData(async () => {
        const result = await getDasarSprintByKegiatan(kegiatan.id);
        setPoint(result);
      });
    }
  };

  const columns: TableColumn<DasarSprint>[] = [
    {
      name: "KETERANGAN",
      selector: (row) => row.keterangan,
    },
    {
      name: "AKSI",
      selector: (row) => row.keterangan,
    },
  ];

  useEffect(() => {
    initData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Modal
      opened={opened}
      onClose={close}
      title="Buat Surat Perintah"
      size="lg"
      closeOnEscape={false}
      closeOnClickOutside={false}
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
    >
      <form onSubmit={form.onSubmit((value) => handleSubmit(value))}>
        <SimpleGrid mb="md">
          <TextInput
            label="Nomor Surat Perintah"
            placeholder="Masukan nomor surat perintah"
            {...form.getInputProps("no_sprint")}
          />
        </SimpleGrid>
        <SimpleGrid mb="md" mt="xl">
          <Group justify="space-between" align="baseline">
            <Text fw="bolder">Point Dasar</Text>
            <Button
              color="pink"
              leftSection={<IconPlus size="1rem" />}
              size="xs"
            >
              Tambah
            </Button>
          </Group>
          <Paper withBorder>
            <DataTable
              columns={columns}
              data={point}
              highlightOnHover
              striped
              noDataComponent={
                <Center p="md">
                  <Text>Belum ada data!</Text>
                </Center>
              }
            />
          </Paper>
        </SimpleGrid>

        <Group justify="end" mt="md">
          <Button leftSection={<IconDeviceFloppy size="1rem" />} type="submit">
            Simpan
          </Button>
        </Group>
      </form>
    </Modal>
  );
}

export default ModalAddSprint;
