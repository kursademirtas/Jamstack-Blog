import React from 'react';
import Articles from '../components/Articles';
import Layout from '../components/layout';
import {fetchAPI} from '../lib/api';

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

const Home = ( {articles, categories, homepage}) => {
  return (
    <Layout  categories={categories}>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{homepage.hero.title}</h1>
          <Articles articles={articles} />
        </div>
      </div>
    </Layout>
  )
}


export default Home;
