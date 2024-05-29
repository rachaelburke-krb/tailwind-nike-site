import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  HomePage  from "./pages/HomePage"
import  ShoeDetailPage from "./pages/ShoeDetailPage";


const AppRoutes = () => {
  return (
   <Router>
        <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="shoe" element={<ShoeDetailPage />} />
        </Routes>
   </Router>
  )
}

export default AppRoutes
