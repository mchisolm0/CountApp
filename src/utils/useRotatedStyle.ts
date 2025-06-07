import { useState } from "react"
import { LayoutChangeEvent, ViewStyle } from "react-native"

export const useRotatedStyle = (
  threshold: number,
  rotation: 90 | -90 = 90,
) => {
  const [isRotated, setIsRotated] = useState(false)

  const onLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout
    setIsRotated(width < threshold)
  }

  const rotatedStyle: ViewStyle = isRotated
    ? { transform: [{ rotate: `${rotation}deg` }] }
    : {}

  return { onLayout, rotatedStyle, isRotated }
}