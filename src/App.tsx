import { FunctionComponent } from "react";
import "./App.css";
import SearchBar from "./SearchBar";

const App: FunctionComponent = () => {
  return (
    <>
      <div className="navbar">
        <div className="left-section">
          <div className="logo-container">
            <img className="logo" src="/src/assets/logo.png" alt="Logo" />
            <span className="search-text">Search Results</span>
          </div>
        </div>
        <div className="middle-section">
          <div className="menu">
            <span className="menu-item">Home</span>
            <span className="menu-item">Find Universities</span>
            <span className="menu-item">About Us</span>
            <span className="menu-item">Contact Us</span>
            <span className="menu-item">Videos</span>
            <span className="menu-item">Blogs</span>
          </div>
        </div>
        <div className="right-section">
          <div className="button-container">
            <div className="login">Login</div>
            <div className="register">Register</div>
            <img className="call-icon" src="/src/assets/phone.png" alt="Call" />
          </div>
        </div>
      </div>
      <SearchBar />
    </>
  );
};

export default App;
