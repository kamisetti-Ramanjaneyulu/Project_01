import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Firebase';
import { Link } from 'react-router-dom';

const ArticlesPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const articlesCollection = collection(db, 'moreadd');
      const articlesSnapshot = await getDocs(articlesCollection);
      const articlesList = articlesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setArticles(articlesList);
    };

    fetchArticles();
  }, []);

  if (articles.length === 0) {
    return <div>Loading...</div>;
  }

  const mainArticle = articles[0];
  const otherArticles = articles.slice(1);

  return (
    <div className="articles-page p-4 md:p-8">
      <h1 className="text-4xl font-bold mb-8">Articles</h1>
      <div className="main-article mb-8 p-4 border rounded-lg shadow-md">
        <img src={mainArticle.image} alt={mainArticle.title} className="w-full h-64 object-cover rounded-lg mb-4" />
        <h2 className="text-3xl font-bold mb-2">{mainArticle.title}</h2>
        <p className="text-gray-500 mb-4">{mainArticle.description}</p>
        <Link to={`/articles/${mainArticle.id}`} className="text-blue-500 hover:underline">Read more</Link>
      </div>
      <div className="articles-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {otherArticles.map(article => (
          <div key={article.id} className="article-card p-4 border rounded-lg shadow-md">
            <img src={article.image} alt={article.title} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
            <p className="text-gray-500 mb-4">{article.description}</p>
            <Link to={`/articles/${article.id}`} className="text-blue-500 hover:underline">Read more</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticlesPage;
