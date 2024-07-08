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
import TablePangkat from "./table-golongan";
import { IconPlus } from "@tabler/icons-react";

function GolonganContainer() {
  return (
    <>
      <SimpleGrid p="md">
        <Group justify="space-between">
          <Box>
            <Title order={3}>Data Golongan</Title>
            <Text size="xs" c="dimmed" fs="italic">
              Master Data Golongan
            </Text>
          </Box>
          <Button leftSection={<IconPlus size="1rem" />}>Tambah</Button>
        </Group>
      </SimpleGrid>
      <Divider />

      <SimpleGrid p="md">
        <TablePangkat />
      </SimpleGrid>
    </>
  );
}

export default GolonganContainer;
