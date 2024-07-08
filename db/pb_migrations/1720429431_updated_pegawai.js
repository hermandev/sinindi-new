/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lrzaovngs2ykp1y")

  collection.indexes = [
    "CREATE INDEX `idx_POXTBaL` ON `pegawai` (\n  `nip`,\n  `nrp`,\n  `nama_lengkap`\n)"
  ]

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gj8o0v1i",
    "name": "nama_lengkap",
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
  const collection = dao.findCollectionByNameOrId("lrzaovngs2ykp1y")

  collection.indexes = [
    "CREATE INDEX `idx_POXTBaL` ON `pegawai` (\n  `nip`,\n  `nrp`,\n  `nama_lengap`\n)"
  ]

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gj8o0v1i",
    "name": "nama_lengap",
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
})
