import React from "react";

const PhotoForm = () => {
  return (
    <form>
      <select name="sortTerm" className="select" id="">
        <option>Select Item</option>
        <option value="created_at">created at</option>
        <option value="updated_at">updated at</option>
        <option value="likes">likes</option>
      </select>
      <select name="sortOrder" id="">
        <option value="asc">asc</option>
        <option value="desc">desc</option>
      </select>
    </form>
  )
}

export default PhotoForm;