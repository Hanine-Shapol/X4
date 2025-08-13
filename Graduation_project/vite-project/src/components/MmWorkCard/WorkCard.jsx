import './WorkCard.css'

const WorkCard = ({ title, image, summary, site, description }) => {
    return (
        <div className='work-card'>
            <h3>{title}</h3>
            <img className='project-photo' src={image} alt="" />
            <span>{summary}</span>
            <div>
                <a href={site}>{site}</a>
                <div className='slanted-arrow'><img src="/assets/Slanted-arrow.svg" alt="" /></div>
            </div>
            <p>{description}</p>
        </div>
    )
}

export default WorkCard