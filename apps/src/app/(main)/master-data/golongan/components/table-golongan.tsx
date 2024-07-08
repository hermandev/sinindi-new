import { Golongan, Pangkat } from "@/libs/db/types";
import { Paper, Text } from "@mantine/core";
import { useEffect, useState, useTransition } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { getDataGolongan } from "../actions";

function TableGolongan() {
  const [data, setData] = useState([]);
  const [isPending, startTransition] = useTransition();

  const getData = () => {
    startTransition(async () => {
      const result = await getDataGolongan();
      //@ts-ignore
      setData(result);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const columns: TableColumn<Golongan>[] = [
    {
      name: "Golongan",
      selector: (row) => row.nama,
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

export default TableGolongan;
