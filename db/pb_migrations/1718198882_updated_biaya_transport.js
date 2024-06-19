/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1h3faa67umxnoqx")

  collection.indexes = [
    "CREATE INDEX `idx_3PKsJYt` ON `biaya_transport` (\n  `inside`,\n  `outside`,\n  `transportasi`\n)"
  ]

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "be8ceria",
    "name": "inside",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "j2t7uv25jmjiupg",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "krbxejuj",
    "name": "outside",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "p0iuba5pwp5bess",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1h3faa67umxnoqx")

  collection.indexes = [
    "CREATE INDEX `idx_3PKsJYt` ON `biaya_transport` (\n  `dd`,\n  `ld`,\n  `transportasi`\n)"
  ]

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "be8ceria",
    "name": "dd",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "j2t7uv25jmjiupg",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "krbxejuj",
    "name": "ld",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "p0iuba5pwp5bess",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
