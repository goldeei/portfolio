import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';

interface TabGroupProps {
  tabs: {
    label: string;
    value: string;
    content: React.ReactNode;
  }[];
  defaultValue?: string;
}

export const Tabs = ({ ...props }: TabGroupProps) => {
  const { tabs } = props;

  return (
    <div className="flex gap-12">
      <RadioGroup>
        <div>
          {tabs.map(({ label, value }) => (
            <RadioGroupItem key={value} value={value}>
              {label}
            </RadioGroupItem>
          ))}
        </div>
        <div>
          {tabs.map(({ label, value }) => (
            <Label key={value} value={value}>
              {label}
            </Label>
          ))}
        </div>
      </RadioGroup>
      <div>
        {tabs.map(({ value, content }) => (
          <div key={value}>{content}</div>
        ))}
      </div>
    </div>
  );
};
