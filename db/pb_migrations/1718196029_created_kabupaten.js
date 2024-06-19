/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "j2t7uv25jmjiupg",
    "created": "2024-06-12 12:40:29.822Z",
    "updated": "2024-06-12 12:40:29.822Z",
    "name": "kabupaten",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "nhfn9aqg",
        "name": "provinsi",
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
        "id": "ppqtqgk8",
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
  const collection = dao.findCollectionByNameOrId("j2t7uv25jmjiupg");

  return dao.deleteCollection(collection);
})
