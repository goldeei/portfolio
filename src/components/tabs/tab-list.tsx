import { RovingFocusGroup } from "@radix-ui/react-roving-focus";
import { ReactElement } from "react";

import { TabsList } from "../ui/tabs";
import { TabSelector } from "./tab-selector";

interface TabListProps {
  children:
    | ReactElement<typeof TabSelector>
    | ReactElement<typeof TabSelector>[];
}

export const TabList = ({ ...props }: TabListProps) => {
  const { children } = props;

  return (
    <RovingFocusGroup asChild>
      <TabsList>{children}</TabsList>
    </RovingFocusGroup>
  );
};
