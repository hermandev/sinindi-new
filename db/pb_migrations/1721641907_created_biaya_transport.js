/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "e7oyvnhij58v2d9",
    "created": "2024-07-22 09:51:47.813Z",
    "updated": "2024-07-22 09:51:47.813Z",
    "name": "biaya_transport",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "6jv4cg7g",
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
        "id": "jyjg5ofx",
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
        "id": "gdccfmqs",
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
  const collection = dao.findCollectionByNameOrId("e7oyvnhij58v2d9");

  return dao.deleteCollection(collection);
})
