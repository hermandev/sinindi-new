"use client";
import { useAppDispatch, useAppSelector } from "@/libs/redux/hooks";
import {
  modalAddPegawai,
  modalUpdatePegawai,
} from "@/libs/redux/reducers/master-data-slice";
import dynamic from "next/dynamic";
import React, { ReactNode } from "react";

const ModalAddPegawai = dynamic(
  () => import("@/app/(main)/master-data/pegawai/components/modal-add-pegawai"),
  { ssr: false },
);
const ModalUpdatePegawai = dynamic(
  () =>
    import("@/app/(main)/master-data/pegawai/components/modal-update-pegawai"),
  { ssr: false },
);

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

      {masterData.pegawai.update && (
        <ModalUpdatePegawai
          opened={masterData.pegawai.update}
          close={() =>
            dispatch(modalUpdatePegawai({ state: false, item: null }))
          }
        />
      )}
    </>
  );
}

export default ModalProvider;
