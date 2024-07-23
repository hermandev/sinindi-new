import { Center, NumberFormatter, Text } from "@mantine/core";
import React, { useEffect, useState, useTransition } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { getDataBiayaHarianDd } from "../actions";
import { BiayaHarianDD } from "@/libs/db/types";

function TableBiayaHarianDd() {
  const [data, setData] = useState<any[]>([]);
  const [isPending, startTransition] = useTransition();

  const initData = () => {
    startTransition(async () => {
      const result = await getDataBiayaHarianDd();
      setData(result);
    });
  };
  const columns: TableColumn<BiayaHarianDD>[] = [
    {
      name: "Kabupaten",
      selector: (item) => item.expand.id_kabupaten.nama,
    },
    {
      name: "Satuan",
      selector: (item) => (item.satuan === "OH" ? "Orang/Hari" : "Orang/Kali"),
    },
    {
      name: "Harga",
      cell: (item) => (
        <NumberFormatter
          prefix="Rp "
          value={item.harga}
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

export default TableBiayaHarianDd;
