/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "0gdsafzbezq0hl3",
    "created": "2024-07-23 01:35:42.994Z",
    "updated": "2024-07-23 01:35:42.994Z",
    "name": "pegawai_kegiatan",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "i8zzprjt",
        "name": "pegawai",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "lrzaovngs2ykp1y",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "irrzd8ox",
        "name": "kegiatan",
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
      },
      {
        "system": false,
        "id": "z6svgnxe",
        "name": "status",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "KETUA",
            "PENGIKUT"
          ]
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
  const collection = dao.findCollectionByNameOrId("0gdsafzbezq0hl3");

  return dao.deleteCollection(collection);
})
