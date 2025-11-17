import { Link } from "react-router-dom";
import tasks from "../data/tasks";

export default function TaskList() {
    return (
        <section className="panel">
            <h2 className="panel-title">Tasks</h2>
            <ul className="task-list">
                {tasks.map((task)=> (
                    <li key={task.id} className="task-item">
                        <div>
                            <div className="task-title">{task.title}</div>
                            <div className="task-desc clamp-2">{task.description}</div>
                        </div>
                        <div>
                            <Link className="btn" to={`/task/${task.id}`}>View</Link>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}