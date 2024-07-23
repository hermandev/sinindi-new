/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fs05okneitar79a")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bfzxoxod",
    "name": "id_kegiatan",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "lmc94vz5mopnox8",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fs05okneitar79a")

  // remove
  collection.schema.removeField("bfzxoxod")

  return dao.saveCollection(collection)
})
