import { Suspense, useState, useEffect } from 'react'
import { Await, Link } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div className='blog'>
      <h1>Blog</h1>
      <ul>
        <Suspense fallback={<BounceLoader />}>
          <Await resolve={posts}>
            {posts.map(post => (
              <li key={post.id}>
                <Link to={`/posts/${post.id}`}>
                  {post.title}
                </Link>
              </li>
            ))}
          </Await>
        </Suspense>
      </ul>
    </div>
  )
}

export default Blog