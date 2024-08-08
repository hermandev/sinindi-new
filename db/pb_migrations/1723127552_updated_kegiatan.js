/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lmc94vz5mopnox8")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "j7ghefx9",
    "name": "status_sprint",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "DRAFT",
        "VERIFIKASI",
        "DONE"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lmc94vz5mopnox8")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "j7ghefx9",
    "name": "status_spint",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "DRAFT",
        "VERIFIKASI",
        "DONE"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
