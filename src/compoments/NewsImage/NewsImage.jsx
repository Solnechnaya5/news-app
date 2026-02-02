import './styles.css'

export const NewsImage = ({ image }) => {

    return (
        <div className='news-image__wrapper'>
            {image ? <img src={image} alt='news image' className='news-image' /> : null}
        </div>
    )

}