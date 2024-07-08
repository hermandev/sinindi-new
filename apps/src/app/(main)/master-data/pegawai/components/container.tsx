"use client";
import {
  Box,
  Button,
  Divider,
  Group,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import TablePegawai from "./table-pegawai";
import { IconPlus } from "@tabler/icons-react";
import { useAppDispatch } from "@/libs/redux/hooks";
import { modalAddPegawai } from "@/libs/redux/reducers/master-data-slice";

function PegawaiContainer() {
  const dispatch = useAppDispatch();
  return (
    <>
      <SimpleGrid p="md">
        <Group justify="space-between">
          <Box>
            <Title order={3}>Data Pegawai</Title>
            <Text size="xs" c="dimmed" fs="italic">
              Master Data Pegawai
            </Text>
          </Box>
          <Button
            leftSection={<IconPlus size="1rem" />}
            onClick={() => dispatch(modalAddPegawai(true))}
          >
            Tambah
          </Button>
        </Group>
      </SimpleGrid>
      <Divider />

      <SimpleGrid p="md">
        <TablePegawai />
      </SimpleGrid>
    </>
  );
}

export default PegawaiContainer;
