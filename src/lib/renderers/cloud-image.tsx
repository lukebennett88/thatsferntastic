import { Image as UnpicImage } from '@unpic/react';

type CloudImageProps = {
	alt: string;
	height: number;
	src: string;
	width: number;
};

export function CloudImage({ alt, height, src, width }: CloudImageProps) {
	const imgMaxWidthPx = 1216;

	return (
		<UnpicImage
			alt={alt}
			fallback="imgix"
			height={height ?? undefined}
			src={src}
			width={width ?? imgMaxWidthPx}
		/>
	);
}
