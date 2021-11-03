import React from "react";
import "components/DayListItem.scss";
import classNames from "classnames";

export default function DayListItem(props) {
  const { name, spots, selected, setDay } = props;
  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": selected,
    "day-list__item--full": spots === 0
  });
  function formatSpots () {
    let availability = "";
    if (spots === 1) {
      availability = "1 spot remaining"
    }
    if (spots === 0) {
      availability = "no spots remaining"
    }
    if (spots > 1) {
      availability = `${spots} spots remaining`
  }
  return availability
}
const numberOfSpots = formatSpots();
  return (
    <li data-testid="day" className={dayClass} selected={selected} onClick={() => {setDay(name)}}>
      <h2 className="text--regular">{name}</h2> 
      <h3 className="text--light">{numberOfSpots}</h3>
    </li>
  );
}