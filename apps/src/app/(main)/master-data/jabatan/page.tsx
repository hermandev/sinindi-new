import React from "react";
import JabatanContainer from "./components/container";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "SININDI | Master Data Jabatan",
  description: "Master Data Jabatan",
};

function JabatanPage() {
  return <JabatanContainer />;
}

export default JabatanPage;
