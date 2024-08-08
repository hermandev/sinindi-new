import { Usulan } from "@/libs/db/types";
import { NumberFormatter, Paper } from "@mantine/core";
import React from "react";
import DataTable, { TableColumn } from "react-data-table-component";

type Props = {
  data: Usulan[];
};
function TableUsulan({ data }: Props) {
  const columns: TableColumn<Usulan>[] = [
    {
      name: "URAIAN",
      selector: (row) => row.keterangan,
    },
    {
      name: "HARI",
      width: "70px",
      center: true,
      selector: (row) => row.jumlah,
    },
    {
      name: "INDEKS",
      width: "150px",
      right: true,
      cell: (row: Usulan, _: any) => (
        <NumberFormatter
          value={row.total_biaya}
          prefix="Rp "
          thousandSeparator
        />
      ),
    },
    {
      name: "JUMLAH",
      width: "150px",
      right: true,
      cell: (row: Usulan, _: any) => (
        <NumberFormatter
          value={row.total_bayar}
          prefix="Rp "
          thousandSeparator
        />
      ),
    },
  ];
  return (
    <Paper withBorder mt="xs">
      <DataTable
        columns={columns}
        data={data}
        highlightOnHover
        striped
        noDataComponent={"Belum ada data!"}
        dense
      />
    </Paper>
  );
}

export default TableUsulan;
