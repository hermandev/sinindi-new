/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "g3tt3ni13zirtoo",
    "created": "2024-06-25 14:38:19.647Z",
    "updated": "2024-06-25 14:38:19.647Z",
    "name": "jabatan",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hi9k3hn8",
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
      "CREATE INDEX `idx_Inlh0Ay` ON `jabatan` (`nama`)"
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
  const collection = dao.findCollectionByNameOrId("g3tt3ni13zirtoo");

  return dao.deleteCollection(collection);
})
