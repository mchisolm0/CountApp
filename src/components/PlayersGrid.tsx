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

const RemoveLifePointsButton: React.FC<RemoveLifePointsButtonProps> = ({ player }) => {
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

const AddLifePointsButton: React.FC<AddLifePointsButtonProps> = ({ player }) => {
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { width } = useWindowDimensions()
  const { gameStore: { currentGame } } = useStores()
  
  const getGridDimensions = () => {
    const playerCount = currentGame.players.length
    
    if (playerCount <= 2) {
      return { columns: 2, rows: 1 }
    } else if (playerCount <= 4) {
      return { columns: 2, rows: 2 }
    } else {
      return { columns: 3, rows: 2 }
    }
  }

  const { columns, rows } = getGridDimensions()
  const cardWidth = 100 / columns
  const cardHeight = 100 / rows

  return (
    <View style={$container}>
      {currentGame.players.map((player: Player) => {
        const isLeftSide = player.playerNumber % 2 === 0
        const rotation = isLeftSide ? "90deg" : "-90deg"
        
        const $cardContainer: ViewStyle = {
          width: `${cardWidth}%`,
          height: `${cardHeight}%`,
          padding: spacing.xs,
        }

        const $rotationWrapperStyle: ViewStyle = {
          transform: [{ rotate: rotation }],
          height: "100%",
          width: "100%",
        }

        return (
          <View key={player.playerID} style={$cardContainer}>
            <Card
              horizontalAlignment="center"
              verticalAlignment="center"
              style={[$cardBaseStyle, $rotationWrapperStyle]}
              HeadingComponent={
                <Text
                  style={{ marginVertical: spacing.sm }}
                  size="xxs"
                  text={`Player ${player.playerNumber}`}
                />
              }
              LeftComponent={<RemoveLifePointsButton player={player} />}
              ContentComponent={
                <View style={$lifePointsContainer}>
                  <Text
                    style={{ marginVertical: spacing.sm }}
                    size="xxl"
                    preset="bold"
                    text={player.lifePoints.toString()}
                  />
                  <Button
                    style={$resetButton}
                    text="Reset"
                    onPress={() => player.resetLifePoints()}
                  />
                </View>
              }
              RightComponent={<AddLifePointsButton player={player} />}
            />
          </View>
        )
      })}
    </View>
  )
})

const $container: ViewStyle = {
  flex: 1,
  flexDirection: "row",
  flexWrap: "wrap",
}

const $cardBaseStyle: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  padding: spacing.sm,
}

const $buttonContainer: ViewStyle = {
  flexDirection: "column",
  gap: spacing.sm,
}

const $buttonStyle: ViewStyle = {
  borderWidth: 0,
  minWidth: 60,
}

const $lifePointsContainer: ViewStyle = {
  alignItems: "center",
  justifyContent: "center",
}

const $resetButton: ViewStyle = {
  marginTop: spacing.xs,
  minWidth: 80,
}
