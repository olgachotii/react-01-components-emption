// App.js
import { Container } from "./App.styled";
import EventBoard from "../EventBoard/EventBoard";
import PageTitle from "../PageTitle/PageTitle";

// import PaintingsList from "./components/PaintingsList";
// import Section from "./components/Section";
// import Profile from "../Profile/Profile";
// import Statistics from "./components/Statistics";
// import FriendList from "./components/FriendList";
// import TransactionHistory from "./components/TransactionHistory";

// import paintings from "./paintings.json";
// import user from "../../user.json";
// import data from "./data.json";
// import friends from "./friends.json";
// import transactions from "./transactions.json";
import events from "../../upcoming-events.json";

function App() {
  return (
    <div className="App">
      {/* <Section title="Тор неділі">
        <PaintingsList items={paintings} />
      </Section> */}
      {/* <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      /> */}
      {/* <Statistics title="Upload stats" stats={data} /> */}
      {/* <FriendList friends={friends} /> */}
      {/* <TransactionHistory items={transactions} /> */}
      <Container>
        <PageTitle text="24th Core Worlds Coalition Conference" />
        <EventBoard events={events} />
      </Container>
    </div>
  );
}

export default App;
