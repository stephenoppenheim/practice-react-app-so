
const ProfileCard = ({ name, age, bio }) => {
    return (
        <article className="profile-card">
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Bio: {bio}</p>
        </article>
    )
}

export default ProfileCard;