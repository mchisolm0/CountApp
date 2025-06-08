import { router } from "expo-router"
import { observer } from "mobx-react-lite"
import React from "react"
import { TouchableOpacity, ViewStyle } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { Card, Screen, Text } from "src/components"
import { Game, useStores } from "src/models"
import { spacing } from "src/theme"

// TODO: Replace with actual logos
// const chainReactLogo = require("assets/images/demo/cr-logo.png")
// const reactNativeLiveLogo = require("assets/images/demo/rnl-logo.png")
// const reactNativeRadioLogo = require("assets/images/demo/rnr-logo.png")
// const reactNativeNewsletterLogo = require("assets/images/demo/rnn-logo.png")

function GameHistoryScreen() {
  const {
    gameStore: { games },
  } = useStores()

  return (
    <Screen
      preset="fixed"
      contentContainerStyle={$screenContentContainer}
      safeAreaEdges={["bottom"]}
    >
      <TouchableOpacity
        style={$floatingBackButton}
        onPress={() => router.back()}
      >
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
      {games.map((game: Game) => {
        return (
          <Card
            key={game.gameID}
            style={$cardContainer}
            ContentComponent={<Text text={"Game " + game.gameID} />}
          />
        )
      })}
    </Screen>
  )
}

export default GameHistoryScreen

const $screenContentContainer: ViewStyle = {
  paddingHorizontal: spacing.lg,
  paddingTop: spacing.lg,
}

const $cardContainer: ViewStyle = {
  marginBottom: spacing.md,
}

const $floatingBackButton: ViewStyle = {
  position: 'absolute',
  top: 50,
  left: 20,
  width: 40,
  height: 40,
  borderRadius: 20,
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
}
