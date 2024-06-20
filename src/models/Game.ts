import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"
import { PlayerStoreModel, createPlayerStoreDefaultModel } from "./PlayerStore"

/**
 * Model description here for TypeScript hints.
 */
export const GameModel = types
  .model("Game")
  .props({
    gameID: types.optional(types.identifierNumber, -1),
    date: types.optional(types.Date, Date.now()),
    playerStore: types.optional(PlayerStoreModel, createPlayerStoreDefaultModel),
    isActive: true,
    isLocalMultiplayer: true
  })
  .actions(withSetPropAction)
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface Game extends Instance<typeof GameModel> { }
export interface GameSnapshotOut extends SnapshotOut<typeof GameModel> { }
export interface GameSnapshotIn extends SnapshotIn<typeof GameModel> { }
export const createGameDefaultModel = () => types.optional(GameModel, {})
