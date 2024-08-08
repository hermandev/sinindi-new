"use client";
import { Kegiatan, Usulan } from "@/libs/db/types";
import { useAppSelector } from "@/libs/redux/hooks";
import React, { useEffect, useState, useTransition } from "react";
import { getPegawaiByKegiatan } from "../actions";
import {
  ActionIcon,
  Avatar,
  Badge,
  Box,
  Group,
  LoadingOverlay,
  Paper,
  SimpleGrid,
  Text,
  Tooltip,
} from "@mantine/core";
import DataTable from "react-data-table-component";
import TableUsulan from "./table-usulan";
import { IconX } from "@tabler/icons-react";

type Props = {
  kegiatan: Kegiatan;
};

function PegawaiKegiatan({ kegiatan }: Props) {
  const [data, setData] = useState<any[]>([]);
  const [loadInitData, startInitData] = useTransition();
  const modalAdd = useAppSelector((x) => x.kegiatan.pegawai.modalAdd);
  const initData = () => {
    startInitData(async () => {
      const result = await getPegawaiByKegiatan(kegiatan.id);
      setData(result);
    });
  };

  useEffect(() => {
    initData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalAdd]);

  useEffect(() => {
    initData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <SimpleGrid pos="relative">
      <LoadingOverlay
        visible={loadInitData}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
      />
      {data.map((item) => (
        <Paper withBorder p="xs" key={item.id}>
          <Group justify="space-between">
            <Group>
              <Avatar radius="xl" />
              <Box>
                <Text fw="bolder">
                  {item.expand.pegawai.nama_lengkap}

                  {item.status === "KETUA" ? (
                    <Badge variant="light" ml="md" size="xs">
                      KETUA
                    </Badge>
                  ) : (
                    <Badge variant="light" ml="md" size="xs" color="pink">
                      PENGIKUT
                    </Badge>
                  )}
                </Text>
                <Text fz="xs" c="dimmed">
                  {item.expand.pegawai.expand.pangkat.nama} -{" "}
                  {item.expand.pegawai.nrp | item.expand.pegawai.nip}
                </Text>
              </Box>
            </Group>
            <Tooltip withArrow label>
              <ActionIcon
                color="red"
                variant="light"
                // onClick={() => handleDelete(item.id, detailKegiatan.id)}
              >
                <IconX />
              </ActionIcon>
            </Tooltip>
          </Group>

          <TableUsulan data={item.expand.usulan_via_pk} />
        </Paper>
      ))}
    </SimpleGrid>
  );
}

export default PegawaiKegiatan;
