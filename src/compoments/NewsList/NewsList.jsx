import { ArticleItem } from '../ArticleItem/ArticleItem'
import './styles.css'


export const NewsList = ({ newslist }) => {


    return (
        <div className='articles-wrapper'>
            {newslist.map(item => {
                return (
                    <ArticleItem item={item} key={item.id}/>
                )
            })}
        </div>
    )
}