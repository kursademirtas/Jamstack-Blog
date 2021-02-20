import {  getStrapiMedia  } from '../lib/media';

const Image = ({ image, style }) => {
	const imageUrl = getStrapiMedia(image);
	
	return (
		<img	
			src={imageUrl}
			alt={image.alternativeText || image.name}
			className={style}
		/>	
	)
}


export default Image;