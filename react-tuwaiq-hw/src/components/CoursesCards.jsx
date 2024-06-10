import React from 'react'
import Card from './Card'
function CoursesCards() {
  return (
    <div className='mx-auto mt-5 mb-5' style={{ backgroundColor: "#F5F6FA", display: 'flex', flexWrap: 'wrap', width: '100%'}}>
<Card
eventType = 'برنامج'
eventTitle = 'فعالية WWDC24 Watch Party'
eventLocation = 'الرياض'
duration = ' يوم واحد'
eventDuration = '08:00 م - 11:00 م'
detailsBtnText = 'التفاصيل'
isExpired = {false}
/>
<Card
eventType = 'لقاء'
eventTitle = 'فعالية WWDC24 Watch Party'
eventLocation = 'الرياض'
duration = ' يوم واحد'
eventDuration = '08:00 م - 11:00 م'
detailsBtnText = 'التفاصيل'
isExpired = {false}
/>
<Card
eventType = 'معسكر'
eventTitle = 'فعالية WWDC24 Watch Party'
eventLocation = 'الرياض'
duration = ' يوم واحد'
eventDuration = '08:00 م - 11:00 م'
detailsBtnText = 'التفاصيل'
isExpired = {false}
/>
<Card
eventType = 'معسكر'
eventTitle = 'فعالية WWDC24 Watch Party'
eventLocation = 'الرياض'
duration = ' يوم واحد'
eventDuration = '08:00 م - 11:00 م'
detailsBtnText = 'التفاصيل'
isExpired = {true}
/>
<Card
eventType = 'برنامج'
eventTitle = 'فعالية WWDC24 Watch Party'
eventLocation = 'الرياض'
duration = ' يوم واحد'
eventDuration = '08:00 م - 11:00 م'
detailsBtnText = 'التفاصيل'
isExpired = {true}
/>
<Card
eventType = 'لقاء'
eventTitle = 'فعالية WWDC24 Watch Party'
eventLocation = 'الرياض'
duration = ' يوم واحد'
eventDuration = '08:00 م - 11:00 م'
detailsBtnText = 'التفاصيل'
isExpired = {true}
/>
</div>
)
}

export default CoursesCards