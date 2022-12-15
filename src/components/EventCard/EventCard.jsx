import { Card, CardTitle, Info, Chip } from "./EventCard.styled";
import css from "./EventCard.module.css";

import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";

import { formatEventStart } from "../../utils";
import { formatEventDuration } from "../../utils";

export default function EventCard({ name, location, speaker, type, time }) {
  const formatStart = formatEventStart(time.start);
  const duration = formatEventDuration(time.start, time.end);

  return (
    <Card>
      <CardTitle>{name}</CardTitle>
      <Info className={css.info}>
        <FaMapMarkerAlt />
        {location}
      </Info>
      <Info className={css.info}>
        <FaUserAlt />
        {speaker}
      </Info>
      <Info className={css.info}>
        <FaCalendarAlt />
        {formatStart}
      </Info>
      <Info className={css.info}>
        <FaClock />
        {duration}
      </Info>
      <Chip eventType={type}>{type}</Chip>
    </Card>
  );
}

/* <span className={`${css.chip} ${css[type]}`}>{type}</span>; */
