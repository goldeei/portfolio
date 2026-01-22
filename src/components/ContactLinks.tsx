import { FileUser, Github, Linkedin, Mail } from "lucide-react";
import { IconLink } from "./IconLink";

export const CONTACT_LINKS = [
    {
        href: "#",
        icon: FileUser,
        label: "Resume"
    },
    {
        href: "#",
        icon: Mail,
        label: "Email"
    },
    {
        href: "#",
        icon: Github,
        label: "GitHub"
    },
    {
        href: "#",
        icon: Linkedin,
        label: "LinkedIn"
    }
] as const;

export const ContactLinks = () => {
    return (
        <ul className="flex gap-8">
            {CONTACT_LINKS.map((link) => {
                const Icon = link.icon;
                return (
                    <li key={link.label}>
                        <IconLink href={link.href} icon={<Icon className="size-6" />} />
                    </li>
                );
            })}
        </ul>
    )
}