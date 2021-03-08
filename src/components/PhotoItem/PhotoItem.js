import React from "react";

const PhotoItem = ({photo}) => {
  return (
    <div>
      <div className="photo-img-container">
        <img className="photo-img" src={photo.urls.thumb} alt={photo.urls.alt_description} />
      </div>
      <div className="photo-content">
        <p className="photo-time">{photo.created_at}</p>
        <p className="photo-time">{photo.updated_at}</p>
        <p className="photo-likes">{photo.likes}</p>
        <p className="photo-user">{photo.user.name}</p>
      </div>
      <div className="photo-buttons">
        <a className="photo-btn" href={photo.user.links.html}>{photo.user.name}</a>
        <a className="photo-btn" href={photo.links.html}>View Image</a>
      </div>
    </div>
  )
}

export default PhotoItem;