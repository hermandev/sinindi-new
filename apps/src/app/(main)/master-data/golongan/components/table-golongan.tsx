import { Golongan } from "@/libs/db/types";
import { ActionIcon, Paper, Text, Tooltip, rem } from "@mantine/core";
import { useEffect, useState, useTransition } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { getDataGolongan } from "../actions";
import { IconEdit } from "@tabler/icons-react";

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
      center: true,
      cell: (row) => (
        <Tooltip label="Edit Data" withArrow>
          <ActionIcon variant="light" color="orange" aria-label="Edit">
            <IconEdit style={{ width: rem(20) }} stroke={1.5} />
          </ActionIcon>
        </Tooltip>
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

export default TableGolongan;
