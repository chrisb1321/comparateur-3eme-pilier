import Image from "next/image";
import { cn } from "@/lib/utils";
import type { SiteImage } from "@/lib/media";

export function Frame({
  image,
  className,
  imgClassName,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  caption,
  rounded = true,
  fill = false,
}: {
  image: SiteImage;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  sizes?: string;
  caption?: string;
  rounded?: boolean;
  fill?: boolean;
}) {
  return (
    <figure className={cn("group overflow-hidden", rounded && "rounded-[20px]", className)}>
      {fill ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          sizes={sizes}
          className={cn(
            "object-cover transition-transform duration-[1200ms] ease-out motion-safe:group-hover:scale-[1.035]",
            imgClassName,
          )}
        />
      ) : (
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          priority={priority}
          sizes={sizes}
          className={cn(
            "h-full w-full object-cover transition-transform duration-[1200ms] ease-out motion-safe:group-hover:scale-[1.035]",
            imgClassName,
          )}
        />
      )}
      {caption ? (
        <figcaption className="mt-3 text-[0.7rem] tracking-[0.16em] uppercase text-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
