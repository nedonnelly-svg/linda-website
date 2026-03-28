import Image from "next/image";

type SiteFigureProps = {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  /** Tailwind aspect ratio utility on the image frame */
  frameClassName?: string;
  priority?: boolean;
  sizes?: string;
};

export function SiteFigure({
  src,
  alt,
  caption,
  className = "",
  frameClassName = "aspect-[4/3]",
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 640px",
}: SiteFigureProps) {
  return (
    <figure className={className}>
      <div
        className={`relative w-full overflow-hidden rounded-2xl border border-white/10 shadow-lg shadow-black/20 ${frameClassName}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes={sizes}
          priority={priority}
        />
      </div>
      {caption ? (
        <figcaption className="mt-2 text-xs text-muted/70">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
