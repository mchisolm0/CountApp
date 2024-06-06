import { observer } from "mobx-react-lite"
import React from "react"
import { ImageStyle, TextStyle, ViewStyle } from "react-native"
import { Button, Card, Icon, Screen, Text } from "src/components"
import { useStore } from "src/models/RootStore"
import { spacing } from "src/theme"
import { Player } from "src/models/Player"

const rootStore = useStore()

// TODO Finish making buttons with both +5/+1 and minus
const RemoveLifePointsButton = (player: Player) => {
  return (
    <>
      <Button
        style={{ marginVertical: spacing.sm }}
        onPress={() => player.removeLifePoints(1)}
        LeftAccessory={(props) => <Icon style={props.style} icon="caretLeft" />}
        text={"-1"}
      />
      <Button
        style={{ marginVertical: spacing.sm }}
        onPress={() => player.removeLifePoints(5)}
        LeftAccessory={(props) => <Icon style={props.style} icon="caretLeft" />}
        text={"-5"}
      />
    </>
  )
}

const AddLifePointsButton = (player: Player) => {
  return (
    <>
      <Button
        style={{ marginVertical: spacing.sm }}
        onPress={() => player.removeLifePoints(1)}
        RightAccessory={(props) => <Icon style={props.style} icon="caretRight" />}
        text={"+1"}
      />
      <Button
        style={{ marginVertical: spacing.sm }}
        onPress={() => player.removeLifePoints(5)}
        RightAccessory={(props) => <Icon style={props.style} icon="caretRight" />}
        text={"+5"}
      />
    </>
  )
}

export const PlayersGrid = observer(() => {
  return (
    <>
      {rootStore.playerStore.players.map((player) => (
        <Card
          key={player.playerID}
          horizontalAlignment="center"
          verticalAlignment="center"
          style={{ minHeight: 160 }}
          HeadingComponent={
            <Text
              style={{ marginVertical: spacing.sm }}
              size="xxs"
              text={player.playerName + player.playerID}
            />
          }
          LeftComponent={
            <RemoveLifePointsButton player={player} />
          }
          ContentComponent={
            <Text
              style={{ marginVertical: spacing.sm }}
              size="xxl"
              preset="bold"
              text={player.lifePoints.toString()}
            />
          }
          RightComponent={
            <AddLifePointsButton player={player} />
          }
        />
      ))}
    </>
  )
})
