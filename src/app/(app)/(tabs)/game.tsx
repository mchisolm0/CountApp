
import React from "react";
import { Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native";
import { ListItem, Screen, Text } from "src/components";
import { spacing } from "src/theme";
import { openLinkInBrowser } from "src/utils/openLinkInBrowser";
import { isRTL } from "src/i18n";

// TODO: Replace with actual logos
const chainReactLogo = require("assets/images/demo/cr-logo.png");
const reactNativeLiveLogo = require("assets/images/demo/rnl-logo.png");
const reactNativeRadioLogo = require("assets/images/demo/rnr-logo.png");
const reactNativeNewsletterLogo = require("assets/images/demo/rnn-logo.png");

export default function GameScreen() {
  return (
    <Screen preset="auto" contentContainerStyle={$container} safeAreaEdges={["top"]}>
      <Text preset="heading" tx="gameScreen.title" style={$title} />
      
    </Screen>
  );
}

const $container: ViewStyle = {
  paddingTop: spacing.lg + spacing.xl,
  paddingHorizontal: spacing.lg,
};

const $title: TextStyle = {
  marginBottom: spacing.sm,
};

const $tagline: TextStyle = {
  marginBottom: spacing.xxl,
};

const $description: TextStyle = {
  marginBottom: spacing.lg,
};

const $sectionTitle: TextStyle = {
  marginTop: spacing.xxl,
};

const $logoContainer: ViewStyle = {
  marginEnd: spacing.md,
  flexDirection: "row",
  flexWrap: "wrap",
  alignContent: "center",
};

const $logo: ImageStyle = {
  height: 38,
  width: 38,
};