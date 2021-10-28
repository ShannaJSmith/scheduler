import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewerList.scss";

export default function InterviewerList(props) {
  const { interviewers, onChange, value } = props;
  const parsedInterviewers = interviewers.map((i) => {
    return (
    <InterviewerListItem key={i.id} {...i} 
      setInterviewer={() => onChange(i.id)} 
      interviewer={value} 
      selected={i.id === value}
    />
  );
});
   
  return (
  <section className="interviewers">
    <h4 className="interviewers__header text--light">Interviewer</h4>
    <ul className="interviewers__list">{parsedInterviewers}</ul>
  </section>
  );
}

