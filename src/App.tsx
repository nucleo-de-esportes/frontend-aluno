import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import { AuthProvider } from "./components/AuthProvider";
import { AlertProvider } from "./context/AlertContext";
import { AlertContainer } from "./components/AlertContainer";
import UserRegister from "./pages/UserRegister";
import UserLogin from "./pages/UserLogin";
import ClassView from "./pages/ClassView";
import ClassEnrollmentForm from './pages/ClassEnrollmentForm'
import HomePage from './pages/HomePage'
import AvisosPage from "./pages/AvisosPage";

function App() {
  return (
    <AuthProvider>
      <AlertProvider>
        <Router basename="/aluno">
          <Routes>
            <Route
              path="/"
              element={
                <PublicRoute>
                  <UserLogin />
                </PublicRoute>
              }
            />
            <Route
              path="/cadastro/turma"
              element={
                <PrivateRoute
                  allowedTypes={["aluno"]}
                  elementByType={{
                    aluno: <ClassEnrollmentForm />,
                  }}
                />
              }
            />

            <Route
              path="/home"
              element={
                <PrivateRoute
                  allowedTypes={["aluno"]}
                  elementByType={{
                    aluno: <HomePage/>
                  }}
                />
              }
            />
            
            <Route
              path="/turmas"
              element={
                <PrivateRoute
                  allowedTypes={["aluno"]}
                  elementByType={{
                    aluno: <ClassView />,
                  }}
                />
              }
            />
            <Route
              path="/avisos"
              element={
                <PrivateRoute
                  allowedTypes={["aluno"]}
                  elementByType={{
                    aluno: <AvisosPage />,
                  }}
                />
              }
            />
            <Route
              path="/user/cadastro"
              element={
                <PublicRoute>
                  <UserRegister />
                </PublicRoute>
              }
            />
          </Routes>
          <AlertContainer />
        </Router>
      </AlertProvider>
    </AuthProvider>
  );
}

export default App;