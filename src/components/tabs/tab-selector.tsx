import { RovingFocusGroupItem } from "@radix-ui/react-roving-focus";

import { TabsTrigger } from "../ui/tabs";

interface TabSelectorProps {
  value: string;
}

export const TabSelector = ({ ...props }: TabSelectorProps) => {
  const { value } = props;

  return (
    <RovingFocusGroupItem asChild>
      <TabsTrigger value={value}>Tab Selector</TabsTrigger>
    </RovingFocusGroupItem>
  );
};
