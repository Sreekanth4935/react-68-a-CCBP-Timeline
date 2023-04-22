// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {data} = props
  console.log(data.tagsList, 'rajeshwari')

  return (
    <div className="timeline-container">
      <div className="heading-con">
        <h1 className="heading">{data.courseTitle}</h1>
        <h1>{data.name}</h1>
        <div className="ai-con">
          <AiFillClockCircle />
          <p className="description">{data.duration}</p>
        </div>
      </div>

      <p>{data.description} </p>

      <ul className="ul-container">
        {data.tagsList.map(eachTag => (
          <li className="li-element" key={eachTag.id}>
            {eachTag.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
