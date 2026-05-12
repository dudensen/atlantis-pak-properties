import { NavLink, Route, Routes } from "react-router";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import "./App.css";

function Header() {
  return (
    <>
      <header className="site-header">
        <h1>Atlantis Pak Properties</h1>
      </header>

      <nav className="main-nav">
        <div className="nav-inner">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Αρχική
          </NavLink>

          <NavLink
            to="/privacy-policy"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Πολιτική Προστασίας Προσωπικών Δεδομένων
          </NavLink>

          <a href="#" className="nav-link">
            Επικοινωνία
          </a>
        </div>
      </nav>
    </>
  );
}

function HomePage() {
  return (
    <main className="content">
      <img
        src="/images/properties-building.jpg"
        alt="Atlantis Pak Properties"
        className="hero-image"
      />
    </main>
  );
}

function App() {
  return (
    <div className="page">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </div>
  );
}

export default App;