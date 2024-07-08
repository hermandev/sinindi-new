import { Box, Divider, Group, SimpleGrid, Title } from "@mantine/core";
import React from "react";

function DaskboardContainer() {
  return (
    <>
      <SimpleGrid p="md">
        <Group justify="space-between">
          <Box>
            <Title order={3}>Dashboard</Title>
            {/* <Text size="xs" c="dimmed" fs="italic"> */}
            {/*   Verifikasi Berkas Perjalanan Dinas */}
            {/* </Text> */}
          </Box>
        </Group>
      </SimpleGrid>
      <Divider />

      <SimpleGrid p="md"></SimpleGrid>
    </>
  );
}

export default DaskboardContainer;
