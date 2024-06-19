/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1h3faa67umxnoqx")

  collection.name = "cost_transport"
  collection.indexes = [
    "CREATE INDEX `idx_3PKsJYt` ON `cost_transport` (\n  `inside`,\n  `outside`,\n  `transportasi`\n)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1h3faa67umxnoqx")

  collection.name = "biaya_transport"
  collection.indexes = [
    "CREATE INDEX `idx_3PKsJYt` ON `biaya_transport` (\n  `inside`,\n  `outside`,\n  `transportasi`\n)"
  ]

  return dao.saveCollection(collection)
})
