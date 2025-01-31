import { router } from "expo-router"
import { observer } from "mobx-react-lite"
import React from "react"
import { ViewStyle } from "react-native"
import { Screen } from "src/components"
import { PlayersGrid } from "src/components/PlayersGrid"
import { useStores } from "src/models"
import { spacing } from "src/theme"
import { useHeader } from "src/utils/useHeader"

// TODO: Replace with actual logos
// const chainReactLogo = require("assets/images/demo/cr-logo.png")
// const reactNativeLiveLogo = require("assets/images/demo/rnl-logo.png")
// const reactNativeRadioLogo = require("assets/images/demo/rnr-logo.png")
// const reactNativeNewsletterLogo = require("assets/images/demo/rnn-logo.png")

function GameScreen() {
  const {
    gameStore: { endGame },
  } = useStores()
  useHeader(
    {
      leftIcon: "back",
      onLeftPress: () => router.back(),
      rightText: "endGame",
      onRightPress: endGame,
    },
    [endGame],
  )

  return (
    <Screen
      preset="fixed"
      contentContainerStyle={$screenContentContainer}
      safeAreaEdges={["bottom"]}
    >
      <PlayersGrid />
    </Screen>
  )
}

export default observer(GameScreen)

const $screenContentContainer: ViewStyle = {
  flex: 1,
  paddingVertical: spacing.xxxs,
  paddingHorizontal: spacing.xxxs,
}

