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
  })
  .actions(withSetPropAction)
  .views((self) => ({
    get playersCount() {
      return self.players.length;
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    addPlayer(player: SnapshotIn<typeof PlayerModel>) {
      self.players.push(player)
    },
    removePlayer(playerID: string) {
      const idx = self.players.findIndex(p => p.playerID === playerID)
      if (idx !== -1) {
        self.players.splice(idx, 1)
      }
    },
    updatePlayer(playerID: string, data: Partial<SnapshotIn<typeof PlayerModel>>) {
      const player = self.players.find(p => p.playerID === playerID)
      if (player) {
        Object.assign(player, data)
      }
    }
  }))

export interface PlayerStore extends Instance<typeof PlayerStoreModel> { }
export interface PlayerStoreSnapshotOut extends SnapshotOut<typeof PlayerStoreModel> { }
export interface PlayerStoreSnapshotIn extends SnapshotIn<typeof PlayerStoreModel> { }
export const createPlayerStoreDefaultModel = () => types.optional(PlayerStoreModel, {})
