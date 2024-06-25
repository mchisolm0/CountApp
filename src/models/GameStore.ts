import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"
import { GameModel } from "./Game"
import { PlayerStoreModel } from "./PlayerStore"
import { PlayerModel } from "./Player"
import { colorsList, iconsList } from "assets/misc/lists"
import { router } from "expo-router"
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry"

/**
 * Model description here for TypeScript hints.
 */
export const GameStoreModel = types
  .model("GameStore")
  .props({
    games: types.array(GameModel),
    currentGame: types.maybe(types.reference(GameModel)),
    offlineGames: types.array(types.reference(GameModel)),
    activeGames: types.array(types.reference(GameModel)),
    offlineOnly: false,
    activeOnly: false,
  })
  .actions(withSetPropAction)
  .views((self) => ({
    get gamesForList() {
      if (self.offlineOnly && self.activeOnly) {
        const filteredArray = self.offlineGames.filter(game => self.activeGames.includes(game))
        return filteredArray
      } else if (self.activeOnly) {
        return self.activeGames
      } else if (self.offlineOnly) {
        return self.offlineGames
      } else {
        return self.games
      }
    }
  })) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    createGame(numberOfPlayers: number) {
      const examplePlayers = []

      for (let i = 0; i < numberOfPlayers; i++) {
        const newPlayer = PlayerModel.create({
          // TODO will eventually need to track numbers
          // used to ensure no duplicates. Possibly a
          // map or set?
          playerNumber: i,
          color: colorsList[i],
          playerIcon: iconsList[i]
        })
        examplePlayers.push(newPlayer)
      }
      const newGame = GameModel.create({
        players: examplePlayers,
      })
      self.games.push(newGame)
      self.currentGame = this.getGameByID(newGame.gameID)
    },
    getGameByID(id: string) {
      return self.games.find(game => game.gameID === id)
    },
    endGame() {
      if (self.currentGame) {
        // toggle the game's active status, set currentGame to null, and call router.back()
        self.currentGame.isActive = false
      }
      router.back()
    }
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface GameStore extends Instance<typeof GameStoreModel> { }
export interface GameStoreSnapshotOut extends SnapshotOut<typeof GameStoreModel> { }
export interface GameStoreSnapshotIn extends SnapshotIn<typeof GameStoreModel> { }
export const createGameStoreDefaultModel = () => types.optional(GameStoreModel, {})
