import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"

export const PlayerModel = types
  .model("Player")
  .props({
    playerID: types.identifierNumber,
    playerName: "Player",
    lifePoints: types.number,
    color: types.enumeration(["red", "green", "pink", "blue"]),
    playerIcon: types.enumeration([
      "assets/icons/bell.png",
      "assets/icons/lock.png",
      "assets/icons/ladybug.png",
      "assets/icons/settings.png",
      "assets/icons/back.png",
      "assets/icons/check.png",
    ]),
  })
  .views((self) => ({
    get playerInfo() {
      const defaultValue = { name: self.playerName, id: self.playerID }

      return defaultValue
    },
    calculateRotation(playersCount: number, id: number) {
      let isOddNumberOfPlayers = playersCount % 2 === 1;

      if (id === playersCount - 1 && isOddNumberOfPlayers) {
        return '0deg';
      } else if (playersCount < 3) {
        return '0deg';
      } else if (id % 2 === 0) {
        return '90deg';
      } else if (id % 2 === 1) {
        return '-90deg';
      } else {
        return '0deg';
      }
    },

  }))
  .actions((self) => ({
    removeLifePoints(amount: number) {
      self.lifePoints = self.lifePoints - amount
    },
    addLifePoints(amount: number) {
      self.lifePoints = self.lifePoints + amount
    },
    ...withSetPropAction(self),
  }))

export interface Player extends Instance<typeof PlayerModel> { }
export interface PlayerSnapshotOut extends SnapshotOut<typeof PlayerModel> { }
export interface PlayerSnapshotIn extends SnapshotIn<typeof PlayerModel> { }
