/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9wg6c8ied21kgp6")

  collection.name = "cost_transport_detail"
  collection.indexes = [
    "CREATE INDEX `idx_YpbjHa9` ON `cost_transport_detail` (\n  `transport`,\n  `type`\n)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9wg6c8ied21kgp6")

  collection.name = "biaya_transport_detail"
  collection.indexes = [
    "CREATE INDEX `idx_YpbjHa9` ON `biaya_transport_detail` (\n  `transport`,\n  `type`\n)"
  ]

  return dao.saveCollection(collection)
})
