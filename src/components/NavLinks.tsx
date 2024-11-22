import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavLinkProps {
    href: string;
    label: string;
    isActive: boolean;
    onClick?: () => void;
    isMobile?: boolean;
}

export function NavLink({ href, label, isActive, onClick, isMobile = false }: NavLinkProps) {
    if (isMobile) {
        return (
            <Link
                href={href}
                onClick={onClick}
                className={cn(
                    "block w-full px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                    "hover:translate-x-1",
                    isActive
                        ? "bg-white/25 text-white shadow-sm"
                        : "text-white/90 hover:bg-white/15 hover:text-white"
                )}
            >
                {label}
            </Link>
        );
    }

    return (
        <Link
            href={href}
            className={cn(
                "relative px-2 py-1 text-sm font-medium text-white hover:text-pink-100 transition-colors duration-200",
                isActive && "text-pink-100",
                "after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-white",
                "after:left-0 after:bottom-0 after:rounded-full",
                "after:transform after:scale-x-0 after:transition-transform after:duration-300",
                "hover:after:scale-x-100",
                isActive && "after:scale-x-100"
            )}
        >
            {label}
        </Link>
    );
}