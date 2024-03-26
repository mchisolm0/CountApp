export * from "./DemoIcon"
export * from "./DemoTextField"
export * from "./DemoToggle"
export * from "./DemoButton"
export * from "./DemoListItem"
export * from "./DemoCard"
export * from "./DemoAutoImage"
export * from "./DemoText"
export * from "./DemoHeader"
export * from "./DemoEmptyState"

import { ReactElement } from "react";

export interface Demo {
  name: string;
  description: string;
  data: ReactElement[];
}

// @demo remove-file
