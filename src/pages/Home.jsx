import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import UserCard from "../components/userCard";
import Loader from "../components/Loader";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Get all users on page load.
    setLoading(true);
    async function fetchUsers() {
      const response = await axios(
        `https://jsonplaceholder.typicode.com/users`
      );
      const usersData = response.data;

      // Fetch posts for each user and count the number of posts
      let usersWithPosts = await Promise.all(
        usersData.map(async function (user) {
          let postResponse = await axios.get(
            `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
          );

          let postLength = postResponse.data.length;
          return { ...user, post_count: postLength };
        })
      );

      setUsers(usersWithPosts);
      setLoading(false);
    }

    fetchUsers();
  }, []);

  useEffect(() => {
    document.title = "User Directory";
  }, []);

  return (
    <div id="container">
      <h2>Directory</h2>
      {loading ? (
        <Loader />
      ) : (
        <div className="user-directory">
          {users.map((user) => (
            <Link key={user.id} to={`/profile/${user.id}`}>
              <UserCard id={user.id} name={user.name} count={user.post_count} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
