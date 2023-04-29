SNIPPET_Bootstrap("", () => {
  LISTENFOR_PlayersReady({
    snippet: "mod_players_ready",
    ownerVillageId: OWNER_VILLAGE_OPT_OUT,
  });
  LISTENFOR_BuildingStart({
    includeTags: ["single_block_dirt"],
    ownerVillageId: OWNER_VILLAGE_OPT_OUT,
    snippet: "mod_blk_dirt",
    hasCreator: true,
  });
  LISTENFOR_BuildingStart({
    includeTags: ["single_block_stone"],
    ownerVillageId: OWNER_VILLAGE_OPT_OUT,
    snippet: "mod_blk_stone",
    hasCreator: true,
  });
  LISTENFOR_BuildingStart({
    includeTags: ["single_block_grass"],
    ownerVillageId: OWNER_VILLAGE_OPT_OUT,
    snippet: "mod_blk_grass",
    hasCreator: true,
  });
  LISTENFOR_BuildingStart({
    includeTags: ["single_block_water"],
    ownerVillageId: OWNER_VILLAGE_OPT_OUT,
    snippet: "mod_blk_water",
    hasCreator: true,
  });
  LISTENFOR_BuildingStart({
    includeTags: ["single_block_lava"],
    ownerVillageId: OWNER_VILLAGE_OPT_OUT,
    snippet: "mod_blk_lava",
    hasCreator: true,
  });
});

SNIPPET_BuildingStart("mod_blk_dirt", (_entity, payload) => {
  var position = QUERY_EXT_GetEntityPosition(_entity);
  OUTPUT_DespawnEntities([_entity]);
  OUTPUT_EXT_SetBlock(
    "minecraft:dirt",
    position[0],
    position[1] + 1,
    position[2]
  );
});

SNIPPET_BuildingStart("mod_blk_water", (_entity, payload) => {
  var position = QUERY_EXT_GetEntityPosition(_entity);
  OUTPUT_DespawnEntities([_entity]);
  OUTPUT_EXT_SetBlock(
    "badger:block_water",
    position[0],
    position[1] + 1,
    position[2]
  );
});

SNIPPET_BuildingStart("mod_blk_lava", (_entity, payload) => {
  var position = QUERY_EXT_GetEntityPosition(_entity);
  OUTPUT_DespawnEntities([_entity]);
  OUTPUT_EXT_SetBlock(
    "badger:block_lava",
    position[0],
    position[1] + 1,
    position[2]
  );
});


SNIPPET_BuildingStart("mod_blk_stone", (_entity, payload) => {
  var position = QUERY_EXT_GetEntityPosition(_entity);
  OUTPUT_DespawnEntities([_entity]);
  OUTPUT_EXT_SetBlock(
    "minecraft:stone",
    position[0],
    position[1] + 1,
    position[2]
  );
});

SNIPPET_BuildingStart("mod_blk_grass", (_entity, payload) => {
  var position = QUERY_EXT_GetEntityPosition(_entity);
  OUTPUT_DespawnEntities([_entity]);
  OUTPUT_EXT_SetBlock(
    "badger:grass",
    position[0],
    position[1] + 1,
    position[2]
  );
});

SNIPPET_PlayersReady("mod_players_ready", (_entity) => {
  Once();
});
