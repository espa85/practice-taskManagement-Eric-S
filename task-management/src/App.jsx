import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TaskList from "./components/TaskList";
import TaskDetail from "./components/TaskDetail";
import "./app.css"

export default function App() {
  return (
    <div className="app">
        <h1>Task Viewer</h1>
        <h4>Team: Edward M, Godfred F, Luke F, Eric S</h4>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/task/:id" element={<TaskDetail />} />
          {/* catch-all for unknown routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
  );
}

function NotFound() {
  return (
        <div className="panel-error">
            <h2 className="panel-title">Page not found</h2>
            <p>The page you're looking for does not exist.</p>
            <div className="action">
                <Link className="btn" to="/">Back to list</Link>
            </div>
        </div>
    );
}


