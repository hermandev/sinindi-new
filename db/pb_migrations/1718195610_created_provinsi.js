/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "p0iuba5pwp5bess",
    "created": "2024-06-12 12:33:30.177Z",
    "updated": "2024-06-12 12:33:30.177Z",
    "name": "provinsi",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "cit2tu14",
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
  const collection = dao.findCollectionByNameOrId("p0iuba5pwp5bess");

  return dao.deleteCollection(collection);
})
