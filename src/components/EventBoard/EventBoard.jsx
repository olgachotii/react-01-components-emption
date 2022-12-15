import { Board } from "./EventBoard.styled";
import EventCard from "../EventCard/EventCard";

export default function EventBoard({ events }) {
  return (
    <Board>
      {events.map((event) => (
        <EventCard
          key={event.name}
          name={event.name}
          location={event.location}
          speaker={event.speaker}
          type={event.type}
          time={event.time}
        />
      ))}
    </Board>
  );
}
