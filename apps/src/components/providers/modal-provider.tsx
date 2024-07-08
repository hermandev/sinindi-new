"use client";
import ModalAddPegawai from "@/app/(main)/master-data/pegawai/components/modal-add-pegawai";
import { useAppDispatch, useAppSelector } from "@/libs/redux/hooks";
import { modalAddPegawai } from "@/libs/redux/reducers/master-data-slice";
import React, { ReactNode } from "react";

function ModalProvider({ children }: Readonly<{ children: ReactNode }>) {
  const dispatch = useAppDispatch();
  const masterData = useAppSelector((x) => x.masterData);

  return (
    <>
      {children}

      {masterData.pegawai.add && (
        <ModalAddPegawai
          opened={masterData.pegawai.add}
          close={() => dispatch(modalAddPegawai(false))}
        />
      )}
    </>
  );
}

export default ModalProvider;
