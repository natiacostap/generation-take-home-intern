import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import stores from '../store_directory.json'
import swal from '@sweetalert/with-react'
import Favs from './View'
import Favorites from './favorites'


const mapStyles = {
  width: '80%',
  height: '90%'
};


const onPick = value => {
  swal("Se agrego a tus favoritos!", `:)`, "success")
}
const FavButton = ({favorites, onClick }) => (
  <button 
    data={(favorites)}
    onClick={() => onClick(favorites)}
  >Agregar a Favoritos</button>
);


export class MapContainer extends Component {
   constructor(props){
     super(props)
     this.state ={
       favs: []
     }
   }
    favs= []
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
            buttons: { cancel: true,
                       confirm: "Favorito"},
                      //  .then((value) =>{
                      //     console.log(value)
                      //  })
        })
        
        
        // content: (
        //   <div>
        //     <FavButton 
        //     favorites={{title: el.Name,text: el.Address,}}
        //     onClick={onPick}
        //     />
        //   </div>
        // )
        
       }
    />
      })
    }

       
    render() {
      return (
        <div> 
          <div id='Nav'> 
            <nav class="navbar navbar-light">
              <a><h1>Mexico's Stores</h1></a>
              <div class="dropdown">
              <a class="btn btn-secondary dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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