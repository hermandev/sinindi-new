/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  collection.name = "users"
  collection.indexes = [
    "CREATE INDEX `idx_cVRmGao` ON `users` (\n  `nip`,\n  `nrp`,\n  `nama_lengkap`,\n  `roles`\n)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  collection.name = "pegawai"
  collection.indexes = [
    "CREATE INDEX `idx_cVRmGao` ON `pegawai` (\n  `nip`,\n  `nrp`,\n  `nama_lengkap`,\n  `roles`\n)"
  ]

  return dao.saveCollection(collection)
})
