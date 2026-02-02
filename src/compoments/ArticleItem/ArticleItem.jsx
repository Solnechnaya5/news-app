import { formatTimeAgo } from '../../helpers/formatTIme'
import { NewsImage } from '../NewsImage/NewsImage'
import './styles.css'


export const ArticleItem = ({ item }) => {


    return (
       
            <article className='article' key={item.id}>
                <NewsImage image={item.image} />
                <h3 className='title-h3 article-title'>{item.title}</h3>
                <p className='article-details'><span>Опубліковано: {formatTimeAgo(item.publishedAt)}</span>
                    <span className='article-source'>Джерело: {item.source.name}</span></p>
                    <p className="article-descriptoin">{item.description.slice(0, 60)}...</p>
            </article>
     
    )
}