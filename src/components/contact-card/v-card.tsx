import { VariantProps } from 'class-variance-authority';
import { DownloadIcon } from 'lucide-react';
import { Button, buttonVariants } from '../ui/button';

export const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Jake Goldfarb
N:Goldfarb;Jake;;;
TITLE:Frontend Engineer
EMAIL:jgoldfarb.dev@gmail.com
TEL;TYPE=CELL:+17323547973
ADR;TYPE=HOME:;;Highland Park;New Jersey;NJ;08904;United States
item1.URL:https://jakegoldfarb.com
item1.X-ABLabel:Portfolio
item2.URL:https://linkedin.com/in/jakegoldfarb
item2.X-ABLabel:LinkedIn
item3.URL:https://github.com/goldeei
item3.X-ABLabel:GitHub
END:VCARD`;

/**
 * Downloads the vCard data to the user's device.
 */
export const downloadVCard = () => {
  const blob = new Blob([vCardData], { type: 'text/vcard' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'jake-goldfarb.vcf';
  link.click();
  URL.revokeObjectURL(url);
  link.remove();
};

export const DownloadVCardButton = ({
  className,
  variant = 'default',
  size = 'default',
}: {
  className?: string;
  variant?: VariantProps<typeof buttonVariants>['variant'];
  size?: VariantProps<typeof buttonVariants>['size'];
}) => {
  return (
    <Button onClick={downloadVCard} className={className} variant={variant} size={size}>
      <DownloadIcon />
    </Button>
  );
};
