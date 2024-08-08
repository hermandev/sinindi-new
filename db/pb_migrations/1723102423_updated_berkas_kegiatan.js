/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fs05okneitar79a")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "brcqbfqc",
    "name": "no_berkas",
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
    "id": "br9bp1xm",
    "name": "urutan",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fs05okneitar79a")

  // remove
  collection.schema.removeField("brcqbfqc")

  // remove
  collection.schema.removeField("br9bp1xm")

  return dao.saveCollection(collection)
})
