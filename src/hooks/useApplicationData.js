import axios from "axios";
import { useState, useEffect } from "react";

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

  const updateSpots = (appointments) => {
    return state.days.map(day => {
      let spots = 0;
      for (let id of day.appointments) {
        if (!appointments[id].interview) {
          spots++;
        }
      }
      return {...day, spots};
    })
  };

  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    return axios
      .put(`api/appointments/${id}`, {interview})
      .then((res) => {
      setState({
        ...state,
        appointments,
        days: updateSpots(appointments)
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
    return axios
      .delete(`api/appointments/${id}`)
      .then((res) => {
        setState({
          ...state,
          appointments,
          days: updateSpots(appointments)
        });
    })
  }

  return { state, setDay, bookInterview, cancelInterview };
}