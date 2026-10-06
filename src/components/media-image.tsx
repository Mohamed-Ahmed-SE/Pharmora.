import Image from "next/image";

type MediaImageProps = { src: string; alt: string; className?: string; sizes?: string };

export function MediaImage({ src, alt, className, sizes = "(max-width: 760px) 100vw, 50vw" }: MediaImageProps) {
  return <Image src={src} alt={alt} fill sizes={sizes} className={className} />;
}
