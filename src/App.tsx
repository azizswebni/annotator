import "./App.css";
import Home from "./pages/home/home";
import Layout from "./pages/layout";
import Login from "./pages/login/login";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useAuthStore } from "./store/authStore";
import Contact from "./pages/contact/contact";
import SignUp from "./pages/signup/signup";

function App() {
  const { auth_token } = useAuthStore();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {auth_token == null && (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/Contact" element={<Contact />} />
            </>
          )}
        </Route>
        <Route
          path="*"
          element={
            <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-md text-center">
                <div className="mx-auto h-12 w-12 text-primary" />
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Oops, page not found!
                </h1>
                <p className="mt-4 text-muted-foreground">
                  The page you're looking for doesn't exist or has been moved.
                  Let's get you back on track.
                </p>
                <div className="mt-6">
                  <Link
                    to="/"
                    className="inline-flex items-center bg-red-700 rounded-xl text-white bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    Go to Homepage
                  </Link>
                </div>
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
