import './SeasonDisplay.css'
import React from 'react';

const seasConfig = {
	summer : {
		text : "Damn its Hot",
		iconName: "sun"
	},

	winter : {

		text: "Its very cold"
	}
}
const getSeason = (lat, month) => {

	if (month > 2 && month <9){
		return lat >0 ? 'Summber' : 'Winter';
	} else {
		return lat>0 ? 'Winter' : 'Summer';
	}

};

const SeasonDisplay = (props) => {

	const season = (getSeason(props.lat, new Date().getMonth()));
	const icon = season === 'Winter' ? 'snowflake' : 'sun';
	return (
		<div className= {`season-display ${season}`}>
			<i className = {`icon-left massive ${icon} icon`}> </i>
			<h1>{season === 'Winter' ? 'burr, its chilly' : "Damn, its hot"}</h1>
			<i className = {`icon-right massive ${icon} icon`}> </i>
		</div>
		);
};


export default SeasonDisplay;