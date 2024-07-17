import Image from "next/image";
import { StaticImageData } from "next/image";
import { useState } from "react";

interface BlurImageProps {
  src: StaticImageData | string;
  alt: string;
  className?: string;
  [x: string]: any;
}

export default function BlurImage({
  src,
  alt,
  className,
  ...props
}: BlurImageProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <Image
      alt={alt}
      src={src}
      {...props}
      className={`
              duration-700 ease-in-out group-hover:opacity-75
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
      onLoadingComplete={() => setIsLoading(false)}
    />
  );
}
