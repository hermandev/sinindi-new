/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "cfxv59v61yn5jud",
    "created": "2024-07-22 09:47:23.090Z",
    "updated": "2024-07-22 09:47:23.090Z",
    "name": "biaya_penginapan_dd",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dlzhzbsk",
        "name": "eselon_satu",
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
        "id": "u9bphxd4",
        "name": "eselon_dua",
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
        "id": "hb3cajms",
        "name": "eselon_tiga",
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
        "id": "mi5evpni",
        "name": "eselon_empat",
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
        "id": "vtz2bmjp",
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
        "id": "imoztlus",
        "name": "id_kabupaten",
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
  const collection = dao.findCollectionByNameOrId("cfxv59v61yn5jud");

  return dao.deleteCollection(collection);
})
