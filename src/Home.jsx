import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    return (
        <div className="container">
            <div>I am Home</div>
            <button onClick={() => navigate('/tasks')}>Go to tasks</button>
            <button>Go to create task</button>
        </div>
    )
}

export default Home;