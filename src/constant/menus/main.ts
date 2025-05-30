import { Briefcase, LayoutDashboard, Newspaper, TrendingUp, User, Wallet } from "lucide-react"
import paths from "../path"

export const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, path: paths.PUBLIC.HOME },
    { id: "markets", label: "Markets", icon: TrendingUp, path: paths.PUBLIC.MARKETS },
    { id: "portfolio", label: "Portfolio", icon: Briefcase, path: paths.PUBLIC.PORTFOLIO },
    { id: "wallet", label: "Wallet", icon: Wallet, path: paths.PUBLIC.WALLET },
    { id: "news", label: "News", icon: Newspaper, path: paths.PUBLIC.NEWS },
    { id: "profile", label: "Profile", icon: User, path: paths.PUBLIC.PROFILE },
]