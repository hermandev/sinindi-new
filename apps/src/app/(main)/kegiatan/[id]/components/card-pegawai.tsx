"use client";
import { Kegiatan } from "@/libs/db/types";
import { useAppDispatch } from "@/libs/redux/hooks";
import { modalAddPegawaiKegiatan } from "@/libs/redux/reducers/kegiatan-slice";
import {
  ActionIcon,
  Box,
  Button,
  Center,
  Divider,
  Grid,
  Group,
  Menu,
  Paper,
  SimpleGrid,
  Text,
  Tooltip,
} from "@mantine/core";
import { IconFileTypePdf, IconUpload, IconUserPlus } from "@tabler/icons-react";
import React from "react";

type Props = {
  kegiatan: Kegiatan;
};

function CardPegawai({ kegiatan }: Props) {
  const dispatch = useAppDispatch();
  return (
    <Grid mt="xl">
      <Grid.Col span={{ base: 12, xs: 8 }}>
        <Paper withBorder radius="md" style={{ overflow: "hidden" }}>
          <Group p="xs" justify="space-between" align="center">
            <Box>
              <Text fw="bolder">Pegawai</Text>
              <Text fz="xs" c="dimmed">
                Pengawai yang melaksanakan perjlanan dinas
              </Text>
            </Box>
            <Button
              leftSection={<IconUserPlus size="1rem" />}
              color="green"
              onClick={() =>
                dispatch(
                  modalAddPegawaiKegiatan({ state: true, item: kegiatan }),
                )
              }
            >
              Tambah
            </Button>
          </Group>
          <Divider />
          <Paper p="md">test</Paper>
        </Paper>
      </Grid.Col>
      <Grid.Col span={{ base: 12, xs: 4 }}>
        <Paper withBorder radius="md">
          <Group p="xs" justify="space-between" align="center">
            <Box>
              <Text fw="bolder">Berkas</Text>
            </Box>
          </Group>
          <Divider />
          <SimpleGrid p="xs">
            <Paper p="xs" bg="indigo.0">
              <Group>
                <Text fz="xs">SPRINT</Text>
              </Group>
            </Paper>
            <Paper p="xs" bg="indigo.0">
              <Group>
                <Text fz="xs">NOTA DINAS</Text>
              </Group>
            </Paper>
            <Paper p="xs" bg="indigo.0">
              <Group>
                <Text fz="xs">SPPD</Text>
              </Group>
            </Paper>
          </SimpleGrid>
        </Paper>

        <Paper withBorder mt="md" radius="md">
          <Group p="xs" justify="space-between" align="center">
            <Box>
              <Text fw="bolder">Upload Berkas</Text>
            </Box>
            <Menu withArrow shadow="md">
              <Menu.Target>
                <Tooltip label="Upload Berkas" withArrow>
                  <ActionIcon radius="md" variant="light">
                    <IconUpload size="1rem" />
                  </ActionIcon>
                </Tooltip>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item leftSection={<IconFileTypePdf size="1rem" />}>
                  SPPD
                </Menu.Item>
                <Menu.Item leftSection={<IconFileTypePdf size="1rem" />}>
                  Boarding Pass
                </Menu.Item>
                <Menu.Item leftSection={<IconFileTypePdf size="1rem" />}>
                  Bill Hotel
                </Menu.Item>
                <Menu.Item leftSection={<IconFileTypePdf size="1rem" />}>
                  Tiket Pesawat
                </Menu.Item>
                <Menu.Item leftSection={<IconFileTypePdf size="1rem" />}>
                  Laporan Hasil Perjalanan
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
          <Divider />
          <SimpleGrid p="xs">
            <Center>Belum Ada Berkas</Center>
          </SimpleGrid>
        </Paper>
      </Grid.Col>
    </Grid>
  );
}

export default CardPegawai;
