import './Tile.css';
import React from 'react';
import types from '../utils/types';

class Tile extends React.Component {
  manageContent(){
    if(this.props.type === undefined)
      return <div className = "tile">dd</div>
    else if(this.props.type === types.SPOTIFY)
      return <iframe className="tile" src="https://open.spotify.com/embed/playlist/4ribhPx9KeKLAe3mQrj3fD" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>;
    else if(this.props.type === types.NEWS)
      return <div className = "tile"></div>
      
  }

  render() {
    return this.manageContent();
  }
}


export default Tile;