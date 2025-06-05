import { router } from "expo-router"
import { observer } from "mobx-react-lite"
import React from "react"
import { Image, ImageStyle, View, ViewStyle } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Button, Text } from "src/components"
import { isRTL } from "src/i18n"
import { useStores } from "src/models"
import { colors, spacing } from "src/theme"
import { useSafeAreaInsetsStyle } from "src/utils/useSafeAreaInsetsStyle"

const welcomeLogo = require("assets/images/logo.png")
const welcomeFace = require("assets/images/welcome-face.png")

export default observer(function WelcomeScreen() {
  const {
    authenticationStore: { logout },
    gameStore,
  } = useStores()

  function goNewGame(numberPlayers: number) {
    gameStore.createGame(numberPlayers)
    router.push("/game")
  }


  const $bottomContainerInsets = useSafeAreaInsetsStyle(["bottom"])

  return (
    <SafeAreaView style={$container}>
      <View style={$topContainer}>
        <Image style={$welcomeLogo} source={welcomeLogo} resizeMode="contain" />
        <View style={[$bottomContainer, $bottomContainerInsets]}>
          <Button
            testID="continue-game-screen-button"
            preset="reversed"
            text="Current Game"
            onPress={() => router.push("/game")}
          />
          <Button
            testID="game-history-screen-button"
            preset="default"
            text="Game History"
            onPress={() => router.push("/game-history")}
          />
          <Button
            testID="history-screen-button"
            preset="default"
            text="Settings"
            onPress={() => router.push("/settings")}
          />
        </View>
        <Image style={$welcomeFace} source={welcomeFace} resizeMode="contain" />
      </View>

      <View style={[$bottomContainer, $bottomContainerInsets]}>
        <Text tx="welcomeScreen.postscript" size="md" />
        <Button
          testID="next-screen-button"
          preset="reversed"
          text="2 Players"
          onPress={() => goNewGame(2)}
        />
        <Button
          testID="next-screen-button"
          preset="reversed"
          text="3 Players"
          onPress={() => goNewGame(3)}
        />
        <Button
          testID="next-screen-button"
          preset="reversed"
          text="4 Players"
          onPress={() => goNewGame(4)}
        />
      </View>
    </SafeAreaView>
  )
})

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
}

const $topContainer: ViewStyle = {
  flex: 1,
  alignItems: "center",
  paddingHorizontal: spacing.lg,
  paddingTop: spacing.xl,
}

const $bottomContainer: ViewStyle = {
  width: "100%",
  paddingHorizontal: spacing.lg,
  paddingBottom: spacing.lg,
}

const $welcomeLogo: ImageStyle = {
  height: 100,
  width: "100%",
  marginBottom: spacing.xl,
}

const $welcomeFace: ImageStyle = {
  height: 100,
  width: "100%",
  marginTop: spacing.xl,
}

