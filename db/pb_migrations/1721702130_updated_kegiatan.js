/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lmc94vz5mopnox8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jft3tgwl",
    "name": "isi_surat",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ob27u2zh",
    "name": "kegiatan",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lmc94vz5mopnox8")

  // remove
  collection.schema.removeField("jft3tgwl")

  // remove
  collection.schema.removeField("ob27u2zh")

  return dao.saveCollection(collection)
})
