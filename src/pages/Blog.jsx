import React, { useEffect, useState } from "react";
import { ListGroup, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => {
        setPosts(res);
        setLoading(true);
      });
  }, []);
  return (
    <div>
      <h1>Blog</h1>
      {loading ? (
        <ListGroup>
          {posts.map((data) => (
            <ListGroup.Item key={data.id}>
              <Link to={`${data.id}`}>{data.title} </Link>
            </ListGroup.Item>
          ))}
        </ListGroup>
      ) : (
        <Spinner animation="border" />
      )}
    </div>
  );
};

export default Blog;
