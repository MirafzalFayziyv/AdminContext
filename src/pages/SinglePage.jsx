import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { Spinner } from "react-bootstrap";

const SinglePage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false)

    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)
    }


  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setPost(res) 
        setLoading(true)
      });
  }, [id]);
  console.log(post);
  return (
    <div>
      {loading ? 
        <div>
            <button onClick={goBack}>Назад</button>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      : <Spinner animation="grow" />}
    </div>
  );
};

export default SinglePage;
