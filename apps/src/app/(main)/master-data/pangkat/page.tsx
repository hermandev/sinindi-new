import React from "react";
import PangkatContainer from "./components/container";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "SININDI | Master Data Pangkat",
  description: "Master Data Pangkat",
};

function PangkatPage() {
  return <PangkatContainer />;
}

export default PangkatPage;
