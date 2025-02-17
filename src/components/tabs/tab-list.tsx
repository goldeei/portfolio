import { ReactElement } from "react";

import { TabSelector } from "./tab-selector";

interface TabListProps {
  children:
    | ReactElement<typeof TabSelector>
    | ReactElement<typeof TabSelector>[];
}

export const TabList = ({ ...props }: TabListProps) => {
  const { children } = props;

  return <div>{children}</div>;
};
