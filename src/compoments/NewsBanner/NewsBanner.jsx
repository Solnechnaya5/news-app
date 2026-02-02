
import { formatTimeAgo } from '../../helpers/formatTIme'
import { NewsImage } from '../NewsImage/NewsImage'

import './styles.css'


export const NewsBanner = ({item})=>{


    return(
      <div className='banner'>
       <NewsImage image={item.image}/>
        <h3 className='title-h3 banner-title'>{item.title}</h3>
        <p className='banner-details'><span>Опубліковано: {formatTimeAgo(item.publishedAt)}</span> 
        <span className='article-source'>Джерело: {item.source.name}</span></p>
      </div>
    )
}