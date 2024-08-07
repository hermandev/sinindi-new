import {
  ActionIcon,
  Center,
  Chip,
  Group,
  Paper,
  Text,
  Tooltip,
  rem,
} from "@mantine/core";
import React, { useEffect, useState, useTransition } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { Kegiatan } from "@/libs/db/types";
import { getDataKegiatan } from "../actions";
import moment from "moment";
import {
  IconCar,
  IconEye,
  IconPlaneTilt,
  IconSailboat,
  IconTrash,
} from "@tabler/icons-react";
import Link from "next/link";
import { useAppSelector } from "@/libs/redux/hooks";

function TableKegiatan() {
  const [data, setData] = useState<any[]>([]);
  const [isPending, startTransition] = useTransition();
  const modalAdd = useAppSelector((x) => x.kegiatan.kegiatan.modalAdd);

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
      wrap: true,
    },
    {
      name: "Transportasi",
      width: "150px",
      center: true,
      cell: (item: Kegiatan, _: any) => (
        <>
          {item.transportasi === "UDARA" && (
            <Chip
              icon={
                <IconPlaneTilt style={{ width: rem(16), height: rem(16) }} />
              }
              variant="light"
              defaultChecked
              color="orange"
            >
              Udara
            </Chip>
          )}
          {item.transportasi === "LAUT" && (
            <Chip
              icon={
                <IconSailboat style={{ width: rem(16), height: rem(16) }} />
              }
              variant="light"
              defaultChecked
            >
              Laut
            </Chip>
          )}
          {item.transportasi === "DARAT" && (
            <Chip
              icon={<IconCar style={{ width: rem(16), height: rem(16) }} />}
              variant="light"
              defaultChecked
              color="grape"
            >
              Darat
            </Chip>
          )}
        </>
      ),
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
      width: "200px",
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
      cell: (item: Kegiatan, _: any) => (
        <Group>
          <Tooltip withArrow label="Detail Kegiatan">
            <ActionIcon
              variant="light"
              component={Link}
              href={`/kegiatan/${item.id}`}
            >
              <IconEye size="1rem" />
            </ActionIcon>
          </Tooltip>
          <Tooltip withArrow label="Hapus Kegiatan">
            <ActionIcon color="red" variant="light" disabled={!item.is_delete}>
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
  }, [modalAdd]);

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
