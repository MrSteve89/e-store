import React from 'react';
import {withRouter} from 'react-router-dom';

import './category.scss';

const Category = ({title, imageUrl, size, history, linkUrl, match}) => {
	return (
		<div 
			onClick={() => history.push(`${match.url}${linkUrl}`)}
			className={`${size} category`}
		>
			<div 
				className="background-image"
				style={{backgroundImage: `url(${imageUrl})`}}
			/>
				<div className='category-text'>
					<h1 className='category-title'>{title.toUpperCase()}</h1>
					<span className='category-subtitle'>SHOP NOW</span>
				</div>
		</div>
	);
	
}

export default withRouter(Category);