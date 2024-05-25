import { Instance, types } from "mobx-state-tree"
import { AuthenticationStoreModel } from "./AuthenticationStore"
import { EpisodeStoreModel } from "./EpisodeStore"
import { PlayerStoreModel } from "./PlayerStore"

/**
 * A RootStore model.
 */
export const RootStoreModel = types.model("RootStore").props({
  authenticationStore: types.optional(AuthenticationStoreModel, {}),
  episodeStore: types.optional(EpisodeStoreModel, {}),
  playerStore: types.optional(PlayerStoreModel, {
    players: [
      {
        playerID: 1,
        playerName: "Player ",
        lifePoints: 20,
        color: "green",
        playerIcon: "assets/icons/bell.png",
      },
      {
        playerID: 2,
        playerName: "Player ",
        lifePoints: 20,
        color: "green",
        playerIcon: "assets/icons/lock.png",
      }
    ],
    layout: "grid",
    favorites: [],
    favoritesOnly: false
  })
})

export type RootStoreType = Instance<typeof RootStoreModel>

let rootStore: RootStoreType;
export function useStore() {
  if (!rootStore) {
    rootStore = RootStoreModel.create({
      playerStore: {
        players: [
          {
            playerID: 1,
            playerName: "Player ",
            lifePoints: 20,
            color: "green",
            playerIcon: "assets/icons/bell.png",
          },
          {
            playerID: 2,
            playerName: "Player ",
            lifePoints: 20,
            color: "green",
            playerIcon: "assets/icons/lock.png",
          }
        ],
        layout: "grid",
        favorites: [],
      }
    });
  }
  return rootStore;
}
