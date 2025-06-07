import React from "react"
import { TouchableOpacity, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { spacing } from "src/theme"
import { PlayersGrid } from "src/components/PlayersGrid"
import { router } from "expo-router"
import { Ionicons } from "@expo/vector-icons"
import { SafeAreaView } from "react-native-safe-area-context"

export default observer(function GameScreen() {
  return (
    <SafeAreaView style={$container}>
      <TouchableOpacity
        style={$floatingBackButton}
        onPress={() => router.back()}
      >
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
      <View style={$gameBoard}>
        <PlayersGrid />
      </View>
    </SafeAreaView>
  )
})

const $container: ViewStyle = {
  flex: 1,
  paddingHorizontal: spacing.sm,
  paddingTop: spacing.sm,
}

const $gameBoard: ViewStyle = {
  flex: 1,
  marginTop: spacing.sm,
  height: "100%",
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
