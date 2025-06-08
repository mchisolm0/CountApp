import React from "react"
import { Button } from "./Button"
import { Text } from "./Text"
import { Player } from "src/models/Player"
import { spacing } from "src/theme"
import { Icon } from "./Icon"
import { View, ViewStyle } from "react-native"
import { Card } from "./Card"
import { observer } from "mobx-react-lite"

// import { Container } from './styles';

interface AddLifePointsButtonProps {
  player: Player
}
interface RemoveLifePointsButtonProps {
  player: Player
}

interface PlayerCardProps {
  player: Player
}

// TODO Finish making buttons with both +5/+1 and minus
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

function PlayerCard({ player }: PlayerCardProps) {
  const $cardContainer = [$cardBaseStyle]

  return (
    <Card
      key={player.playerID}
      horizontalAlignment="center"
      verticalAlignment="center"
      style={$cardContainer}
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
  )
}

const $cardBaseStyle: ViewStyle = {
  flex: 1,
  flexGrow: 1,
  justifyContent: "center",
  alignItems: "center",
  paddingHorizontal: spacing.xxxs,
}

const $buttonContainer: ViewStyle = {
  flexDirection: "column",
  gap: spacing.sm,
}

const $buttonStyle: ViewStyle = {
  borderWidth: 0,
}

export default observer(PlayerCard)
