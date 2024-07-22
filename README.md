# Life Counter App based on Ignite Boilerplate

## Based on the Ignite boilerplate by Infinite Red

## To Do

[x] Init Ignite app
[x] Switch to expo-router
[x] Add Players to MobX State Tree
[x] Update components (e.g. Card)
[x] Draft game screen
[x] Add lifepoint change buttons
[x] Draft start screen
[x] Fix game screen UI
  [x] Make cards dynamically fill screen
  [x] Create grid and column layouts
  [x] Have grid/column fill screen regardless of players
[ ] Implement saved games
  [ ] Create GameStore for MobX
  [ ] Draft history screen
[ ] Implement settings page
  [ ] Brainstorm settings needed
  [ ] Draft settings page

### (Maybe) To Do

[ ] Build grid for cards (2 in row flip cards 90 degrees)
[ ] Research revising header for back button
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
This is the boilerplate that [Infinite Red](https://infinite.red) uses to test bleeding-edge changes to their React Native stack.

## Quick Start

### Setup

1. Fork and/or clone this repo
2. Run `yarn` to get dependencies setup
3. Run `npx expo prebuild`
4. Run `npx expo run:ios` or `npx expo run:android` (both should work)

### General Reference

**components**
This is where your reusable components live which help you build your screens.

**i18n**
This is where your translations will live if you are using `react-native-i18n`.

**models**
This is where your app's models will live. Each model has a directory which will contain the `mobx-state-tree` model file, test file, and any other supporting files like actions, types, etc.

**services**
Any services that interface with the outside world will live here (think REST APIs, Push Notifications, etc.).

**theme**
Here lives the theme for your application, including spacing, colors, and typography.

**utils**
This is a great place to put miscellaneous helpers and utilities. Things like date helpers, formatters, etc. are often found here. However, it should only be used for things that are truly shared across your application. If a helper or utility is only used by a specific component or model, consider co-locating your helper with that component or model.

### ./assets directory

This directory is designed to organize and store various assets, making it easy for you to manage and use them in your application. The assets are further categorized into subdirectories, including `icons` and `images`:

```
assets
├── icons
├── images
└── misc
```

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
