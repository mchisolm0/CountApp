import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"

/**
 * Model description here for TypeScript hints.
 */
export const GameStoreModel = types
  .model("GameStore")
  .props({})
  .actions(withSetPropAction)
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface GameStore extends Instance<typeof GameStoreModel> {}
export interface GameStoreSnapshotOut extends SnapshotOut<typeof GameStoreModel> {}
export interface GameStoreSnapshotIn extends SnapshotIn<typeof GameStoreModel> {}
export const createGameStoreDefaultModel = () => types.optional(GameStoreModel, {})
