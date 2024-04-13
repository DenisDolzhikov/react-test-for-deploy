import { Suspense, useEffect, useState } from 'react';
import { Await, useParams } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';

const Article = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data));
  });

  console.log(post);

  return (
    <div>
      <Suspense fallback={<BounceLoader />}>
        <Await resolve={post}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </Await>
      </Suspense>
    </div>
  )
}

export default Article