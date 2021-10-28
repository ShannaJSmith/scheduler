import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const { days, value, onChange } = props;
  const parsedDays = days.map((d) => <DayListItem key={d.id} {...d} setDay={onChange} selected={d.name === value}/>)    
  
  return (
    <ul >
   {parsedDays} 
  </ul>
  );
}