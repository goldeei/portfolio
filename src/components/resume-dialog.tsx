import { ExternalLink, FileUser } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';

export const ResumeDialog = () => {
  return (
    <Dialog>
      <DialogTrigger className="w-full md:w-96" asChild>
        <Button>
          <FileUser />
          View Full Resume
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-overlay flex h-[95vh] max-w-[95vw] flex-col gap-0 p-0 pt-8 **:data-[slot='dialog-close']:top-2 **:data-[slot='dialog-close']:right-2">
        <DialogHeader className="sr-only">
          <DialogTitle>Resume</DialogTitle>
        </DialogHeader>
        <div className="flex-1 overflow-hidden">
          <iframe
            src="/resume.pdf#toolbar=1&navpanes=0&scrollbar=1"
            className="h-full w-full border-0"
            title="Jake Goldfarb Resume"
            loading="lazy"
          >
            <p className="p-4">
              Your browser doesn&apos;t support PDF viewing.{' '}
              <a href="/resume.pdf" className="underline">
                Download the PDF instead.
              </a>
            </p>
          </iframe>
        </div>
        <DialogFooter className="flex items-center border-t p-4">
          <Button variant="ghost" size="sm" asChild>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Open in New Tab
            </a>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
