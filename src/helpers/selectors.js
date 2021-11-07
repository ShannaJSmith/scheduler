export function getAppointmentsForDay(state, day) {
  /* 1. We need to start by finding the object in our state.days array who's 
  name matches the provided day. With this information we can now access that specific days appointment array. */
  const filteredDays = state.days.filter(days => days.name === day);
  /* 3. We should also probably do a bit of validation. If there are no 
    appointments on the given day, our days data will be empty. According to our tests, in a case like this, 
    we should return an empty array. */
  if (!filteredDays.length) {
    return [];
  }
  /* 2. Once we have access to the appointment array for the given day, 
  we'll need to iterate through it, comparing where it's id matches the id of states.appointments and return that value. */
  const appointments = filteredDays[0].appointments
  const appointmentsForDay = appointments.map(id => state.appointments[id])
  return appointmentsForDay;
}

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  return {
    ...interview, interviewer: state.interviewers[interview.interviewer] 
  }
}

export function getInterviewersForDay(state, day) {
  const filteredDays = state.days.filter(days => days.name === day);
  if (!filteredDays.length) {
    return [];
  }
  const interviewers = filteredDays[0].interviewers
  const interviewersForDay = interviewers.map(id => state.interviewers[id])
  return interviewersForDay;
}