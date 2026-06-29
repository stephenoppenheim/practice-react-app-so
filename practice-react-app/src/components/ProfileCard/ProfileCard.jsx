
import "./ProfileCard.css";

const ProfileCard = ({ name, age, bio }) => {
    return (
        <article className="profile-card">
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <p>Bio: {bio}</p>
        </article>
    )
}

export default ProfileCard;