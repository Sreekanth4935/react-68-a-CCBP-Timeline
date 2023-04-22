// Write your code here
import {Chrono} from 'react-chrono'
// import {AiFillClockCircle, AiFillCalendar} from 'react-icons/ai'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  //   const data = timelineItemsList[0]
  const second = timelineItemsList[1]

  return (
    <div className="chrono-container">
      <h1 className="main-heading">MY JOURNEY OF CCBP 4.0</h1>
      <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList} scrollable>
        {timelineItemsList.map(data =>
          data.categoryId === 'COURSE' ? (
            <CourseTimelineCard data={data} />
          ) : (
            <ProjectTimelineCard data={data} />
          ),
        )}
      </Chrono>
    </div>
  )
}

export default TimelineView
