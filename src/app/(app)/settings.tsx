import { router } from "expo-router"
import { observer } from "mobx-react-lite"
import React from "react"
import { ViewStyle } from "react-native"
import { Screen, Text } from "src/components"
import { spacing } from "src/theme"
import { SafeAreaView } from "react-native-safe-area-context"

function SettingsScreen() {

  return (
    <SafeAreaView style={$screenContentContainer}>
      <Text text="Settings" />
    </SafeAreaView>
  )
}

export default SettingsScreen

const $screenContentContainer: ViewStyle = {
  paddingHorizontal: spacing.lg,
  paddingTop: spacing.lg,
} 