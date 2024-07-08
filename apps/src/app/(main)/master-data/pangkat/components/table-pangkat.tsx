import { Pangkat } from "@/libs/db/types";
import { Paper, Text } from "@mantine/core";
import { useEffect, useState, useTransition } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { getDataPangkat } from "../actions";

function TablePangkat() {
  const [data, setData] = useState([]);
  const [isPending, startTransition] = useTransition();

  const getData = () => {
    startTransition(async () => {
      const result = await getDataPangkat();
      //@ts-ignore
      setData(result);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const columns: TableColumn<Pangkat>[] = [
    {
      name: "Pangkat",
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

export default TablePangkat;
