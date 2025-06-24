import { MobileNav } from "@/layout/member/mobile-nav";
import { Sidebar } from "@/layout/member/sidebar";
import { Outlet } from "react-router-dom";

const MemberLayout = () => {
    return (
        <div className="flex h-screen border font-montserrat transition-colors duration-1000">
            <div className="hidden md:block">
                <Sidebar />
            </div>
            <div className="flex-1 flex flex-col overflow-hidden">
                <main className="flex-1 overflow-y-auto pb-16 lg:pb-0">
                    <Outlet />
                </main>
                <div className="lg:hidden">
                    <MobileNav />
                </div>
            </div>
        </div>
    );
};

export default MemberLayout;
