import ProfileCard from "../ProfileCard/ProfileCard";
import userInfo from "../../assets/user-info.json";
import "./ProfileContainer.css";


const ProfileContainer = () => {

    const userInfoJSX = userInfo.map(user => <ProfileCard key={user.id} name={user.name} age={user.age} bio={user.bio} />);
    return (
        <section className="profile-container">
            <h2>User Profiles:</h2>
            {userInfoJSX}
        </section>
    )
}

export default ProfileContainer;