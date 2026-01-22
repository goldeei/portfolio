import { cn } from "@/lib/utils";
import { HeroContent } from "../HeroContent";

export const HomePage = ({className}: {className?: string}) => {
  return (
    <section id="home" className={cn("flex flex-col h-dvh justify-center", className)}>
         <HeroContent />
        </section>
  );
};