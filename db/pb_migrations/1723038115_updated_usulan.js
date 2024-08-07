/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cl4ihlbinc9r9se")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dmvtqsoh",
    "name": "total_bayar",
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
  const collection = dao.findCollectionByNameOrId("cl4ihlbinc9r9se")

  // remove
  collection.schema.removeField("dmvtqsoh")

  return dao.saveCollection(collection)
})
