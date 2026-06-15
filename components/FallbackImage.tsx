import Image from "next/image";
import { useState } from "react";

type Props = {
src: string;
fallback: string;
alt: string;
width: number;
height: number;
className?: string;
};

export default function FallbackImage({
src,
fallback,
alt,
width,
height,
className,
}: Props) {
const [imgSrc, setImgSrc] = useState(src);

return (
<Image
src={imgSrc}
alt={alt}
width={width}
height={height}
className={className}
onError={() => setImgSrc(fallback)}
/>
);
}