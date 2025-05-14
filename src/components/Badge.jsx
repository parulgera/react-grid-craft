
import React from 'react';
import { cn } from "@/lib/utils";

const Badge = ({ children, variant = "default", className }) => {
  const variants = {
    default: "bg-primary/10 text-primary",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    danger: "bg-red-100 text-red-800",
  };

  return (
    <span className={cn(
      "px-2 py-1 text-xs font-medium rounded-full inline-block",
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
};

export default Badge;
