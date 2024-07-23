/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rr7f4ovp0nm2rck")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nbqqmgsg",
    "name": "id_kabupaten",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "j2t7uv25jmjiupg",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rr7f4ovp0nm2rck")

  // remove
  collection.schema.removeField("nbqqmgsg")

  return dao.saveCollection(collection)
})
