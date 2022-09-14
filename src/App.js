import { Navigate, Route, Routes } from "react-router-dom";
import NonPrivateRoute from "./components/routes/NonPrivateRoutes";
import PrivateRoute from "./components/routes/PrivateRoutes";
import AdminRoute from "./components/routes/AdminRoute";
import HomePage from "./pages/home/home-page";
import LoginPage from "./pages/login/login-page";
import SignUpPage from "./pages/signup/signup-page";
import WelcomePage from "./pages/welcome-page.js/welcome-page";
import AdminDashboard from "./pages/dashboard/dashboard"
import { reactLocalStorage } from "reactjs-localstorage";

function App() {
  let user = reactLocalStorage.get("user");
  return (
    <Routes>
    <Route element={<AdminRoute />}>
        <Route path="/dashboard" element={<AdminDashboard />}></Route>
      </Route>

      <Route element={<PrivateRoute />}>
        <Route path="/app" element={<HomePage />}></Route>
      </Route>

      <Route
        path="/"
        element={
          <NonPrivateRoute>
            <WelcomePage />
          </NonPrivateRoute>
        }
      ></Route>

      <Route
        path="/login"
        element={
          <NonPrivateRoute>
            <LoginPage />
          </NonPrivateRoute>
        }
      ></Route>
      <Route
        path="/signup"
        element={
          <NonPrivateRoute>
            <SignUpPage />
          </NonPrivateRoute>
        }
      ></Route>
      <Route path="*" element={<Navigate to="/app" replace />} />
    </Routes>
  );
}

export default App;
