import React from "react";
import KegiatanContainer from "./components/container";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "SININDI | Kegiatan",
  description: "Data Kegiatan Perjalanan Dinas",
};

function KegiatanPage() {
  return <KegiatanContainer />;
}

export default KegiatanPage;
