/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p0iuba5pwp5bess")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_mBLcirC` ON `provinsi` (`nama`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p0iuba5pwp5bess")

  collection.indexes = []

  return dao.saveCollection(collection)
})
