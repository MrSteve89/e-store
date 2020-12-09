import React from 'react';

import './category.scss';

const Category = ({title, url, size}) => {
	return (
		<div className={`${size} category`}>
			<div 
				className="background-image"
				style={{backgroundImage: `url(${url})`}}
			/>
				<div className='category-text'>
					<h1 className='category-title'>{title.toUpperCase()}</h1>
					<span className='category-subtitle'>SHOP NOW</span>
				</div>
		</div>
	);
	
}

export default Category;