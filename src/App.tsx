import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes/Routes";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Router basename="/MyPortfolio/">
      <Routes>
        <Route path={routes.home} element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
