import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Orders from "./components/Orders/Orders";
import UsersList from "./components/UsersList/UsersList";

function App() {
  return (
    <div className="dashboard-container">
      <Navbar />
      <Orders />
      {/* <div className="section-2"></div> */}
      <section className="right-section">
        <UsersList />
      </section>
    </div>
  );
}

export default App;
