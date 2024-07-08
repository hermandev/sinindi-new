/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  collection.listRule = "@request.auth.id != \"\" && (@request.auth.roles = \"ADMIN\" || @request.auth.roles = \"BENDAHARA\")"
  collection.viewRule = "@request.auth.id != \"\" && (@request.auth.roles = \"ADMIN\" || @request.auth.roles = \"BENDAHARA\")"
  collection.createRule = "@request.auth.id != \"\" && (@request.auth.roles = \"ADMIN\" || @request.auth.roles = \"BENDAHARA\")"
  collection.updateRule = "@request.auth.id != \"\" && (@request.auth.roles = \"ADMIN\" || @request.auth.roles = \"BENDAHARA\")"
  collection.deleteRule = "@request.auth.id != \"\" && (@request.auth.roles = \"ADMIN\" || @request.auth.roles = \"BENDAHARA\")"
  collection.options = {
    "allowEmailAuth": true,
    "allowOAuth2Auth": true,
    "allowUsernameAuth": true,
    "exceptEmailDomains": null,
    "manageRule": "@request.auth.id != \"\" && (@request.auth.roles = \"ADMIN\" || @request.auth.roles = \"BENDAHARA\")",
    "minPasswordLength": 6,
    "onlyEmailDomains": null,
    "onlyVerified": false,
    "requireEmail": false
  }

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  collection.listRule = "@request.auth.id != \"\" && @request.auth.roles = \"ADMIN\""
  collection.viewRule = "@request.auth.id != \"\""
  collection.createRule = "@request.auth.id != \"\""
  collection.updateRule = "@request.auth.id != \"\""
  collection.deleteRule = "@request.auth.id != \"\""
  collection.options = {
    "allowEmailAuth": true,
    "allowOAuth2Auth": true,
    "allowUsernameAuth": true,
    "exceptEmailDomains": null,
    "manageRule": null,
    "minPasswordLength": 6,
    "onlyEmailDomains": null,
    "onlyVerified": false,
    "requireEmail": false
  }

  return dao.saveCollection(collection)
})
