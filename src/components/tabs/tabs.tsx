import { ReactElement } from "react";

import { Tabs as STabs } from "../ui/tabs";
import { TabContent } from "./tab-content";
import { TabList } from "./tab-list";

interface TabGroupProps {
  children:
    | ReactElement<typeof TabList>
    | ReactElement<typeof TabContent>
    | ReactElement<typeof TabContent>[];

  defaultValue: string;
}

export const Tabs = ({ ...props }: TabGroupProps) => {
  const { children, defaultValue } = props;

  return <STabs defaultValue={defaultValue}>{children}</STabs>;
};
