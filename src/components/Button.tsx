import { Button } from "@/components/ui/button";
import type { ReactNode } from "react";

interface ButtonOutlineProps {
  text: ReactNode;
  className?: string;
}

const ButtonOutline = ({ text, className }: ButtonOutlineProps) => {
  return (
    <Button
      className={`cursor-pointer text-sm font-bold tracking-wide px-6 py-3 ${className}`}
      variant="outline"
    >
      {text}
    </Button>
  );
};

export default ButtonOutline;
