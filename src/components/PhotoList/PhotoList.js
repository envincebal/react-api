import React, {Component} from "react";
import axios from "axios";
import PhotoItem from "../PhotoItem/PhotoItem";
const API_KEY = "oi1hSplSQS_hI67jQphH7UyZTPrpDo61GLyja7nCFeY";

class PhotoList extends Component {
  constructor() {
    super();
    this.state = {
      photos: []
    }
  }

  componentDidMount = async() => {

    const {data: photos} = await axios.get("https://api.unsplash.com/photos", {
      headers: {
        Authorization: "Client-ID " + API_KEY
      }
    });

    this.setState({photos})
  }

  render() {
    if (this.state.photos.length === 0) 
      return <div className="loading">Loading</div>
    
      return (
      <div>
      {
        this.state.photos.map(photo => (
          <PhotoItem 
            key={photo.id}
            photo={photo} />
        ))
      }
      </div>
    )

  }
}

export default PhotoList;