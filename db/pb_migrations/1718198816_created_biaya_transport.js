/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "1h3faa67umxnoqx",
    "created": "2024-06-12 13:26:56.721Z",
    "updated": "2024-06-12 13:26:56.721Z",
    "name": "biaya_transport",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "be8ceria",
        "name": "dd",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "j2t7uv25jmjiupg",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "krbxejuj",
        "name": "ld",
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
      },
      {
        "system": false,
        "id": "g8rge6cx",
        "name": "transportasi",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "DARAT",
            "LAUT",
            "UDARA"
          ]
        }
      }
    ],
    "indexes": [
      "CREATE INDEX `idx_3PKsJYt` ON `biaya_transport` (\n  `dd`,\n  `ld`,\n  `transportasi`\n)"
    ],
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
  const collection = dao.findCollectionByNameOrId("1h3faa67umxnoqx");

  return dao.deleteCollection(collection);
})
