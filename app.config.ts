import { ExpoConfig, ConfigContext } from "@expo/config"

/**
 * Use ts-node here so we can use TypeScript for our Config Plugins
 * and not have to compile them to JavaScript
 */
require("ts-node/register")

/**
 * @param config ExpoConfig coming from the static config app.json if it exists
 * 
 * You can read more about Expo's Configuration Resolution Rules here:
 * https://docs.expo.dev/workflow/configuration/#configuration-resolution-rules
 */
module.exports = ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "CountApp",
  slug: "CountApp",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/app-icon-all.png",
  scheme: "countapp",
  userInterfaceStyle: "automatic",
  splash: {
    image: "./assets/images/splash-logo-all.png",
    resizeMode: "contain",
    backgroundColor: "#191015",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.countapp",
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/images/app-icon-android-adaptive-foreground.png",
      backgroundImage: "./assets/images/app-icon-android-adaptive-background.png",
    },
    package: "com.countapp",
  },
  plugins: [
    "expo-build-properties",
  ],
  extra: {
    eas: {
      projectId: "your-project-id",
    },
  },
})
