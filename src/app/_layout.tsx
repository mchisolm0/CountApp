// app/_layout.tsx
import 'react-native-get-random-values';
import React from "react";
import { ViewStyle } from "react-native"
import { Slot, SplashScreen } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { useInitialRootStore } from "../models/helpers/useStores";
import { mst } from "reactotron-mst"
import { Reactotron } from "src/devtools/ReactotronClient";

SplashScreen.preventAutoHideAsync();

if (__DEV__) {
  // Load Reactotron configuration in development. We don't want to
  // include this in our production bundle, so we are using `if (__DEV__)`
  // to only execute this in development.
  require("src/devtools/ReactotronConfig.ts");
  Reactotron.use(mst());
}

export { ErrorBoundary } from "src/components/ErrorBoundary/ErrorBoundary";

export default function Root() {
  const { rehydrated } = useInitialRootStore();

  React.useEffect(() => {
    if (rehydrated) {
      // Hide the splash screen after the store is rehydrated
      SplashScreen.hideAsync();
    }
  }, [rehydrated]);

  if (!rehydrated) {
    return null;
  }

  return (
    <GestureHandlerRootView style={$root}>
      <Slot />
    </GestureHandlerRootView>
  )
}

const $root: ViewStyle = { flex: 1 }
