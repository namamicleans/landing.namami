import React, { useState } from "react";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Hide the element entirely on error instead of showing a placeholder */
  hideOnError?: boolean;
}

const SafeImage: React.FC<SafeImageProps> = ({
  hideOnError = false,
  className,
  alt,
  ...props
}) => {
  const [errored, setErrored] = useState(false);

  if (errored) {
    if (hideOnError) return null;
    return (
      <div className={cn("flex items-center justify-center bg-gray-100", className)}>
        <Sparkles className="text-gray-300 w-8 h-8" />
      </div>
    );
  }

  return (
    <img
      {...props}
      alt={alt ?? ""}
      className={className}
      onError={() => setErrored(true)}
    />
  );
};

export default SafeImage;
