import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"
import { number } from "mobx-state-tree/dist/internal";

export const PlayerModel = types
  .model("Player")
  .props({
    playerID: types.identifierNumber,
    playerName: "Player",
    lifePoints: types.number,
    color: types.enumeration(["red", "green", "pink", "blue"]),
    playerIcon: types.enumeration(["assets/icons/bell.png", "assets/icons/lock.png"]),
  })
  .actions(withSetPropAction)
  .actions((player) => ({
    addLifePoints(amount: number) {
      player.lifePoints += amount;
    },
    removeLifePoints(amount: number) {
      player.lifePoints -= amount;
    },
  }))
  .views((player) => ({
    get playerInfo() {
      const defaultValue = { name: player.playerName, id: player.playerID };

      return defaultValue;
    }
  }))

export interface Player extends Instance<typeof PlayerModel> { }
export interface PlayerSnapshotOut extends SnapshotOut<typeof PlayerModel> { }
export interface PlayerSnapshotIn extends SnapshotIn<typeof PlayerModel> { }
