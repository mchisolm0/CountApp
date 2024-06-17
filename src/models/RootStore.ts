import { Instance, types } from "mobx-state-tree"
import { GameStoreModel } from "./GameStore"
import { AuthenticationStoreModel } from "./AuthenticationStore"
import { EpisodeStoreModel } from "./EpisodeStore"
import { PlayerStoreModel } from "./PlayerStore"

/**
 * A RootStore model.
 */
export const RootStoreModel = types.model("RootStore").props({
  playerStore: types.optional(PlayerStoreModel, {} as any),
  gameStore: types.optional(GameStoreModel, {} as any),
  authenticationStore: types.optional(AuthenticationStoreModel, {}),
  episodeStore: types.optional(EpisodeStoreModel, {}),
})
