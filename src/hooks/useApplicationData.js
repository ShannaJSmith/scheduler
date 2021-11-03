import axios from "axios";
import React, { useState, useEffect } from "react";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
    }); 

    useEffect(() => {
      Promise.all([
        axios.get('api/days'),
        axios.get('api/appointments'),
        axios.get('api/interviewers')
      ]).then((all) => {
        console.log("days:", all[0].data)
        console.log("appointments:", all[1].data)
        console.log("interviewers:", all[2].data)
        setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
      })
    }, []);

  const setDay = day => setState({ ...state, day });

  const updateSpots = (id, state, appointments) => {
    const day = state.days.find(day => day.name === state.day)
    let spots = 0;
    for (const id of day.appointments) {
      const appointment = state.appointments[id]
      if (!appointment.interview) {
      spots++
    }
  }
    day.spots = spots
    const newDay = {...day, spots}
    return state.days.map(day => day.name === state.day ? newDay : day)
  };

  const bookInterview = (id, interview) => {
    const something = state.appointments[id].interview !== null;
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
const days = updateSpots(id, state, something ? 0 : -1)
    return axios
      .put(`http://localhost:8001/api/appointments/${id}`, {interview})
      .then((res) => {
      setState({
        ...state,
        appointments, 
        days
        });
    })
  }

  const cancelInterview = (id) => {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    const days = updateSpots(id, state, 1)
    return axios
      .delete(`http://localhost:8001/api/appointments/${id}`)
      .then((res) => {
        setState({
          ...state,
          appointments,
          days
        });
    })
  }

  return { state, setDay, bookInterview, cancelInterview };
}