import { observer } from "mobx-react-lite"
import React from "react"
import { View, ViewStyle, useWindowDimensions } from "react-native"
import { useStores } from "src/models"
import { Player } from "src/models/Player"
import { spacing } from "src/theme"
import { Button } from "./Button"
import { Card } from "./Card"
import { Icon } from "./Icon"
import { Text } from "./Text"

interface AddLifePointsButtonProps {
  player: Player
}

interface RemoveLifePointsButtonProps {
  player: Player
}

const RemoveLifePointsButton: React.FC<RemoveLifePointsButtonProps> = ({
  player
}) => {
  return (
    <View style={$buttonContainer}>
      <Button
        style={$buttonStyle}
        onPress={() => player.removeLifePoints(1)}
        LeftAccessory={(props) => <Icon style={props.style} icon="caretLeft" />}
        text={"-1"}
      />
      <Button
        style={$buttonStyle}
        onPress={() => player.removeLifePoints(5)}
        LeftAccessory={(props) => <Icon style={props.style} icon="caretLeft" />}
        text={"-5"}
      />
    </View>
  )
}

const AddLifePointsButton: React.FC<AddLifePointsButtonProps> = ({
  player
}) => {
  return (
    <View style={$buttonContainer}>
      <Button
        style={$buttonStyle}
        onPress={() => player.addLifePoints(1)}
        RightAccessory={(props) => <Icon style={props.style} icon="caretRight" />}
        text={"+1"}
      />
      <Button
        style={$buttonStyle}
        onPress={() => player.addLifePoints(5)}
        RightAccessory={(props) => <Icon style={props.style} icon="caretRight" />}
        text={"+5"}
      />
    </View>
  )
}

export const PlayersGrid = observer(() => {
  const { gameStore: { currentGame } } = useStores()
  const { width: screenWidth } = useWindowDimensions()
  const numPlayers = currentGame.players.length

  const getGridLayout = (playerCount: number) => {
    if (playerCount < 3) return { rows: 1, cols: 1 }
    return { rows: Math.ceil(playerCount / 2), cols: 2 }
  }

  const getCardDimensions = (numPlayers: number, screenWidth: number, screenHeight: number) => {
    if (numPlayers === 2) {
      return {
        width: screenWidth,
        height: screenHeight * 0.4
      }
    } else if (numPlayers > 2) {
      // For rotated cards, we want them to fit within the screen bounds
      // The card's visual width becomes its height after rotation
      const maxHeight = screenHeight * 0.35 // Leave room for spacing
      const maxWidth = screenWidth * 0.35  // Leave room for side-by-side cards
      return {
        width: maxWidth,
        height: maxHeight
      }
    } else {
      // Single player
      return {
        width: screenWidth * 0.25,
        height: screenWidth * 0.35
      }
    }
  }

  const { cols } = getGridLayout(numPlayers)

  const { height: screenHeight } = useWindowDimensions()
  const { width: cardWidth, height: cardHeight } = getCardDimensions(numPlayers, screenWidth, screenHeight)

  const playerRows: Player[][] = []
  for (let i = 0; i < currentGame.players.length; i += cols) {
    playerRows.push(currentGame.players.slice(i, i + cols))
  }

  const $row: ViewStyle = {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    minHeight: numPlayers > 2 ? cardWidth * 1.2 : cardHeight * 1.2,
  }

  return (
    <View style={$container}>
      {playerRows.map((row, rowIndex) => (
        <View key={rowIndex} style={$row}>
          {row.map((player: Player) => {
            const isFirstInRow = row.indexOf(player) === 0
            const rotationDeg = isFirstInRow ? 90 : -90
            const cardStyle = [
              $cardWrapper,
              {
                minWidth: cardWidth,
                minHeight: cardHeight,
                transform: numPlayers > 2 ? [{ rotate: `${rotationDeg}deg` }] : undefined
              }
            ]

            return (
              <View key={player.playerID} style={cardStyle}>
                <Card
                  horizontalAlignment="center"
                  verticalAlignment="center"
                  style={$cardBaseStyle}
                  HeadingComponent={
                    <Text
                      style={{ marginVertical: spacing.sm }}
                      size="xxs"
                      text={`Player ${player.playerNumber}`}
                    />
                  }
                  LeftComponent={
                    <RemoveLifePointsButton
                      player={player}
                    />
                  }
                  ContentComponent={
                    <View style={$lifePointsContainer}>
                      <Text
                        style={{ marginVertical: spacing.sm }}
                        size="xxl"
                        preset="bold"
                        text={player.lifePoints.toString()}
                      />
                    </View>
                  }
                  RightComponent={
                    <AddLifePointsButton
                      player={player}
                    />
                  }
                />
              </View>
            )
          })}
        </View>
      ))}
    </View>
  )
})

const $container: ViewStyle = {
  flex: 1,
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
}

const $cardWrapper: ViewStyle = {
  justifyContent: "center",
  alignItems: "center",
}

const $cardBaseStyle: ViewStyle = {
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  padding: spacing.xs,
}

const $buttonContainer: ViewStyle = {
  flexDirection: "column",
}

const $buttonStyle: ViewStyle = {
  borderWidth: 0,
  minWidth: 60,
}

const $lifePointsContainer: ViewStyle = {
  alignItems: "center",
  justifyContent: "center",
}