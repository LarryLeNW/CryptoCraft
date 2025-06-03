import { BrowserRouter, Route, Routes } from "react-router-dom";
import paths from "./constant/path";
import { MobileNav } from "./layout/public/mobile-nav";
import { Sidebar } from "./layout/public/sidebar";
import { Dashboard } from "./pages/public/Dashboard";
import Markets from "./pages/public/Markets";
import News from "./pages/public/News";
import Portfolio from "./pages/public/Portfolio";
import Profile from "./pages/public/Profile";
import Wallet from "./pages/public/Wallet";

function App() {
    return (
        <BrowserRouter>
            <div className="flex h-screen border ">
                <div className="hidden md:block">
                    <Sidebar />
                </div>
                <div className="flex-1 flex flex-col overflow-hidden">
                    <main className="flex-1 overflow-y-auto pb-16 lg:pb-0">
                        <Routes>
                            <Route
                                path={paths.PUBLIC.HOME}
                                element={<Dashboard />}
                            />
                            <Route
                                path={paths.PUBLIC.MARKETS}
                                element={<Markets />}
                            />
                            <Route
                                path={paths.PUBLIC.NEWS}
                                element={<News />}
                            />
                            <Route
                                path={paths.PUBLIC.PORTFOLIO}
                                element={<Portfolio />}
                            />
                            <Route
                                path={paths.PUBLIC.WALLET}
                                element={<Wallet />}
                            />
                            <Route
                                path={paths.PUBLIC.PROFILE}
                                element={<Profile />}
                            />
                        </Routes>
                    </main>

                    <div className="lg:hidden">
                        <MobileNav />
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
