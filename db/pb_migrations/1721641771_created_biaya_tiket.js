/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "mrlilirmd618xsi",
    "created": "2024-07-22 09:49:31.008Z",
    "updated": "2024-07-22 09:49:31.008Z",
    "name": "biaya_tiket",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "piyu5lvz",
        "name": "satuan",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "OH",
            "OK"
          ]
        }
      },
      {
        "system": false,
        "id": "weqmduz0",
        "name": "ekonomi",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "84hpbzmi",
        "name": "bisnis",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "6avketym",
        "name": "id_provinsi",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "p0iuba5pwp5bess",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("mrlilirmd618xsi");

  return dao.deleteCollection(collection);
})
