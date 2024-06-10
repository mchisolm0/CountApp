# Life Counter App based on Ignite Boilerplate

[![CircleCI](https://circleci.com/gh/infinitered/ignite.svg?style=svg)](https://circleci.com/gh/infinitered/ignite)

## To Do

[x] Init Ignite app
[x] Switch to expo-router
[x] Add Players to MobX State Tree
[x] Update components (e.g. Card)
[x] Draft game screen
[x] Add lifepoint change buttons
[x] Draft start screen
[ ] Create GameStore for MobX
[ ] Implement saved games
[ ] Make option for 1-6 Players (prevent 0 and 7+)
[ ] Create grid and column layouts
[ ] Have grid/column fill screen regardless of players

### (Maybe) To Do

[ ] Add Clerk login
[ ] Create multiplayer (search for friends to play with)
[ ] Design settings page

Currently includes:

- React Native
- React Navigation
- MobX State Tree
- TypeScript
- And more!

### Reference

**icons**
This is where your icon assets will live. These icons can be used for buttons, navigation elements, or any other UI components. The recommended format for icons is PNG, but other formats can be used as well.

Ignite comes with a built-in `Icon` component. You can find detailed usage instructions in the [docs](https://github.com/infinitered/ignite/blob/master/docs/Components-Icon.md).

**images**
This is where your images will live, such as background images, logos, or any other graphics. You can use various formats such as PNG, JPEG, or GIF for your images.

Another valuable built-in component within Ignite is the `AutoImage` component. You can find detailed usage instructions in the [docs](https://github.com/infinitered/ignite/blob/master/docs/Components-AutoImage.md).

How to use your `icon` or `image` assets:

```
import { Image } from 'react-native';

const MyComponent = () => {
  return (
    <Image source={require('../assets/images/my_image.png')} />
  );
};
```

### ./ignite directory

The `ignite` directory stores all things Ignite, including CLI and boilerplate items. Here you will find templates you can customize to help you get started with React Native.

### ./test directory

This directory will hold your Jest configs and mocks.

## Running Maestro end-to-end tests

Follow our [Maestro Setup](https://ignitecookbook.com/docs/recipes/MaestroSetup) recipe from the [Ignite Cookbook](https://ignitecookbook.com/)!
