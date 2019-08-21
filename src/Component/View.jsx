import React, {Component} from 'react'
import './style.css'



class Favs extends Component{
 

render() {
    return (
        <div id='Nav'> 
        <nav class="navbar navbar-light">
        <a><h1>Mexico's Stores</h1></a>
        <div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Favoritos
  </a>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item" ><h5>{this.state}</h5><p>{this.state}</p></a>
    
  </div>
</div>
        </nav>
         </div>
    )
}
}
export default Favs