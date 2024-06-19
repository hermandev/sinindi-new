/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9wg6c8ied21kgp6")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qbtxwlhb",
    "name": "type",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "UMUM",
        "ECONOMY",
        "BUSINESS"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9wg6c8ied21kgp6")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qbtxwlhb",
    "name": "type",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "UMUM",
        "ECONOMY",
        "BUSINESS"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
