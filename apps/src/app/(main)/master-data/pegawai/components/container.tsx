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

function PegawaiContainer() {
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
          <Button>Tambah</Button>
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