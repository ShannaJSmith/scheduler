import React from "react"; //optional
import "components/Appointment/styles.scss";
import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";
import Form from "./Form";
import useVisualMode from "hooks/useVisualMode";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";

export default function Appointment (props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
 
  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />
      )} 
      {mode === CREATE && (<Form interviewers={[]} onCancel={back}/>)}   
    </article>
  );
}

// CODE BEFORE useVisualMode:
//return (
//   <article className="appointment">
//     <Header time={props.time} />
//     {props.interview ? <Show student={props.interview.student} interviewer={props.interview.interviewer.name} /> : <Empty />}
//   </article>
// );