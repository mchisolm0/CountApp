import { router } from "expo-router"
import { observer } from "mobx-react-lite"
import React from "react"
import { ImageStyle, TextStyle, ViewStyle } from "react-native"
import { Header, Screen, Text } from "src/components"
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
  const { gameStore: { endGame } } = useStores()
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
    <Screen preset="fixed" contentContainerStyle={$screenContentContainer} safeAreaEdges={["bottom"]}>
      <PlayersGrid />
    </Screen>
  )
}

export default observer(GameScreen)

const $container: ViewStyle = {
  paddingTop: spacing.lg + spacing.xl,
  paddingHorizontal: spacing.lg,
}
const $screenContentContainer: ViewStyle = {
  flex: 1,
  paddingVertical: spacing.xxxs,
  paddingHorizontal: spacing.xxxs,
};

const $title: TextStyle = {
  marginBottom: spacing.sm,
}

const $tagline: TextStyle = {
  marginBottom: spacing.xxl,
}

const $description: TextStyle = {
  marginBottom: spacing.lg,
}

const $sectionTitle: TextStyle = {
  marginTop: spacing.xxl,
}

const $logoContainer: ViewStyle = {
  marginEnd: spacing.md,
  flexDirection: "row",
  flexWrap: "wrap",
  alignContent: "center",
}

const $logo: ImageStyle = {
  height: 38,
  width: 38,
}
