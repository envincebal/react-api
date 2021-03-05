import React, {Component} from "react";
import axios from "axios";
import PhotoItem from "../PhotoItem/PhotoItem";
import "./PhotoList.css"

class PhotoList extends Component {
  constructor() {
    super();
    this.state = {
      photos: []
    }
  }

  componentDidMount = async () => {

    const data = await axios.get(`https://api.pexels.com/v1/curated`,{
      headers: {
        Authorization: "563492ad6f917000010000017c3eef529ca946b996dda3d9a84b79f4"
      }
    });
    this.setState({
      photos: data.data.photos
    })
  }

  render() {
    const {photos} = this.state;
    return (
      <div>
        <p className="title">We have {photos.length} photos</p>
        <div className="photos">
          {
          photos.map(photo => {
            return (
              <PhotoItem 
              key={photo.id}
              photo={photo} />
            );
          })
        }
        </div>
      </div>
    );
  }
}

export default PhotoList;