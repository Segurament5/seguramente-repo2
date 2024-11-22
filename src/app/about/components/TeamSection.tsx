import { cn } from "@/lib/utils";

interface TeamSectionProps {
    title: string;
    subtitle: string;
    content: string;
    className?: string;
}

export default function TeamSection({ title, subtitle, content, className }: TeamSectionProps) {
    return (
        <div className={cn("space-y-6", className)}>
            <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#DEB8E9] to-pink-400 bg-clip-text text-transparent">
                    {title}
                </h2>
                <h3 className="text-xl italic text-gray-700">
                    {subtitle}
                </h3>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
                {content}
            </p>
        </div>
    );
}