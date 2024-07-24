import { Box, Divider, Group, SimpleGrid, Text, Title } from "@mantine/core";
import React from "react";

function VerifikasiContainer() {
  return (
    <>
      <SimpleGrid p="md">
        <Group justify="space-between">
          <Box>
            <Title order={3}>Verisikasi</Title>
            <Text size="xs" c="dimmed" fs="italic">
              Verifikasi Kegiatan Perjalanan Dinas
            </Text>
          </Box>
        </Group>
      </SimpleGrid>
      <Divider />

      <SimpleGrid p="md"></SimpleGrid>
    </>
  );
}

export default VerifikasiContainer;
