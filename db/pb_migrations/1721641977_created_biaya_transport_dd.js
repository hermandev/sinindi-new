/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "rr7f4ovp0nm2rck",
    "created": "2024-07-22 09:52:57.218Z",
    "updated": "2024-07-22 09:52:57.218Z",
    "name": "biaya_transport_dd",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "bgfaiuxe",
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
        "id": "gweeblle",
        "name": "harga",
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
        "id": "ljtoj1tu",
        "name": "id_kabupaten",
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
  const collection = dao.findCollectionByNameOrId("rr7f4ovp0nm2rck");

  return dao.deleteCollection(collection);
})
