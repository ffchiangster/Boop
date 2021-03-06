import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

class PictureDrop extends React.Component {
  render() {
    return (
      <Dropzone
        style="{width: 50px, height: 50px}"
        multiple={false}
        accept="image/*"
      >
        <img 
          width="50"
          height="50"
          src="http://www.free-icons-download.net/images/digital-camera-icon-27840.png"
        />
      </Dropzone>
    )
  }
}

export default PictureDrop;