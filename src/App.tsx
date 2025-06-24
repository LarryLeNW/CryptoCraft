import { BrowserRouter, Route, Routes } from "react-router-dom";
import paths from "./constant/path";
import { Dashboard } from "./pages/member/Dashboard";
import Markets from "./pages/member/Markets";
import News from "./pages/member/News";
import Portfolio from "./pages/member/Portfolio";
import Profile from "./pages/member/Profile";
import Wallet from "./pages/member/Wallet";
import LoginPage from "@/pages/public/Login";
import MemberLayout from "@/layout/member";
import ForgotPasswordPage from "@/pages/public/ForgotPassword";
import RegisterPage from "@/pages/public/Register";
import { Toaster } from "@/components/ui/toaster";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={paths.PUBLIC.LOGIN} element={<LoginPage />} />
                <Route path={paths.PUBLIC.FORGOT_PASSWORD} element={<ForgotPasswordPage />} />
                <Route path={paths.PUBLIC.REGISTER} element={<RegisterPage />} />
                <Route element={<MemberLayout />}>
                    <Route path={paths.PUBLIC.HOME} element={<Dashboard />} />
                    <Route path={paths.PUBLIC.MARKETS} element={<Markets />} />
                    <Route path={paths.PUBLIC.NEWS} element={<News />} />
                    <Route path={paths.PUBLIC.PORTFOLIO} element={<Portfolio />} />
                    <Route path={paths.PUBLIC.WALLET} element={<Wallet />} />
                    <Route path={paths.PUBLIC.PROFILE} element={<Profile />} />
                </Route>
            </Routes>
            <Toaster />
        </BrowserRouter>
    );
}

export default App;
