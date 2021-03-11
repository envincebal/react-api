import React from "react";
import {Link} from "react-router-dom";
import "./PhotoItem.css";

const PhotoItem = ({photo}) => {
  return (
    <div className="photo-item">
      <div className="photo-img-container">
        <img className="photo-img" src={photo.urls.small} alt={photo.urls.alt_description} />
      </div>
      <div className="photo-content">
        <p className="photo-time">created at {photo.created_at}</p>
        <p className="photo-time">updated at {photo.updated_at}</p>
        <p className="photo-likes">{photo.likes} Likes</p>
        <Link to={`/users/${photo.user.name}`} className="photo-user">{photo.user.name}</Link>
      </div>
      <div className="photo-buttons">
        <a className="photo-btn" href={photo.user.links.html}>{photo.user.name}</a>
        <a className="photo-btn" href={photo.links.html}>View Image</a>
      </div>
    </div>
  )
}

export default PhotoItem;