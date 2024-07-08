import React from "react";
import GolonganContainer from "./components/container";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "SININDI | Master Data Golongan",
  description: "Master Data Golongan",
};

function GolonganPage() {
  return <GolonganContainer />;
}

export default GolonganPage;
