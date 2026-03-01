import AssignmentList from "../components/assignment/AssignmentList";

function Home() {
    return (
        <div className="home">
            <h1 className="home__title">SQL Assignments</h1>
            <AssignmentList />
        </div>
    );
}

export default Home;