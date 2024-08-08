/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "45rjruuysw0s41t",
    "created": "2024-08-08 07:55:44.660Z",
    "updated": "2024-08-08 07:55:44.660Z",
    "name": "dasar_sprint",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "r1ykx2vq",
        "name": "ketarangan",
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
        "id": "logqk7ig",
        "name": "field",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "lmc94vz5mopnox8",
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
  const collection = dao.findCollectionByNameOrId("45rjruuysw0s41t");

  return dao.deleteCollection(collection);
})
