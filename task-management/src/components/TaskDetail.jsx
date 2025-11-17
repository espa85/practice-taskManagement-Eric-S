import { Link, useParams } from "react-router-dom";
import tasks from "../data/tasks";

export default function TaskDetail() {
    const { id } = useParams();

    const idNum = Number(id);
    const isValidId = Number.isInteger(idNum) && idNum > 0;
    const task = isValidId ? tasks.find( (task) => task.id === idNum) : null;

    if (!isValidId) {
        return (
            <ErrorCard title="Invalid task id">
                The id "{id}" is not a valid positive integer.
            </ErrorCard>
        );
    }

    if (!task) {
        return (
            <ErrorCard title="Task not found">
                No task exists with id {idNum}.
            </ErrorCard>
        );
    }

    return (
        <article className="panel">
            <h2 className="panel-title">Task #{task.id}</h2>
            <div className="detail">
                <h3>{task.title}</h3>
                <p className="detail-meta">Status: <strong>{task.status}</strong></p>
                <p className="detail-body">{task.description}</p>
            </div>
            <div className="actions">
                <Link className="btn" to="/">Back to list</Link>
            </div>
        </article>
    );
}

function ErrorCard({ title, children }) {
    return (
        <div className="panel-error">
            <h2 className="panel-title">{title}</h2>
            <p>{children}</p>
            <div className="action">
                <Link className="btn" to="/">Back to list</Link>
            </div>
        </div>
    );
}