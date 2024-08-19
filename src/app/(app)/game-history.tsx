import { router } from "expo-router"
import { observer } from "mobx-react-lite"
import React from "react"
import { ViewStyle } from "react-native"
import { Card, Screen, Text } from "src/components"
import { Game, useStores } from "src/models"
import { spacing } from "src/theme"
import { useHeader } from "src/utils/useHeader"

// TODO: Replace with actual logos
// const chainReactLogo = require("assets/images/demo/cr-logo.png")
// const reactNativeLiveLogo = require("assets/images/demo/rnl-logo.png")
// const reactNativeRadioLogo = require("assets/images/demo/rnr-logo.png")
// const reactNativeNewsletterLogo = require("assets/images/demo/rnn-logo.png")

function GameHistoryScreen() {
  const {
    gameStore: { games },
  } = useStores()
  useHeader(
    {
      leftIcon: "back",
      onLeftPress: () => router.back(),
      // rightText: "endGame",
      // onRightPress: endGame,
    },
    [],
  )

  return (
    <Screen
      preset="fixed"
      contentContainerStyle={$screenContentContainer}
      safeAreaEdges={["bottom"]}
    >
      {games.map((game: Game) => {
        return (
          <Card
            key={game.gameID}
            style={$container}
            ContentComponent={<Text text={"Game " + game.gameID} />}
          />
        )
      })}
    </Screen>
  )
}

export default observer(GameHistoryScreen)

const $container: ViewStyle = {
  paddingTop: spacing.lg + spacing.xl,
  paddingHorizontal: spacing.lg,
}
const $screenContentContainer: ViewStyle = {
  flex: 1,
  paddingVertical: spacing.xxxs,
  paddingHorizontal: spacing.xxxs,
}
