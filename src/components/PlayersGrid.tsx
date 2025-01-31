import { observer } from "mobx-react-lite"
import React from "react"
import { View, ViewStyle } from "react-native"
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
    <View style={{ flexDirection: "column" }}>
      <Button
        style={{ marginVertical: spacing.sm, borderWidth: 0 }}
        onPress={() => player.removeLifePoints(1)}
        LeftAccessory={(props) => <Icon style={props.style} icon="caretLeft" />}
        text={"-1"}
      />
      <Button
        style={{ marginVertical: spacing.sm, borderWidth: 0 }}
        onPress={() => player.removeLifePoints(5)}
        LeftAccessory={(props) => <Icon style={props.style} icon="caretLeft" />}
        text={"-5"}
      />
    </View>
  )
}

const AddLifePointsButton: React.FC<AddLifePointsButtonProps> = ({ player }) => {
  return (
    <View style={{ flexDirection: "column" }}>
      <Button
        style={{ marginVertical: spacing.sm, borderWidth: 0 }}
        onPress={() => player.addLifePoints(1)}
        RightAccessory={(props) => <Icon style={props.style} icon="caretRight" />}
        text={"+1"}
      />
      <Button
        style={{ marginVertical: spacing.sm, borderWidth: 0 }}
        onPress={() => player.addLifePoints(5)}
        RightAccessory={(props) => <Icon style={props.style} icon="caretRight" />}
        text={"+5"}
      />
    </View>
  )
}

export const PlayersGrid = observer(() => {
  // TODO refactor to only pull out players array
  const column = 2
  let row = 1
  const { gameStore: { currentGame } } = useStores()

  // TODO $containerExpander stores the style to dynamically
  // expand the last container in the map if there is only
  // one in the row

  // const $containerStyle = [$containerBaseStyle, $containerExpander]

  return (
    <View style={$container}>
      {currentGame.players.map((player: Player) => {
        // TODO make cards rotate clockwise/counterclockwise
        // based on if it is left/right of the screen
        // (so players on each side see the text the right way)
        //
        // Previous code for rotation
        // let rotationDegrees = player.calculateRotation(playersCount, player.playerID)
        // let isRotated = false;
        //
        // if (rotationDegrees !== '0deg') {
        //   isRotated = true;
        // }
        if (currentGame.playersCount < 3) {
          row = 1
        } else if (currentGame.playersCount < 5) {
          row = 2
        } else {
          row = 3
        }

        // TODO draw out the containers to determine
        // how to get the height/width right
        // TODO brainstorm passing a preset to rotate
        // the card
        const $cardContainer: ViewStyle = {
          flexDirection: 'row',
          flexWrap: 'wrap',
          width: `${100 / column}%`,
          height: `${100 / row}%`,
          // backgroundColor: colors.background,
          // transform: [{ rotate: rotationDegrees }]
        }

        const $rotationWrapperStyle: ViewStyle = {
          // width: `130%`,
          // height: `80%`,
          // TODO set height, subtracting height of
          // safe areas and header
        }
        const $cardStyle = [$cardBaseStyle, $rotationWrapperStyle]

        return (
          <View
            key={player.playerID}
            style={$cardContainer}
          >
            <Card
              horizontalAlignment="center"
              verticalAlignment="center"
              style={$cardStyle}
              HeadingComponent={
                <Text
                  style={{ marginVertical: spacing.sm }}
                  size="xxs"
                  text={player.playerName + player.playerNumber}
                />
              }
              LeftComponent={<RemoveLifePointsButton player={player} />}
              ContentComponent={
                <Text
                  style={{ marginVertical: spacing.sm }}
                  size="xxl"
                  preset="bold"
                  text={player.lifePoints.toString()}
                />
              }
              RightComponent={<AddLifePointsButton player={player} />}
            />
          </View>
        )
      })
      }
    </View>
  )
})

const $container: ViewStyle = {
  width: `${100}%`,
  height: `${100}%`,
  flexDirection: 'row',
  flexWrap: 'wrap',
}

const $cardBaseStyle: ViewStyle = {
  minHeight: 160,
  height: `${100}%`,
  width: `${100}%`,
  justifyContent: "center",
  paddingHorizontal: spacing.lg,
}
