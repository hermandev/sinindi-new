/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "vhmw63fx74pvjey",
    "created": "2024-06-12 12:45:16.132Z",
    "updated": "2024-06-12 12:45:16.132Z",
    "name": "kelurahan",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "bzmhcofa",
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
        "id": "bso35mpj",
        "name": "kecamatan",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "jxpnofrrvgp3zr0",
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
  const collection = dao.findCollectionByNameOrId("vhmw63fx74pvjey");

  return dao.deleteCollection(collection);
})
