/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "3yq33nsigmagyxh",
    "created": "2024-06-25 14:38:51.672Z",
    "updated": "2024-06-25 14:38:51.672Z",
    "name": "golongan",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "iaz07jks",
        "name": "nama",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [
      "CREATE INDEX `idx_rTh7hlg` ON `golongan` (`nama`)"
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
  const collection = dao.findCollectionByNameOrId("3yq33nsigmagyxh");

  return dao.deleteCollection(collection);
})
