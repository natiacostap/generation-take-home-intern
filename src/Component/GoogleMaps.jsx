import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import stores from '../store_directory.json'
import swal from 'sweetalert'

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
   
  
    displayMarkers = () => {
      return stores.map(el => {
        return <Marker  
        position={{
         lat: el.Coordinates.lat,
         lng: el.Coordinates.lng
       }}
       onClick={() =>  
        swal({
            title: el.Name,
            text: el.Address,
            button: "Agregar a Favoritos",
          })}
      
    />
      })
    }

    
       
    render() {
        return (
            <Map
              google={this.props.google}
              zoom={12}
              style={mapStyles}
              initialCenter={{ lat: 19.432608, lng: -99.133209}}
            >
              {this.displayMarkers()}
             
             
            </Map>

        );
      
    }
    }
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCVH8e45o3d-5qmykzdhGKd1-3xYua5D2A'
})(MapContainer);