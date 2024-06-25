/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "x8h1xdpr6s5nasa",
    "created": "2024-06-25 14:37:59.664Z",
    "updated": "2024-06-25 14:37:59.664Z",
    "name": "pangkat",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fytz1cms",
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
      "CREATE INDEX `idx_ze9s86F` ON `pangkat` (`nama`)"
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
  const collection = dao.findCollectionByNameOrId("x8h1xdpr6s5nasa");

  return dao.deleteCollection(collection);
})
