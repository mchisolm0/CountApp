import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { GameStoreModel } from "./GameStore"
import { AuthenticationStoreModel } from "./AuthenticationStore"
import { PlayerStoreModel } from "./PlayerStore"

/**
 * A RootStore model.
 */
export const RootStoreModel = types
  .model("RootStore")
  .props({
    playerStore: types.optional(PlayerStoreModel, {}),
    gameStore: types.optional(GameStoreModel, {}),
    authenticationStore: types.optional(AuthenticationStoreModel, {}),
  })

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}