/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lmc94vz5mopnox8")

  // add
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fp9bhcgc",
    "name": "status_sppd",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "guy6eozt",
    "name": "status_nota",
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

  // remove
  collection.schema.removeField("j7ghefx9")

  // remove
  collection.schema.removeField("fp9bhcgc")

  // remove
  collection.schema.removeField("guy6eozt")

  return dao.saveCollection(collection)
})
