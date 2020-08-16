import React from 'react';
import faker from 'faker';

const CommentDetail =(props) => {

	return (
		<div className = "comment">
					<a href="/" className = "avatar">
						<img alt = "avatar" src ={props.pic}/>
					</a>
					<div className = 'contenr'>
						<a href= "/" className = "author">
						{props.author}
						</a>
						<div className="metadata">
						<span className = "data"> {props.date}</span>
						</div>
						<div className = "text">{props.comments}</div>
						</div>
				</div>
				);
};


export default CommentDetail;