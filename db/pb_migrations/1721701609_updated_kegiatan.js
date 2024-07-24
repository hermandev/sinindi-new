/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lmc94vz5mopnox8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "plemzspy",
    "name": "provinsi",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5rcrswlz",
    "name": "kabupaten",
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
  const collection = dao.findCollectionByNameOrId("lmc94vz5mopnox8")

  // remove
  collection.schema.removeField("plemzspy")

  // remove
  collection.schema.removeField("5rcrswlz")

  return dao.saveCollection(collection)
})
