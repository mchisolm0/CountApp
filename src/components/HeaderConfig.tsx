import React from "react"
import { Header, HeaderProps } from "."
import { Stack } from "expo-router"

/**
 * A component that configures the Header of a screen using Expo Router.
 * @param {HeaderProps} headerProps - The props for the `Header` component.
 */
export function HeaderConfig(headerProps: HeaderProps) {
  return (
    <Stack.Screen
      options={{
        header: () => <Header {...headerProps} />,
      }}
    />
  )
}
