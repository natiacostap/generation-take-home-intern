import React, { Component} from 'react'

class GoogleMaps extends Component{
    componentDidMount() {
        const map = new window.google.maps.Map(document.getElementById('google-map'), {
          center: { lat: 41.0082, lng: 28.9784 },
          zoom: 8
        });
      }
  
    render(){
       return (
       <div id="google-map" ref={this.googleMapRef} style={{ width: '400px', height: '300px' }}
       />
       
       )
  }
}
export default GoogleMaps