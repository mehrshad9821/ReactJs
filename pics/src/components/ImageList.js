import React from 'react';

const ImageList = (props) => {

	const images = props.images.map((image) => {

		return <img alr = {image.description} key ={image.id} src = {image.urls.regular} />
	});

	return <div  className= 'ImageList'>{images}</div>;
};


export default ImageList;