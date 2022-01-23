import "./user.css"
import { Link } from "react-router-dom"
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import PublishIcon from '@mui/icons-material/Publish';

function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="userShowImg" />
            <div className="userShowTopTitle">
              <span className="userShowUsername">John Common</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentityIcon className="userShowIcon"/>
              <span className="userShowInfoTitle">johnbeck99</span>
            </div>
            <div className="userShowInfo">
              <CalendarTodayIcon className="userShowIcon"/>
              <span className="userShowInfoTitle">10.12.1999</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroidIcon className="userShowIcon"/>
              <span className="userShowInfoTitle">+1 123 456 67</span>
            </div>
            <div className="userShowInfo">
              <MailOutlineIcon className="userShowIcon"/>
              <span className="userShowInfoTitle">johnbeck99@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearchingIcon className="userShowIcon"/>
              <span className="userShowInfoTitle">New York | USA</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form action="" className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label htmlFor="">Username</label>
                <input type="text" placeholder="jonhbeck99" className="userUpdateInput"/>
              </div>
              <div className="userUpdateItem">
                <label htmlFor="">Full Name</label>
                <input type="text" placeholder="John Becker" className="userUpdateInput"/>
              </div>
              <div className="userUpdateItem">
                <label htmlFor="">Email</label>
                <input type="email" placeholder="johnbeck99@gmail.com" className="userUpdateInput"/>
              </div>
              <div className="userUpdateItem">
                <label htmlFor="">Phone</label>
                <input type="text" placeholder="+1 123 456 67" className="userUpdateInput"/>
              </div>
              <div className="userUpdateItem">
                <label htmlFor="">Address</label>
                <input type="text" placeholder="New York | USA" className="userUpdateInput"/>
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img className="userUpdateImg" src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                <label htmlFile="file"><PublishIcon className="userUpdateIcon"/></label>
                <input type="file" style={{display: "none"}}/>
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default User;
