import { router } from "expo-router"
import { observer } from "mobx-react-lite"
import React from "react"
import { ViewStyle } from "react-native"
import { Screen, Text } from "src/components"
import { spacing } from "src/theme"

function SettingsScreen() {

  return (
    <Screen
      preset="fixed"
      contentContainerStyle={$screenContentContainer}
      safeAreaEdges={["bottom"]}
    >
      <Text text="Settings" />
    </Screen>
  )
}

export default SettingsScreen

const $screenContentContainer: ViewStyle = {
  paddingHorizontal: spacing.lg,
  paddingTop: spacing.lg,
} 