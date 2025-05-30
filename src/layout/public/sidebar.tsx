import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { menuItems } from "../../constant/menus/main"
import { LogOut, Settings } from "lucide-react"
import { Button } from "../../components/ui/button"
import { Link } from "../../components/ui/link"
import { Link as RouterLink } from "react-router-dom"


export function Sidebar() {

  return (
    <div className="h-full w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">VIP</span>
          </div>
          <span className="text-xl font-bold text-gray-900 dark:text-white">CryptoCraft</span>
        </div>
      </div>

      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">John Doe</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Premium Member</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.id}
              asChild
              className={`w-full justify-start ${false
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
            >
              <RouterLink to={item.path} className="flex items-center">
                <Icon className="w-5 h-5 mr-3" />
                {item.label}
              </RouterLink>
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t border-gray-200 dark:border-gray-700 space-y-2">
        <Button variant="ghost" className="w-full justify-start text-gray-700 dark:text-gray-300">
          <Settings className="w-5 h-5 mr-3" />
          Settings
        </Button>
        <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
          <LogOut className="w-5 h-5 mr-3" />
          Logout
        </Button>
      </div>
    </div>
  )
}
