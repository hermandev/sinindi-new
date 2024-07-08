/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lrzaovngs2ykp1y")

  collection.indexes = [
    "CREATE INDEX `idx_POXTBaL` ON `pegawai` (\n  `nip`,\n  `nrp`,\n  `nama_lengap`\n)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lrzaovngs2ykp1y")

  collection.indexes = []

  return dao.saveCollection(collection)
})
