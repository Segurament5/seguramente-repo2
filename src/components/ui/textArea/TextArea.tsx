import { Label } from "@radix-ui/react-label";
import React from "react";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
}

const TextArea: React.FC<TextAreaProps> = ({ label, ...props }) => {
    return (
        <div className="flex flex-col space-y-1">
            {label && (
                <Label className="text-sm font-medium text-gray-700" htmlFor={props.id}>
                    {label}
                </Label>
            )}
            <textarea
                {...props}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DEB8E9] focus:border-transparent text-sm"
            />
        </div>
    );
};

export default TextArea;
