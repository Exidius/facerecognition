import React from 'react';

const ImageLinkForm = ({ onInputChange, onButtonSubmit}) => {
	return (
		<div>
		<p className ='f3'>
			{'This will detect faces, bla bla bla...'}
		</p>
		<div>
			<input type='text' 
			onChange={onInputChange}/>

			<button onClick={onButtonSubmit}>Detect</button>
		</div>
		</div>
	);
}

export default ImageLinkForm;