import { observer } from "mobx-react-lite"
import React from "react"
import { Button, Card, Icon, Text } from "src/components"
import { useStores } from "src/models/helpers/useStores"
import { spacing } from "src/theme"
import { Player } from "src/models/Player"
import { View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"

interface AddLifePointsButtonProps {
  player: Player
}
interface RemoveLifePointsButtonProps {
  player: Player
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
  const {playerStore} = useStores()

  console.log("PlayersGrid")
  console.log(playerStore.players)

  return (
    <ScrollView style={{ flex: 1, backgroundColor:"red" }}>
      {playerStore.players.map((player) => (
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
      ))}
    </ScrollView>
  )
})
