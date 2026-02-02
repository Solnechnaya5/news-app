
import { formatTimeAgo } from '../../helpers/formatTIme'
import { NewsImage } from '../NewsImage/NewsImage'

import './styles.css'


export const NewsBanner = ({item})=>{


    return(
      <div className='banner'>
       <NewsImage image={item.image}/>
        <h2 className='title-h2 banner-title'>{item.title}</h2>
        <p className='banner-details'><span>Опубліковано: {formatTimeAgo(item.publishedAt)}</span> 
        <span className='article-source'>Джерело: {item.source.name}</span></p>
      </div>
    )
}