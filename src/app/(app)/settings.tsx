import { router } from "expo-router"
import { observer } from "mobx-react-lite"
import React from "react"
import { TouchableOpacity, ViewStyle } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { Screen, Text } from "src/components"
import { spacing } from "src/theme"
import { SafeAreaView } from "react-native-safe-area-context"

function SettingsScreen() {

  return (
    <SafeAreaView style={$screenContentContainer}>
      <TouchableOpacity
        style={$floatingBackButton}
        onPress={() => router.back()}
      >
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
      <Text text="Settings" />
    </SafeAreaView>
  )
}

export default SettingsScreen

const $screenContentContainer: ViewStyle = {
  paddingHorizontal: spacing.lg,
  paddingTop: spacing.lg,
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