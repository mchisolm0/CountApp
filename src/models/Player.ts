import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"
import { colorsList, iconsList } from "assets/misc/lists";

/**
 * Model description here for TypeScript hints.
 */
export const PlayerModel = types
  .model("Player")
  .props({
    playerID: types.optional(types.identifierNumber, -1),
    playerNumber: types.optional(types.number, 0),
    playerName: types.optional(types.string, "Player"),
    lifePoints: types.optional(types.number, 20),
    color: types.enumeration(colorsList),
    playerIcon: types.enumeration(iconsList),
  })
  .actions(withSetPropAction)
  .views((self) => ({
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
  })) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    removeLifePoints(amount: number) {
      self.lifePoints = self.lifePoints - amount
    },
    addLifePoints(amount: number) {
      self.lifePoints = self.lifePoints + amount
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface Player extends Instance<typeof PlayerModel> { }
export interface PlayerSnapshotOut extends SnapshotOut<typeof PlayerModel> { }
export interface PlayerSnapshotIn extends SnapshotIn<typeof PlayerModel> { }
export const createPlayerDefaultModel = (playerNum: number) => types.optional(PlayerModel, {})
