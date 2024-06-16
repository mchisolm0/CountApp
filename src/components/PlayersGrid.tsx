import { observer } from "mobx-react-lite"
import React from "react"
import { FC } from "react"
import { TextStyle, View, ViewStyle, useWindowDimensions } from "react-native"
import { useStores } from "src/models"
import { Player } from "src/models/Player"
import { spacing } from "src/theme"
import PlayerCard from "./PlayerCard"
import { Card } from "./Card"
import { Text } from "./Text"
import { Button } from "./Button"
import { Icon } from "./Icon"

interface AddLifePointsButtonProps {
  player: Player
}
interface RemoveLifePointsButtonProps {
  player: Player
}

interface PlayerCardProps {
  player: Player;
}

// TODO Finish making buttons with both +5/+1 and minus
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
  let column = 2
  let row = 1
  const { playerStore: { players } } = useStores()

  // TODO $containerExpander stores the style to dynamically
  // expand the last container in the map if there is only
  // one in the row

  // const $containerStyle = [$containerBaseStyle, $containerExpander]

  return (
    <View style={$container}>
      {players.map((player: Player) => {
        const { height, width } = useWindowDimensions()
        const { playerStore: { playersCount } } = useStores()
        let rotationDegrees = player.calculateRotation(playersCount, player.playerID)
        let isRotated = false;

        if (rotationDegrees !== '0deg') {
          isRotated = true;
        }
        if (playersCount < 3) {
          row = 1
        } else if (playersCount < 5) {
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
          // backgroundColor: colors.background,
          borderColor: "orange",
          borderWidth: 5,
          backgroundColor: 'red',
          width: `${100 / column}%`,
          height: `${100 / row}%`,
          // transform: [{ rotate: rotationDegrees }]
        }

        const $rotationWrapperStyle: ViewStyle = {
          // width: `130%`,
          // height: `80%`,
          // TODO set height, subtracting height of
          // safe areas and header
        }
        const $cardStyle = [$cardBaseStyle, $rotationWrapperStyle, { backgroundColor: 'green' }]

        return (
          <View style={$cardContainer}>
            <Card
              key={player.playerID}
              horizontalAlignment="center"
              verticalAlignment="center"
              style={$cardStyle}
              HeadingComponent={
                <Text
                  style={{ marginVertical: spacing.sm }}
                  size="xxs"
                  text={player.playerName + player.playerID}
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
  backgroundColor: 'blue'
}

const $cardBaseStyle: ViewStyle = {
  minHeight: 160,
  flex: 1,
  // flexGrow: 1,
  justifyContent: "center",
  paddingHorizontal: spacing.lg,
}

const $unnamedText: TextStyle = {
  marginBottom: spacing.md,
}
