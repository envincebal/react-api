import React, {Component} from "react";
import PhotoItem from "../PhotoItem/PhotoItem";
import PhotoForm from "../PhotoForm/PhotoForm";
import api from '../../api/api';
import lodash from "lodash";
import StackGrid from "react-stack-grid";

class PhotoList extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      sortTerm: "",
      sortOrder: "asc"
    }
  }

  componentDidMount = async () => {
    const {data: photos} = await api.get("/photos");

    this.setState({photos})
  }

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    const sorted = lodash.orderBy(this.state.photos, [this.state.sortTerm], [this.state.sortOrder]);

    if (this.state.photos.length === 0) 
      return <div className="loading">Loading</div>

      return (
      <React.Fragment>
        <PhotoForm onchange={this.handleInput} />
        <div>
          <StackGrid
            columnWidth={400}
            gutterWidth={15}
            gutterHeight={25}
          >
        {
          sorted.map(photo => (
            <PhotoItem 
              key={photo.id}
              photo={photo} />
          ))
        }
          </StackGrid>

        </div>
      </React.Fragment>

    )

  }
}

export default PhotoList;