import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import AssignmentAttempt from "./pages/AssignmentAttempt";

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/assignment/:id"
                    element={<AssignmentAttempt />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;