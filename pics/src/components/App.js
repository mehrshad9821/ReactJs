import React from 'react';
import axios from 'axios';
import ImageList from './ImageList.js'
import SearchBar from  './SearchBar.js'


class App extends React.Component{
	state = {images: []};

	onSearchSubmit = async (term) =>{
		const response = await axios.get('https://api.unsplash.com/search/photos',{
			params: {query: term},
			headers: {
				Authorization:'Client-ID 6ylKaQwQt8E7y6JznyO7n59MvFDFyyZGOVUsNL0hs5k'
			}
		});

		this.setState({images: response.data.results});
	}

	render (){
	return (
		<div>
	 < SearchBar onSubmit={this.onSearchSubmit}/>
	 Found: {this.state.images.length} images
	 <ImageList images = {this.state.images}/>
	 </div>
	 );
}
}

export default App;