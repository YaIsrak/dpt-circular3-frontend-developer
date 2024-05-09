import { NavMenuLinks } from "@/lib/constant";
import { Bell } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";

export default function NavigationBar() {
    return (
        <nav className="w-full bg-neutral-900 text-neutral-300">
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center">
                {/* Navigation Menu */}
                <div className="flex gap-8">
                    {NavMenuLinks.map((link, i) => (
                        <a key={i} href={link.href} className="text-sm font-semibold">{link.name}</a>
                    ))}
                </div>

                <div className="mx-auto">

                </div>
                <div className="flex gap-4 items-center">
                    <Bell className="w-5 h-5" />
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://github.com/shadcn.png" />
                    </Avatar>
                </div>
            </div>
        </nav>
    )
}
