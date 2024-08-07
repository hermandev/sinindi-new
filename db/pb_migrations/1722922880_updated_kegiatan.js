/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lmc94vz5mopnox8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "r6twhame",
    "name": "jumla_hari",
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
  const collection = dao.findCollectionByNameOrId("lmc94vz5mopnox8")

  // remove
  collection.schema.removeField("r6twhame")

  return dao.saveCollection(collection)
})
