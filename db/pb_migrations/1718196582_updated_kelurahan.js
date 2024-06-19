/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vhmw63fx74pvjey")

  collection.indexes = [
    "CREATE INDEX `idx_mkJyMXx` ON `kelurahan` (`nama`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vhmw63fx74pvjey")

  collection.indexes = []

  return dao.saveCollection(collection)
})
