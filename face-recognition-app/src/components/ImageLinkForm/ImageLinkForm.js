import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ( { onInputChange, onButtonClick } ) => {
    return (
        <div className = 'tc' style = {{ fontFamily: "'Courier New', Courier, monospace" }}>
         <div className = 'ma2'>
          <p classname='f3'>{'This magic brain detects faces, try it out!'}</p>
         </div>
         <div className='center'>
          <div className = 'center form br3 shadow-5 pa4' >
           <input 
            type="text" 
            className = 'f4 pa2 w-70'
            onChange = {onInputChange}
           />
           <button 
           className = 'w-30 grow f4 link ph3 pv2 dib white bg-light-purple' 
           style = {{ border: 'none', padding: '' }}
           onClick = {onButtonClick}
           >Detect</button>
          </div>
         </div>
        </div>
    );
}

export default ImageLinkForm;