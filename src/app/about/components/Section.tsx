import { cn } from "@/lib/utils";

interface SectionProps {
    title: string;
    content: string;
    className?: string;
}

export default function Section({ title, content, className }: SectionProps) {
    return (
        <div className={cn("space-y-4", className)}>
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#DEB8E9] to-pink-400 bg-clip-text text-transparent">
                {title}
            </h2>
            <p className="text-gray-600 leading-relaxed">
                {content}
            </p>
        </div>
    );
}