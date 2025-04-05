import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import PublicLayout from "./Layouts/public-layout"
import AuthenticationLayout from "./Layouts/auth-layout"

import HomePage from "./routes/home"
import SignInPage from "./routes/sign-in"
import SignUpPage from "./routes/sign-up"

import ProtectedRoutes from "./Layouts/protected-routes"
import MainLayout from "./Layouts/main-layout"

const App = () => {
  return (
    <Router>
      <Routes>
        {/* public routes */}
        <Route element={<PublicLayout />}><Route index element={<HomePage />} />
        </Route>

        {/* authentication layout */}
        <Route element={<AuthenticationLayout />}><Route path="/signin" element={<SignInPage />} />
          <Route path="/signup/*" element={<SignUpPage />} />
        </Route>

        {/* protected routes */}
        <Route element={<ProtectedRoutes><MainLayout /></ProtectedRoutes>}>
          {/* add all the protect routes */}
        </Route>

      </Routes>
    </Router>
  )
}

export default App

