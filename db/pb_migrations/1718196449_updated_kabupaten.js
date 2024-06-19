/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j2t7uv25jmjiupg")

  collection.indexes = [
    "CREATE INDEX `idx_KsdAIbi` ON `kabupaten` (`nama`)",
    "CREATE INDEX `idx_CBqbyKr` ON `kabupaten` (`nama`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j2t7uv25jmjiupg")

  collection.indexes = [
    "CREATE INDEX `idx_KsdAIbi` ON `kabupaten` (`nama`)"
  ]

  return dao.saveCollection(collection)
})
