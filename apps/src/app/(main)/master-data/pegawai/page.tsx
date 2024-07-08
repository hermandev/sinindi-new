import { Metadata } from "next";
import React from "react";
import PegawaiContainer from "./components/container";

export const metadata: Metadata = {
  title: "SININDI | Master Data Pegawai",
  description: "SININDI | Master Data Pegawai",
};

function PegawaiPage() {
  return <PegawaiContainer />;
}

export default PegawaiPage;
