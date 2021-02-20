import React from 'react';
import Link from 'next/link';
import Image from '../image';
import styles from './Card.module.css';

const Card = ( { article }) => {


	return (
		<Link as={`/article/${article.slug}`}  href="/article/[id]">
			<a className={styles.post_link}>
				<div className={styles.card_container} >
					<div className={styles.card_img}>
						<Image image={article.image} />
					</div>
					<p className={styles.article_title}> 
						<span className={styles.article_category_name}>
							{article.category.name}
						</span>
					   {article.title} 
					</p>
				</div>
			</a>
		</Link>
	)
}

export default Card

