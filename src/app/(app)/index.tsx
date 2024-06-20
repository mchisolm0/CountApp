import { router } from "expo-router"
import { observer } from "mobx-react-lite"
import React from "react"
import { Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import { Button, Text } from "src/components"
import { isRTL } from "src/i18n"
import { useStores } from "src/models"
import { colors, spacing } from "src/theme"
import { useHeader } from "src/utils/useHeader"
import { useSafeAreaInsetsStyle } from "src/utils/useSafeAreaInsetsStyle"
import { PlayerModel } from "src/models/Player"
import { colorsList, iconsList } from "assets/misc/lists"

const welcomeLogo = require("assets/images/logo.png")
const welcomeFace = require("assets/images/welcome-face.png")

export default observer(function WelcomeScreen() {
  const { authenticationStore: { logout },
    playerStore,
  } = useStores()

  function goNext(numberPlayers: number) {
    const examplePlayers = []

    for (let i = 0; i < numberPlayers; i++) {
      const newPlayer = PlayerModel.create({
        playerID: i,
        playerName: "Player ",
        lifePoints: 20,
        color: "green",
        playerIcon: exampleIcons[i],
        color: colorsList[i],
        playerIcon: iconsList[i]
      })
      examplePlayers.push(newPlayer)
    }

    playerStore.setProp("players", examplePlayers)

    router.push("/game")
  }

  useHeader(
    {
      rightTx: "common.logOut",
      onRightPress: logout,
    },
    [logout],
  )

  const $bottomContainerInsets = useSafeAreaInsetsStyle(["bottom"])

  return (
    <View style={$container}>
      <View style={$topContainer}>
        <Image style={$welcomeLogo} source={welcomeLogo} resizeMode="contain" />
        <View style={[$bottomContainer, $bottomContainerInsets]}>
          <Button testID="game-history-screen-button" preset="default" text="Game History" onPress={() => router.push("/game-history")} />
          <Button testID="history-screen-button" preset="default" text="Settings" onPress={() => router.push("/settings")} />
        </View>
        <Image style={$welcomeFace} source={welcomeFace} resizeMode="contain" />
      </View>

      <View style={[$bottomContainer, $bottomContainerInsets]}>
        {/* Revise tx to use the welcomeScreen.postscript key in translations */}
        <Text tx="welcomeScreen.postscript" size="md" />
        <Button
          testID="next-screen-button"
          preset="reversed"
          text="2 Players"
          onPress={() => goNext(2)}
        />
        <Button
          testID="next-screen-button"
          preset="reversed"
          text="3 Players"
          onPress={() => goNext(3)}
        />
        <Button
          testID="next-screen-button"
          preset="reversed"
          text="4 Players"
          onPress={() => goNext(4)}
        />
      </View>
    </View>
  )
})

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
}

const $topContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 1,
  flexBasis: "57%",
  justifyContent: "center",
  paddingHorizontal: spacing.lg,
}

const $bottomContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 0,
  flexBasis: "43%",
  backgroundColor: colors.palette.neutral100,
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,
  paddingHorizontal: spacing.lg,
  justifyContent: "space-around",
}
const $welcomeLogo: ImageStyle = {
  height: 88,
  width: "100%",
  marginBottom: spacing.xxl,
}

const $welcomeFace: ImageStyle = {
  height: 169,
  width: 269,
  position: "absolute",
  bottom: -47,
  right: -80,
  transform: [{ scaleX: isRTL ? -1 : 1 }],
}

const $welcomeHeading: TextStyle = {
  marginBottom: spacing.md,
}
