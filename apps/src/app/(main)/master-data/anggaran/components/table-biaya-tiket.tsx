import { Center, NumberFormatter, Text } from "@mantine/core";
import React, { useEffect, useState, useTransition } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { getDataBiayaTiket } from "../actions";
import { BiayaTiket } from "@/libs/db/types";

function TableBiayaTiket() {
  const [data, setData] = useState<any[]>([]);
  const [isPending, startTransition] = useTransition();

  const initData = () => {
    startTransition(async () => {
      const result = await getDataBiayaTiket();
      setData(result);
    });
  };
  const columns: TableColumn<BiayaTiket>[] = [
    {
      name: "Provinsi",
      selector: (item) => item.expand.id_provinsi.nama,
    },
    {
      name: "Satuan",
      selector: (item) => (item.satuan === "OH" ? "Orang/Hari" : "Orang/Kali"),
    },
    {
      name: "Ekonimi",
      cell: (item) => (
        <NumberFormatter
          prefix="Rp "
          value={item.ekonomi}
          thousandSeparator="."
          decimalSeparator=","
        />
      ),
    },
    {
      name: "Bisnis",
      cell: (item) => (
        <NumberFormatter
          prefix="Rp "
          value={item.bisnis}
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

export default TableBiayaTiket;
