import { Pegawai } from "@/libs/db/types";
import { Paper, Text } from "@mantine/core";
import React, { useEffect, useState, useTransition } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { getDataPegawai } from "../actions";

function TablePegawai() {
  const [data, setData] = useState([]);
  const [isPending, startTransition] = useTransition();

  const getData = () => {
    startTransition(async () => {
      const result = await getDataPegawai();
      //@ts-ignore
      setData(result);
    });
  };

  useEffect(() => {
    getData();
  }, []);

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
