import React from 'react';
import { Button } from './Button';
import { Text } from './Text';
import { Player } from 'src/models/Player';
import { spacing } from 'src/theme';
import { Icon } from './Icon';
import { TransformsStyle, View, ViewStyle, useWindowDimensions } from 'react-native';
import { Card } from './Card';
import { observer } from 'mobx-react-lite';
import { useStores } from 'src/models';

// import { Container } from './styles';

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

// TODO add rotate prop to rotate card 90 degrees
// players.length > 1 AND do one of the following
// clockwise if id % 2 == 0
// counter-clockwise if id % 2 == 1
function PlayerCard({ player }: PlayerCardProps) {
  // let rotationDegrees = player.calculateRotation(numberOfPlayers, player.playerID)
  // const column = 2;
  // const { height, width } = useWindowDimensions()
  let isRotated = false;

  // if (rotationDegrees !== '0deg') {
  //   isRotated = true;
  // }
  //
  const $rotationWrapperStyle = {
    // transform: [{ rotate: rotationDegrees }],
    // TODO set height, subtracting height of
    // safe areas and header
    // height: height - 110,
  }

  const $cardContainer = [$cardBaseStyle, $rotationWrapperStyle]

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

export default observer(PlayerCard)
