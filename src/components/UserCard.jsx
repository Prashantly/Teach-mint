const UserCard = ({ id, name, count }) => {
  return (
    <div className="user-card">
      <div className="user-info">
        <div className="user-name">{name}</div>
        <div className="user-posts">Posts: {count}</div>
      </div>
    </div>
  );
};

export default UserCard;
