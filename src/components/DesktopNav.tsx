"use client";

import { usePathname } from "next/navigation";
import { NavLink } from "./NavLinks";

interface NavItem {
    href: string;
    label: string;
}

interface DesktopNavProps {
    items: NavItem[];
}

export function DesktopNav({ items }: DesktopNavProps) {
    const pathname = usePathname();

    return (
        <nav className="hidden md:flex items-center space-x-8">
            {items.map((item) => (
                <NavLink
                    key={item.href}
                    href={item.href}
                    label={item.label}
                    isActive={pathname === item.href}
                />
            ))}
        </nav>
    );
}