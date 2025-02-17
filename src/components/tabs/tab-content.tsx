import { TabsContent as STabsContent } from "../ui/tabs";

interface TabContentProps {
  value: string;
}
export const TabContent = ({ ...props }: TabContentProps) => {
  const { value } = props;

  return <STabsContent value={value}>Tab Content-{value}</STabsContent>;
};
