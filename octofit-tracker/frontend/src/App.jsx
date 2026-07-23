import { Link, Route, Routes } from 'react-router-dom';

function Home() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4 p-md-5">
              <h1 className="display-6 fw-bold mb-3">OctoFit Tracker</h1>
              <p className="lead text-muted mb-4">
                A modern multi-tier fitness app for Mergington High School students.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <Link className="btn btn-primary" to="/">
                  Dashboard
                </Link>
                <Link className="btn btn-outline-secondary" to="/about">
                  About
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="container py-5">
      <div className="card shadow-sm border-0">
        <div className="card-body p-4">
          <h2 className="h4 mb-3">About the app</h2>
          <p className="text-muted mb-0">
            Students can log workouts, join teams, and stay motivated through friendly competition.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            OctoFit
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
