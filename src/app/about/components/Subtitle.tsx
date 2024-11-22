import { cn } from "@/lib/utils";

interface SubtitleProps {
  text: string;
  className?: string;
}

export default function Subtitle({ text, className }: SubtitleProps) {
  return (
    <p className={cn(
      "text-xl italic text-gray-600 leading-relaxed",
      className
    )}>
      {text}
    </p>
  );
}