import { Center, NumberFormatter, Text } from "@mantine/core";
import React, { useEffect, useState, useTransition } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { getDataBiayaPenginapan } from "../actions";
import { BiayaPenginapan } from "@/libs/db/types";

function TableBiayaPenginapan() {
  const [data, setData] = useState<any[]>([]);
  const [isPending, startTransition] = useTransition();

  const initData = () => {
    startTransition(async () => {
      const result = await getDataBiayaPenginapan();
      setData(result);
    });
  };
  const columns: TableColumn<BiayaPenginapan>[] = [
    {
      name: "Provinsi",
      selector: (item) => item.expand.id_provinsi.nama,
    },
    {
      name: "Satuan",
      selector: (item) => (item.satuan === "OH" ? "Orang/Hari" : "Orang/Kali"),
    },
    {
      name: "Eselon Satu",
      cell: (item) => (
        <NumberFormatter
          prefix="Rp "
          value={item.eselon_satu}
          thousandSeparator="."
          decimalSeparator=","
        />
      ),
    },
    {
      name: "Eselon Dua",
      cell: (item) => (
        <NumberFormatter
          prefix="Rp "
          value={item.eselon_dua}
          thousandSeparator="."
          decimalSeparator=","
        />
      ),
    },
    {
      name: "Eselon Tiga",
      cell: (item) => (
        <NumberFormatter
          prefix="Rp "
          value={item.eselon_tiga}
          thousandSeparator="."
          decimalSeparator=","
        />
      ),
    },
    {
      name: "Eselon Empat",
      cell: (item) => (
        <NumberFormatter
          prefix="Rp "
          value={item.eselon_empat}
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

export default TableBiayaPenginapan;
