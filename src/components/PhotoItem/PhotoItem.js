import React from "react";
import "./PhotoItem.css";

const PhotoItem = ({photo}) => {
  return (
    <div className="photo-item">
      <div className="photo-img-container">
        <img className="photo-img" src={photo.src.landscape} alt={photo.photographer} />
      </div>
      <div className="photo-buttons">
        <a href={photo.photographer_url} className="btn photo-buttons">
          {photo.photographer}
        </a>
        <a href={photo.url} className="btn photo-buttons">
          View Image
        </a>
      </div>
    </div>
  )
}

export default PhotoItem;