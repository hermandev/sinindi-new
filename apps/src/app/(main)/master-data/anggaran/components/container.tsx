"use client";
import { SimpleGrid, Tabs } from "@mantine/core";
import { IconReportMoney } from "@tabler/icons-react";
import classes from "./container.module.css";
import PanelLuarDaerah from "./panel-luar-daerah";
import PanelDalamDaerah from "./panel-dalam-daerah";

function AnggaranContainer() {
  return (
    <SimpleGrid p="md">
      <Tabs variant="unstyled" defaultValue="ld" classNames={classes}>
        <Tabs.List justify="center">
          <Tabs.Tab value="ld" leftSection={<IconReportMoney size="1rem" />}>
            Luar Daerah
          </Tabs.Tab>
          <Tabs.Tab value="dd" leftSection={<IconReportMoney size="1rem" />}>
            Dalam Daerah
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="ld" pt="lg">
          <PanelLuarDaerah />
        </Tabs.Panel>
        <Tabs.Panel value="dd" pt="lg">
          <PanelDalamDaerah />
        </Tabs.Panel>
      </Tabs>
    </SimpleGrid>
  );
}

export default AnggaranContainer;
