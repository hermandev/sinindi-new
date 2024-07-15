import { Pegawai } from "@/libs/db/types";
import { ActionIcon, Paper, Text, Tooltip, rem } from "@mantine/core";
import React, { useEffect, useState, useTransition } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { getDataPegawai } from "../actions";
import { IconEdit, IconRefresh } from "@tabler/icons-react";
import { useAppSelector } from "@/libs/redux/hooks";

function TablePegawai() {
  const [data, setData] = useState([]);
  const [isPending, startTransition] = useTransition();
  const modalAdd = useAppSelector((x) => x.masterData.pegawai.add);

  const getData = () => {
    startTransition(async () => {
      const result = await getDataPegawai();
      //@ts-ignore
      setData(result);
    });
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalAdd]);

  const columns: TableColumn<Pegawai>[] = [
    {
      name: "NIP",
      selector: (row) => row.nip,
      width: "150px",
    },
    {
      name: "NRP",
      selector: (row) => row.nrp,
      width: "150px",
    },
    {
      name: "Nama Lengkap",
      selector: (row) => row.nama_lengkap,
    },

    {
      name: "Jenis Kelamin",
      selector: (row) => row.kelamin,
    },
    {
      name: "Nomor HP",
      selector: (row) => row.no_hp,
    },
    {
      name: "Action",
      width: "100px",
      center: true,
      cell: (row: Pegawai) => (
        <ActionIcon.Group>
          <Tooltip label="Reset Password" withArrow>
            <ActionIcon variant="light" color="pink" aria-label="Reset">
              <IconRefresh style={{ width: rem(20) }} stroke={1.5} />
            </ActionIcon>
          </Tooltip>

          <Tooltip label="Edit Data" withArrow>
            <ActionIcon variant="light" color="orange" aria-label="Edit">
              <IconEdit style={{ width: rem(20) }} stroke={1.5} />
            </ActionIcon>
          </Tooltip>
        </ActionIcon.Group>
      ),
    },
  ];
  return (
    <Paper withBorder>
      <DataTable
        columns={columns}
        data={data}
        noDataComponent={<Text>Tidak ada data!</Text>}
        progressPending={isPending}
        pagination
        highlightOnHover
        striped
      />
    </Paper>
  );
}

export default TablePegawai;
