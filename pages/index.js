import React from 'react';
import Articles from '../components/Articles';
import Layout from '../components/layout';
import { fetchAPI } from '../lib/api';

//try useEffect;
export async function getStaticProps() {
  const [articles, categories, homepage] = await Promise.all([
    fetchAPI("/articles?status=published"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ]);
  return {
    props: {articles, categories, homepage},
    revalidate: 1,
  };
}


const Home = ( { articles, categories, homepage }) => {

  return (
   
    <Layout  categories={categories} articles={articles}>
      <div className="content">
        <h2 className="title">{homepage.hero.title}</h2>
        <Articles articles={articles} />
      </div>

    </Layout>
  );
}


export default Home;
