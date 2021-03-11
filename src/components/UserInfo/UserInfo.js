import React, {Component} from "react";
import api from '../../api/api';
import './UserInfo.css';

class UserInfo extends Component {
  constructor(props) {
    super();
    this.state = {
      user: {}
    }
  }

  async componentDidMount() {
    const username = this.props.match.params.username;

    const {data : user} = await api.get("/users/" + username);
    console.log(user);
    this.setState({user})
  }

  render() {
    const {user} = this.state;
    
    if(!user || !user.profile_image) return "Loading";

    return (
      <div className="user-info">
        <div className="user-content">
          <h1 className="user-title">{user.name}</h1>
          <p className="user-bio">{user.bio}</p>
          <div className="user-img-container">
            <img 
              className="user-img" 
              src={user.profile_image ? user.profile_image.large : ""} 
              alt={user.name} 
            />
            <a className="user-profile" href={user.links ? user.links.html : ""}>View Profile</a>
          </div>
        </div>
        <div className="user-photos-container">
          <p className="user-photos-count">Images By : {user.name}</p>
          <div className="user-photos">
            {user.photos.map(photo => (
              <div key={photo.id}>
                <img className="user-info-img" src={photo.urls.thumb} alt="user photos"/>
              </div>
              
            ))
            }
          </div>
        </div>
      </div>
    )
  }
}

export default UserInfo;