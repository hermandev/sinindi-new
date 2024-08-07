/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lmc94vz5mopnox8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "btcstrtx",
    "name": "is_delete",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lmc94vz5mopnox8")

  // remove
  collection.schema.removeField("btcstrtx")

  return dao.saveCollection(collection)
})
