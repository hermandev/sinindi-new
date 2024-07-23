/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "lmc94vz5mopnox8",
    "created": "2024-07-23 01:27:16.280Z",
    "updated": "2024-07-23 01:27:16.280Z",
    "name": "kegiatan",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "d3f6gxaa",
        "name": "isi_surat",
        "type": "editor",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "convertUrls": false
        }
      },
      {
        "system": false,
        "id": "ihjymplt",
        "name": "kegiatan",
        "type": "editor",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "convertUrls": false
        }
      },
      {
        "system": false,
        "id": "ihrizwyw",
        "name": "jenis",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "LD",
            "DD"
          ]
        }
      },
      {
        "system": false,
        "id": "vvkydmh2",
        "name": "tgl_berangkat",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "gssat9av",
        "name": "tgl_kembali",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "mx43epdj",
        "name": "transportasi",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "DARAT",
            "LAUT",
            "UDARA"
          ]
        }
      },
      {
        "system": false,
        "id": "hosck0ly",
        "name": "no_sprint",
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
        "id": "ue3rgrt1",
        "name": "no_nota",
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
        "id": "lowgcecy",
        "name": "no_sppd",
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
        "id": "m9fdbdeh",
        "name": "status",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "DRAFT",
            "PENGAJUAN",
            "VERIF",
            "REVISI",
            "DONE"
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
  const collection = dao.findCollectionByNameOrId("lmc94vz5mopnox8");

  return dao.deleteCollection(collection);
})
