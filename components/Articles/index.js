import React from 'react';
import Card from '../Card';
import styles from './Articles.module.css'


const Articles = ({ articles }) => {



	return (
		<>
			
			<div className={styles.posts__container}>
				{articles.map((article, i) =>  <Card article ={ article } key ={`article__left__${article.slug}`}  />)}
			</div>
		</>	
	)
}

export default Articles;