import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"
import { PlayerModel } from "./Player"

/**
 * Model description here for TypeScript hints.
 */
export const PlayerStoreModel = types
  .model("PlayerStore")
  .props({
    players: types.optional(types.array(PlayerModel), []),
    layout: types.optional(types.enumeration(["grid", "single-column"]), "grid"),
  })
  .actions(withSetPropAction)
  .views((self) => ({
    get playersCount() {
      return self.players.length;
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    setLayout(layout: "grid" | "single-column") {
      self.layout = layout
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface PlayerStore extends Instance<typeof PlayerStoreModel> { }
export interface PlayerStoreSnapshotOut extends SnapshotOut<typeof PlayerStoreModel> { }
export interface PlayerStoreSnapshotIn extends SnapshotIn<typeof PlayerStoreModel> { }
export const createPlayerStoreDefaultModel = () => types.optional(PlayerStoreModel, {})
