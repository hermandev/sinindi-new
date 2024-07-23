import { Accordion, Card, Grid, ScrollArea, Text } from "@mantine/core";
import React from "react";
import TableBiayaHarianDd from "./table-biaya-harian-dd";
import TableBiayaPenginapanDd from "./table-biaya-penginapan-dd";
import TableBiayaTaksiDd from "./table-biaya-taksi-dd";

function PanelDalamDaerah() {
  return (
    <Grid>
      <Grid.Col>
        <Card radius="md" withBorder>
          <Accordion variant="separated">
            <Accordion.Item value="item-1">
              <Accordion.Control>
                <Text fw="bold">Biaya Harian</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <ScrollArea type="auto" offsetScrollbars>
                  <TableBiayaHarianDd />
                </ScrollArea>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="item-2">
              <Accordion.Control>
                <Text fw="bold">Biaya Penginapan</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <ScrollArea type="auto" offsetScrollbars>
                  <TableBiayaPenginapanDd />
                </ScrollArea>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="item-4">
              <Accordion.Control>
                <Text fw="bold">Biaya Taksi</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <ScrollArea type="auto" offsetScrollbars>
                  <TableBiayaTaksiDd />
                </ScrollArea>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Card>
      </Grid.Col>
    </Grid>
  );
}

export default PanelDalamDaerah;
