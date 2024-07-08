/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lrzaovngs2ykp1y")

  collection.listRule = "@request.auth.id != \"\" && (@request.auth.roles = \"ADMIN\" || @request.auth.roles = \"BENDAHARA\")"
  collection.viewRule = "@request.auth.id != \"\" && (@request.auth.roles = \"ADMIN\" || @request.auth.roles = \"BENDAHARA\")"
  collection.createRule = "@request.auth.id != \"\" && (@request.auth.roles = \"ADMIN\" || @request.auth.roles = \"BENDAHARA\")"
  collection.updateRule = "@request.auth.id != \"\" && (@request.auth.roles = \"ADMIN\" || @request.auth.roles = \"BENDAHARA\")"
  collection.deleteRule = "@request.auth.id != \"\" && (@request.auth.roles = \"ADMIN\" || @request.auth.roles = \"BENDAHARA\")"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lrzaovngs2ykp1y")

  collection.listRule = ""
  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
