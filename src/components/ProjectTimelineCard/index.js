// Write your code here
import {AiFillClockCircle, AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {data} = props
  console.log(data, 'sreekanth')

  return (
    <div className="main-heading">
      <img src={data.imageUrl} alt="project" className="img" />
      <div className="heading-con">
        <h1 className="heading">{data.projectTitle}</h1>
        <div className="ai-con">
          <AiFillCalendar />
          <p className="description">{data.duration}</p>
        </div>
      </div>
      <p className="description one">{data.description}</p>
      <div className="bg1">
        <a href={data.projectUrl} className="visit">
          Visit
        </a>
      </div>
    </div>
  )
}

export default ProjectTimelineCard
