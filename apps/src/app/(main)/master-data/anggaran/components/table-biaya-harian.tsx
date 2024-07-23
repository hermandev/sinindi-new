import { Center, NumberFormatter, Text } from "@mantine/core";
import React, { useEffect, useState, useTransition } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { getDataBiayaHarian } from "../actions";
import { BiayaHarian } from "@/libs/db/types";

function TableBiayaHarian() {
  const [data, setData] = useState<any[]>([]);
  const [isPending, startTransition] = useTransition();

  const initData = () => {
    startTransition(async () => {
      const result = await getDataBiayaHarian();
      setData(result);
    });
  };
  const columns: TableColumn<BiayaHarian>[] = [
    {
      name: "Provinsi",
      selector: (item) => item.expand.id_provinsi.nama,
    },
    {
      name: "Satuan",
      selector: (item) => (item.satuan === "OH" ? "Orang/Hari" : "Orang/Kali"),
    },
    {
      name: "Luar Daerah",
      cell: (item) => (
        <NumberFormatter
          prefix="Rp "
          value={item.harga_ld}
          thousandSeparator="."
          decimalSeparator=","
        />
      ),
    },
    {
      name: "Dalam Daerah",
      cell: (item) => (
        <NumberFormatter
          prefix="Rp "
          value={item.harga_dd}
          thousandSeparator="."
          decimalSeparator=","
        />
      ),
    },
    {
      name: "Diklat",
      cell: (item) => (
        <NumberFormatter
          prefix="Rp "
          value={item.harga_diklat}
          thousandSeparator="."
          decimalSeparator=","
        />
      ),
    },
    {
      name: "Action",
      selector: (item) => "",
      width: "100px",
    },
  ];

  useEffect(() => {
    initData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <DataTable
      columns={columns}
      data={data}
      pagination
      progressPending={isPending}
      noDataComponent={
        <Center mt="md">
          <Text>Belum Ada Data!</Text>
        </Center>
      }
    />
  );
}

export default TableBiayaHarian;
