import { observer } from "mobx-react-lite"
import React from "react"
import { ImageStyle, TextStyle, ViewStyle } from "react-native"
import { Button, Card, Icon, Screen, Text } from "src/components"
import { useStore } from "src/models/RootStore"
import { spacing } from "src/theme"

export const PlayersGrid = observer(() => {
  const rootStore = useStore();

  return (
    <>
      {
        rootStore.playerStore.players.map((player) => (
          <Card
            key={player.playerID}
            horizontalAlignment="center"
            verticalAlignment="center"
            style={{ minHeight: 160 }}
            HeadingComponent={
              <Text style={{ marginVertical: spacing.sm }} size="xxs" text={player.playerName + player.playerID} />
            }
            LeftComponent={
              <Button
                style={{ marginVertical: spacing.sm }}
                onPress={() => player.removeLifePoints(1)}
                LeftAccessory={(props) => <Icon style={props.style} icon="caretLeft" />}
              />
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
              <Button
                style={{ marginVertical: spacing.sm }}
                onPress={() => player.addLifePoints(1)}
                RightAccessory={(props) => <Icon style={props.style} icon="caretRight" />}
              />
            }
          />
        ))
      }
    </>
  )
})

