import { ActionIcon, Center, Group, Paper, Text, Tooltip } from "@mantine/core";
import React, { useEffect, useState, useTransition } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { Kegiatan } from "@/libs/db/types";
import { getDataKegiatan } from "../actions";
import moment from "moment";
import { IconEye, IconTrash } from "@tabler/icons-react";

function TableKegiatan() {
  const [data, setData] = useState<any[]>([]);
  const [isPending, startTransition] = useTransition();

  const initData = () => {
    startTransition(async () => {
      const result = await getDataKegiatan();
      setData(result);
    });
  };
  const columns: TableColumn<Kegiatan>[] = [
    {
      name: "Kegiatan",
      selector: (item) => item.kegiatan,
    },
    {
      name: "Transportasi",
      width: "150px",
      center: true,
      selector: (item) => item.transportasi,
    },

    {
      name: "Tangga Berangkat",
      width: "250px",
      center: true,
      selector: (item) =>
        `${moment(item.tgl_berangkat).format("DD MMM YYYY")} - ${moment(item.tgl_kembali).format("DD MMM YYYY")}`,
    },
    {
      name: "Tujuan",
      width: "150px",
      center: true,
      selector: (item) =>
        item.jenis === "LD"
          ? item.expand.provinsi.nama
          : item.expand.kabupaten.nama,
    },
    {
      name: "Action",
      width: "150px",
      center: true,
      cell: (item) => (
        <Group>
          <Tooltip withArrow label="Detail Kegiatan">
            <ActionIcon variant="light">
              <IconEye size="1rem" />
            </ActionIcon>
          </Tooltip>
          <Tooltip withArrow label="Hapus Kegiatan">
            <ActionIcon color="red" variant="light">
              <IconTrash size="1rem" />
            </ActionIcon>
          </Tooltip>
        </Group>
      ),
    },
  ];

  useEffect(() => {
    initData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Paper withBorder>
      <DataTable
        columns={columns}
        data={data}
        pagination
        highlightOnHover
        progressPending={isPending}
        noDataComponent={
          <Center mt="md">
            <Text>Belum Ada Data!</Text>
          </Center>
        }
      />
    </Paper>
  );
}

export default TableKegiatan;
