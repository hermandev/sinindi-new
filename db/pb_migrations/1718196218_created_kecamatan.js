/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "jxpnofrrvgp3zr0",
    "created": "2024-06-12 12:43:38.783Z",
    "updated": "2024-06-12 12:43:38.783Z",
    "name": "kecamatan",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "yave441a",
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
      },
      {
        "system": false,
        "id": "q2x1fqbx",
        "name": "kabupaten",
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
  const collection = dao.findCollectionByNameOrId("jxpnofrrvgp3zr0");

  return dao.deleteCollection(collection);
})
