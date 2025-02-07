import React ,{useContext} from 'react';
import UserContext from '../context/UserContext';

function Profile() {
    const {user} = useContext(UserContext);

    if(!user){
        return <h1>User Not Logged In </h1>
    }
  return (
    <div>
        <h2>Profile : {user.username}</h2>
        <h3>More Component </h3>

    </div>
  )
}

export default Profile