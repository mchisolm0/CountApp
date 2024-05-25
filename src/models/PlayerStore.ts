import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { Player, PlayerModel } from "./Player"
import { withSetPropAction } from "./helpers/withSetPropAction"

export const PlayerStoreModel = types
  .model("PlayerStore")
  .props({
    players: types.array(PlayerModel),
    layout: types.enumeration(["grid", "single-column"]),
    favorites: types.array(types.reference(PlayerModel)),
    favoritesOnly: false,
  })
  .actions(withSetPropAction)
  .actions((store) => ({
    addFavorite(player: Player) {
      store.favorites.push(player)
    },
    removeFavorite(player: Player) {
      store.favorites.remove(player)
    },
  }))
  .views((store) => ({
    get episodesForList() {
      return store.favoritesOnly ? store.favorites : store.players
    },

    hasFavorite(player: Player) {
      return store.favorites.includes(player)
    },
  }))
  .actions((store) => ({
    toggleFavorite(player: Player) {
      if (store.hasFavorite(player)) {
        store.removeFavorite(player)
      } else {
        store.addFavorite(player)
      }
    },
  }))

export interface PlayerStore extends Instance<typeof PlayerStoreModel> { }
export interface PlayerStoreSnapshot extends SnapshotOut<typeof PlayerStoreModel> { }
