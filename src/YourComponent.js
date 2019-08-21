import React, { Component } from 'react';
import Maps from './Component/Map'
import store from './store_directory.json'
import MapContainer from './Component/GoogleMaps'
import Favs from './Component/View';
/*
* Use this component as a launching-pad to build your functionality.
*
*/

class YourComponent extends Component {
  
  render() {
    return (
      <div>        
        <h1> Put your solution here!</h1>
        <MapContainer/>
        {/* <Maps
        id="myMap"
        options={{
          center: { lat: 19.432608, lng: 	-99.133209 },
          zoom: 12
        }}
        
        onMapLoad={map => {
          store.map(el=> { 
          let marker = new window.google.maps.Marker({
            position: {lat: el.Coordinates.lat , lng: el.Coordinates.lng},
            map: map,
            title: el.Name
          });
         
      })
    }} 

          /> */}
      </div>
    );
  }
}


export default YourComponent;
