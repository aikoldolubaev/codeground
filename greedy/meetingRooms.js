let obj1 = {
	start: 1,
	end: 2,
}

let obj2 = {
	start: 3,
	end: 5,
}

const meetingRooms = (meeting, anotherMeeting) => {
	if (meeting.end <= anotherMeeting.start) {
		return 'No overlap'
	}

	return 'Overlap'
}
console.log(meetingRooms(obj1, obj2)) //'No overlap

/*

  |---------------------|---------------|-------------|
  1                     2               3             4
  obj1.start        obj1.end         obj2.start.  obj2.end
  
  
  */
