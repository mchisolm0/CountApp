
import React, { ReactElement } from "react";
import { Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native";
import { Button, Card,Header,Icon, ListItem, Screen, Text } from "src/components";
import { spacing } from "src/theme";
import { openLinkInBrowser } from "src/utils/openLinkInBrowser";
import { isRTL } from "src/i18n";

// TODO: Replace with actual logos
const chainReactLogo = require("assets/images/demo/cr-logo.png");
const reactNativeLiveLogo = require("assets/images/demo/rnl-logo.png");
const reactNativeRadioLogo = require("assets/images/demo/rnr-logo.png");
const reactNativeNewsletterLogo = require("assets/images/demo/rnn-logo.png");



export default function GameScreen() {
    // State variables for life points
    const [lifePoints, setLifePoints] = React.useState(20);

    // Functions to add and subtract life points
    const addLifePoints = () => {
        setLifePoints(lifePoints + 1);
    };
    const subtractLifePoints = () => {
        setLifePoints(lifePoints - 1);
    };
    
    // State variables for life points
    const [lifePoints1, setLifePoints1] = React.useState(20);

    // Functions to add and subtract life points
    const addLifePoints1 = () => {
        setLifePoints1(lifePoints1 + 1);
    };
    const subtractLifePoints1 = () => {
        setLifePoints1(lifePoints1 - 1);
    }; 
    return (
    <Screen preset="auto" contentContainerStyle={$container} safeAreaEdges={["top"]}>
      <Text preset="heading" tx="gameScreen.title" style={$title} />
      <Card
       horizontalAlignment="center"
       verticalAlignment="center"
       style={{ minHeight: 160 }}
        HeadingComponent={
          <Text
            style={{ marginVertical: spacing.sm }}
            size="xxs"
            text="Player 1"
          />
        }
       LeftComponent={
            <Button
            style={{ marginVertical: spacing.sm }}
            onPress={subtractLifePoints1}
            LeftAccessory={(props) => <Icon style={props.style} icon="caretLeft" />}
          />
        }
        ContentComponent={
          <Text
            style={{ marginVertical: spacing.sm }}
            size="xxl"
            preset="bold"
            text={lifePoints1.toString()}
          />
        }
        RightComponent={
            <Button
            style={{ marginVertical: spacing.sm }}
            onPress={addLifePoints1}
            RightAccessory={(props) => <Icon style={props.style} icon="caretRight" />}
          />
        }
      />
      <Card
       horizontalAlignment="center"
       verticalAlignment="center"
       style={{ minHeight: 160 }}
       HeadingComponent={
        <Text
          style={{ marginVertical: spacing.sm }}
          size="xxs"
          text="Player 2"
        />
      }
      LeftComponent={
            <Button
            style={{ marginVertical: spacing.sm }}
            onPress={subtractLifePoints}
            LeftAccessory={(props) => <Icon style={props.style} icon="caretLeft" />}
          />
        }
        ContentComponent={
          <Text
            style={{ marginVertical: spacing.sm }}
            size="xxl"
            preset="bold"
            text={lifePoints.toString()}
          />
        }
        RightComponent={
            <Button
            style={{ marginVertical: spacing.sm }}
            onPress={addLifePoints}
            RightAccessory={(props) => <Icon style={props.style} icon="caretRight" />}
          />
        }
      />
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