import Articles from "../../components/Articles";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/layout";


export async function getStaticPaths() {
	const categories = await fetchAPI("/categories");
  
	return {
	  paths: categories.map((category) => ({
		params: {
		  slug: category.slug,
		},
	  })),
	  fallback: false,
	};
  }
  
  export async function getStaticProps({ params }) {
	const category = (await fetchAPI(`/categories?slug=${params.slug}`))[0];
	const categories = await fetchAPI("/categories");
  
	return {
	  props: { category, categories },
	  revalidate: 1,
	};
  }
  

const Category = ({ category, categories }) => {

  
	return (
	  <Layout categories={categories}>
		  <div className="content">
		  	<h2 className="title">{category.name}</h2>
			<Articles articles={category.articles} />
		  </div>

	  </Layout>
	);
  };

  export default Category;