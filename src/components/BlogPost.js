import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../Firebase'; // Assuming db is imported from Firebase

const BlogPost = () => {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        // Get reference to the blog post document
        const postRef = doc(db, 'blogs', id);
        
        // Fetch the blog post document
        const docSnap = await getDoc(postRef);

        // Check if the post exists
        if (!docSnap.exists()) {
          setLoading(false);
          return;
        }

        // Extract post data from document snapshot
        const postData = docSnap.data();
        
        // Set post data and loading state
        setPost(postData);
        setLoading(false);
      } catch (error) {
        // Log any errors that occur during fetching
        console.error('Error fetching blog post:', error);
        
        // Set loading state to false
        setLoading(false);
      }
    };

    // Fetch blog post data when component mounts or id changes
    fetchBlogPost();
  }, [id]);

  return (
    <div className="container mx-auto px-4 py-8">
      {loading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : post ? (
        <div>
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <img src={post.image} alt={post.title} className="w-full h-auto object-cover mb-4 rounded-lg" style={{ maxHeight: '400px' }} />
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
          <p className="text-gray-500 mt-4">Published on: {post.createdAt.toDate().toLocaleString()}</p>
        </div>
      ) : (
        <p className="text-center text-gray-600">Post not found.</p>
      )}
    </div>
  );
};

export default BlogPost;
