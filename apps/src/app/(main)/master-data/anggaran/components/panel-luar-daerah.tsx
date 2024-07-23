import { Accordion, Card, Grid, ScrollArea, Text } from "@mantine/core";
import TableBiayaHarian from "./table-biaya-penginapan";
import TableBiayaPenginapan from "./table-biaya-penginapan";
import TableBiayaTiket from "./table-biaya-tiket";
import TableBiayaTaksi from "./table-biaya-taksi";

function PanelLuarDaerah() {
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
                  <TableBiayaHarian />
                </ScrollArea>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="item-2">
              <Accordion.Control>
                <Text fw="bold">Biaya Penginapan</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <ScrollArea type="auto" offsetScrollbars>
                  <TableBiayaPenginapan />
                </ScrollArea>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="item-3">
              <Accordion.Control>
                <Text fw="bold">Biaya Tiket</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <ScrollArea type="auto" offsetScrollbars>
                  <TableBiayaTiket />
                </ScrollArea>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="item-4">
              <Accordion.Control>
                <Text fw="bold">Biaya Taksi</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <ScrollArea type="auto" offsetScrollbars>
                  <TableBiayaTaksi />
                </ScrollArea>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Card>
      </Grid.Col>
    </Grid>
  );
}

export default PanelLuarDaerah;
