import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import Orders from "./components/Orders/Orders";
import UsersList from "./components/UsersList/UsersList";

function App() {
  return (
    <div className="dashboard-global-container">
      <Navbar />
      <Orders />
      {/* <div className="section-2"></div> */}
      <section className="right-section">
        <UsersList />
        <Dashboard />
      </section>
    </div>
  );
}

export default App;
