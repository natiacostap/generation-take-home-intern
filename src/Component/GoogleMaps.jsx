import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';
import stores from '../store_directory.json'
import swal from 'sweetalert';



const mapStyles = {
  width: '80%',
  height: '90%'
};

class MapContainer extends Component { 
    
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
            button: "Favorito",
       })
      
      }
    />
   
    
      })
    }   
    render() {
      return (
        <div> 
          <div id='Nav'> 
            <nav class="navbar navbar-light bg-dark">
              <a><h1 style={{color: "white"}}>Mexico's Stores</h1></a>
              <div class="dropdown">
              <a style={{brackgroundColor: "green", color:"white"}}class=" dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Favoritos
              </a>
               <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
               <a class="dropdown-item" ></a>
               </div>
              </div>
             </nav>
        </div>
            <Map
              google={this.props.google}
              zoom={12}
              style={mapStyles}
              initialCenter={{ lat: 19.432608, lng: -99.133209}}
              onClick={this.onMapClicked}

            >
              
               
              {this.displayMarkers()}
            
       
             
            </Map>
            <div>
              
            </div>

            </div>
        );
      
    }
}
  
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCVH8e45o3d-5qmykzdhGKd1-3xYua5D2A'
})(MapContainer);