import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router";
import PostCard from "../components/PostCard";
import CountryDropdown from "../components/CountryDropdown";

const UserProfile = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [loading, seLoading] = useState(true);

  useEffect(() => {
    document.title = `${user?.name}'s Profile`;
    console.log(user);
  }, [user]);

  useEffect(() => {
    // fetching user details with id
    seLoading(true);
    const getUser = async () => {
      if (!params.id) return;
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${params.id}`
        );
        if (res && res.data) {
          //setting user
          setUser(res.data);
          seLoading(false);
        }
      } catch (error) {
        console.log("Error in getting user details: ", error);
      }
    };
    getUser();
  }, []);

  useEffect(() => {
    //getting posts for userId
    const getPosts = async () => {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?userId=${params.id}`
        );

        let posts = res.data.slice(0, 3);
        setPosts(posts);
      } catch (error) {
        console.log("Error in getting possts from id: ", error);
      }
    };
    getPosts();
  }, []);

  return (
    <>
      <div className="header-section">
        <div className="left">
          <button onClick={() => navigate("/")}>
            <span>&larr;</span>
            Back
          </button>
        </div>

        <CountryDropdown />
      </div>
      <div className="user-profile">
        <h1>Profile Page</h1>

        {/* profile information  */}
        {
          /* if the data is loading then show a spinner else display the info */
          !loading ? (
            <div className="card">
              <div className="top-left">
                <h2>{user?.name}</h2>
                <p>{user?.username}</p>
                {user?.company && <p>{user?.company.catchPhrase}</p>}
              </div>
              <div className="top-right">
                <h4>{`${user?.address?.street},${user?.address?.city}`}</h4>
                <p>{user?.email}</p>
                <p>{user?.phone}</p>
              </div>
            </div>
          ) : (
            <h2 style={{ textAlign: "center" }}>Fetching User details...</h2>
          )
        }

        {/* post cards */}
        <h2 id="post-heading">Posts</h2>
        <div id="post-container">
          {posts.map((post) => (
            <div className="post" key={post.id}>
              <PostCard title={post.title} content={post.body} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserProfile;
