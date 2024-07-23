/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("9wg6c8ied21kgp6");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "9wg6c8ied21kgp6",
    "created": "2024-06-12 13:31:48.276Z",
    "updated": "2024-06-12 13:35:57.822Z",
    "name": "cost_transport_detail",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "pzkqjkiz",
        "name": "transport",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "1h3faa67umxnoqx",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "qbtxwlhb",
        "name": "type",
        "type": "select",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "UMUM",
            "ECONOMY",
            "BUSINESS"
          ]
        }
      },
      {
        "system": false,
        "id": "0i3z1rvy",
        "name": "price",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [
      "CREATE INDEX `idx_YpbjHa9` ON `cost_transport_detail` (\n  `transport`,\n  `type`\n)"
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
