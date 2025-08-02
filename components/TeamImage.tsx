"use client"

import Image from "next/image"

type TeamImageProps = {
  src?: string
  alt: string
}

export default function TeamImage({ src, alt }: TeamImageProps) {
  const safeSrc = src && src.trim() !== "" ? src : "/placeholder.svg"

  return (
    <div className="relative w-32 h-32">
      <Image
        src={safeSrc}
        alt={alt}
        fill
        style={{ objectFit: "cover" }}
        className="rounded-full"
        priority={false}
        loading="lazy"
      />
    </div>
  )
}
