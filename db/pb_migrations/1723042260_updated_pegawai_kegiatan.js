/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0gdsafzbezq0hl3")

  collection.name = "pegawaiKegiatan"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0gdsafzbezq0hl3")

  collection.name = "pegawai_kegiatan"

  return dao.saveCollection(collection)
})
