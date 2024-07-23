/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ri7fih3au3pilib")

  collection.indexes = [
    "CREATE INDEX `idx_qAECRdA` ON `template_berkas` (\n  `name`,\n  `is_active`\n)"
  ]

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zk3fodby",
    "name": "name",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ri7fih3au3pilib")

  collection.indexes = []

  // remove
  collection.schema.removeField("zk3fodby")

  return dao.saveCollection(collection)
})
