import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"
import { PlayerModel } from "./Player"
import { v4 } from "uuid"

/**
 * Model description here for TypeScript hints.
 */
export const GameModel = types
  .model("Game")
  .props({
    gameID: types.optional(types.identifier, () => v4()),
    date: types.optional(types.Date, () => Date.now()),
    players: types.array(PlayerModel),
    layout: types.optional(types.enumeration(["grid", "single-column"]), "grid"),
    isActive: true,
    isLocalMultiplayer: true
  })
  .actions(withSetPropAction)
  .views((self) => ({
    get playersCount() {
      return self.players.length
    },
    get getGameID() {
      return self.gameID
    }
  }))
  .actions((self) => ({})) // eslint-disable-line  @typescript-eslint/no-unused-vars

export interface Game extends Instance<typeof GameModel> { }
export interface GameSnapshotOut extends SnapshotOut<typeof GameModel> { }
export interface GameSnapshotIn extends SnapshotIn<typeof GameModel> { }
export const createGameDefaultModel = () => types.optional(GameModel, {})
