import React from 'react'
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App= () =>{
	return (
			<div className = "ui container comments">
				<ApprovalCard><CommentDetail author = "Sam" date ="Today at 4PM" comments ="yolo" pic ={faker.image.avatar()} /></ApprovalCard>
				<ApprovalCard><CommentDetail  author = "Alex" date ="Today at 10PM" comments ="golo" pic ={faker.image.avatar()}/></ApprovalCard>
				<ApprovalCard><CommentDetail  author = "Jane" date ="Today at 22PM" comments ="zolo" pic ={faker.image.avatar()}/></ApprovalCard>
			</div>
		)
};
ReactDOM.render(<App />, document.querySelector('#root'));

