import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Insta from '../components/insta';
import usePosts from '../hooks/use-posts';
import PostPreview from '../components/postPreview';

export default () => {
  const posts = usePosts();
  return (
    <>
      <Hero />
      <Layout>
        <h2>Read my Blog</h2>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
        <Insta />
      </Layout>
    </>
  );
};
