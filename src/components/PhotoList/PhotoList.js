import React, {Component} from "react";
import axios from "axios";
const API_KEY = "oi1hSplSQS_hI67jQphH7UyZTPrpDo61GLyja7nCFeY";
class PhotoList extends Component {
  constructor() {
    super();
    this.state = {
      photos: []
    }
  }

  componentDidMount = async () => {

    const data = await axios.get("https://api.unsplash.com/photos",{
      headers: {
        Authorization: "Client-ID " + API_KEY
      }
    });

    console.log(data);
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    )

  }
}

export default PhotoList;