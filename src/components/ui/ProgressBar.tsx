// src/components/ui/progressBar.jsx

import React from 'react';
import { cn } from '@/lib/utils';

const ProgressBar = ({ value, className }) => {
    return (
        <div className={cn('relative h-4 w-full bg-gray-200 rounded-full overflow-hidden', className)}>
            <div
                className="h-full bg-[#DEB8E9] transition-all duration-300"
                style={{ width: `${value}%` }}
            ></div>
        </div>
    );
};

export default ProgressBar;
