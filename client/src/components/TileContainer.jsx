import './TileContainer.css';
import React from 'react';
import Tile from './Tile';
import types from '../utils/types';

class TileContainer extends React.Component {
  render() {
    return <div id = "tileContainer">
        <div className = "tilesRow">
            <Tile type={types.NEWS}></Tile>
            <Tile type={types.SPOTIFY}></Tile>
            <Tile type={types.NEWS}></Tile>
        </div>
        <div className = "tilesRow">
            <Tile></Tile>
            <Tile></Tile>
            <Tile></Tile>
        </div>
    </div>;
   }
}

export default TileContainer;