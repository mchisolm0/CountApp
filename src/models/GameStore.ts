import { Instance, SnapshotOut, SnapshotIn, types } from "mobx-state-tree"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { PlayerModel } from "./Player"
import { GameModel, createGameDefaultModel } from "./Game"
import { v4 as uuidv4 } from "uuid"
import { colorsList, iconsList } from "assets/misc/lists"

/**
 * Model description here for TypeScript hints.
 */
export const GameStoreModel = types
  .model("GameStore")
  .props({
    currentGame: types.optional(GameModel, {
      gameID: uuidv4(),
      date: new Date(),
      players: [],
      layout: "grid",
      isActive: true,
      isLocalMultiplayer: true,
    }),
  })
  .actions((self) => ({
    setPlayerCount(count: number) {
      self.currentGame.players.clear()
      
      // Create new players based on count
      for (let i = 0; i < count; i++) {
        self.currentGame.players.push({
          playerID: uuidv4(),
          playerNumber: i + 1,
          playerName: `Player ${i + 1}`,
          lifePoints: 20,
          color: colorsList[0],
          playerIcon: iconsList[0],
        })
      }
    },
    resetGame() {
      self.currentGame.players.forEach((player) => {
        player.resetLifePoints()
      })
    },
  }))

export interface GameStore extends Instance<typeof GameStoreModel> {}
export interface GameStoreSnapshotOut extends SnapshotOut<typeof GameStoreModel> {}
export interface GameStoreSnapshotIn extends SnapshotIn<typeof GameStoreModel> {}
