/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rr7f4ovp0nm2rck")

  // remove
  collection.schema.removeField("ljtoj1tu")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rr7f4ovp0nm2rck")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ljtoj1tu",
    "name": "id_kabupaten",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "p0iuba5pwp5bess",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
