import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Orders from "./components/Orders/Orders";

function App() {
  return (
    <div className="dashboard-container">
      <Navbar />
      <Orders />
      {/* <div className="section-2"></div> */}
      <div className="section-3"></div>
    </div>
  );
}

export default App;
