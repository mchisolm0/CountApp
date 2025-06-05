import React, { useState } from "react"
import { View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { useStores } from "src/models"
import { spacing } from "src/theme"
import { Button } from "src/components/Button"
import { Text } from "src/components/Text"
import { PlayersGrid } from "src/components/PlayersGrid"
import { Screen } from "src/components/Screen"

export default observer(function GameScreen() {
  const { gameStore } = useStores()
  const [selectedPlayerCount, setSelectedPlayerCount] = useState(2)

  const handlePlayerCountChange = (count: number) => {
    setSelectedPlayerCount(count)
    gameStore.setPlayerCount(count)
  }

  const handleResetGame = () => {
    gameStore.resetGame()
  }

  return (
    <Screen
      preset="fixed"
      safeAreaEdges={["top"]}
      contentContainerStyle={$screenContentContainer}
    >
      <View style={$headerContainer}>
        <Text preset="heading" text="Life Counter" />
        <Button
          text="Reset Game"
          onPress={handleResetGame}
          style={$resetButton}
        />
      </View>

      <View style={$playerCountContainer}>
        <Text preset="subheading" text="Number of Players" />
        <View style={$playerCountButtons}>
          {[2, 3, 4, 5, 6].map((count) => (
            <Button
              key={count}
              text={count.toString()}
              onPress={() => handlePlayerCountChange(count)}
              style={[
                $playerCountButton,
                selectedPlayerCount === count && $selectedPlayerCountButton,
              ]}
            />
          ))}
        </View>
      </View>

      <View style={$gameBoard}>
        <PlayersGrid />
      </View>
    </Screen>
  )
})

const $screenContentContainer: ViewStyle = {
  paddingHorizontal: spacing.lg,
  paddingTop: spacing.lg,
}

const $headerContainer: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: spacing.lg,
}

const $resetButton: ViewStyle = {
  minWidth: 100,
}

const $playerCountContainer: ViewStyle = {
  marginBottom: spacing.lg,
}

const $playerCountButtons: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: spacing.sm,
}

const $playerCountButton: ViewStyle = {
  minWidth: 50,
}

const $selectedPlayerCountButton: ViewStyle = {
  backgroundColor: "#007AFF",
}

const $gameBoard: ViewStyle = {
  flex: 1,
  marginTop: spacing.sm,
}

