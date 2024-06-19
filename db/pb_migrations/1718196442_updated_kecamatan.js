/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jxpnofrrvgp3zr0")

  collection.indexes = [
    "CREATE INDEX `idx_wGCG4jD` ON `kecamatan` (`nama`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jxpnofrrvgp3zr0")

  collection.indexes = []

  return dao.saveCollection(collection)
})
