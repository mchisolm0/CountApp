import { observer } from "mobx-react-lite"
import React from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { useStores } from "src/models"
import { Player } from "src/models/Player"
import { spacing } from "src/theme"
import PlayerCard from "./PlayerCard"

export const PlayersGrid = observer(() => {
  // TODO refactor to only pull out players array
  const { playerStore: { players } } = useStores()

  return (
    <View style={$container}>
      {players.map((player: Player) => (
        <PlayerCard key={player.playerID} player={player} />
      ))
      }
    </View>
  )
})

const $container: ViewStyle = {
  flex: 1,
  // backgroundColor: colors.background,
  backgroundColor: 'red',
}

const $cardContainer: ViewStyle = {
  minHeight: 160,
  flex: 1,
  flexGrow: 1,
  justifyContent: "center",
  paddingHorizontal: spacing.lg,
}

const $unnamedText: TextStyle = {
  marginBottom: spacing.md,
}
