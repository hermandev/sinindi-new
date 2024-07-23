/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "n7soq7ph0k76uyp",
    "created": "2024-07-22 09:39:21.068Z",
    "updated": "2024-07-22 09:39:21.068Z",
    "name": "biaya_harian",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "6l8m8hix",
        "name": "satuan",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "OH",
            "OK"
          ]
        }
      },
      {
        "system": false,
        "id": "gn9sgbvu",
        "name": "harga_ld",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "hk4gqvfu",
        "name": "harga_dd",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "1iowffrz",
        "name": "harga_diklat",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "t57yjrkg",
        "name": "id_provinsi",
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
  const collection = dao.findCollectionByNameOrId("n7soq7ph0k76uyp");

  return dao.deleteCollection(collection);
})
