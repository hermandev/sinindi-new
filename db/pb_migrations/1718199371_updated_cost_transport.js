/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1h3faa67umxnoqx")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g8rge6cx",
    "name": "transportasi",
    "type": "select",
    "required": true,
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1h3faa67umxnoqx")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g8rge6cx",
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
  }))

  return dao.saveCollection(collection)
})
