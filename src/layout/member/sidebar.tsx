import { ThemeToggle } from "@/components/ThemeToggle"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { LogOut, Settings } from "lucide-react"
import { NavLink, useNavigate } from "react-router-dom"
import { Button } from "../../components/ui/button"
import { menuItems } from "../../constant/menus/main"
import { faker } from '@faker-js/faker';
import paths from "@/constant/path"
export function Sidebar() {
  const navigate = useNavigate()

  return (
    <div className="h-full w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col ">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between">
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate(paths.PUBLIC.PROFILE)}>
          <Avatar className="border rounded-full w-10 h-10 overflow-hidden">
            <AvatarImage src={faker.image.avatar()} />
          </Avatar>
          <div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">John Doe</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Premium Member</p>
          </div>
        </div>
        <ThemeToggle />
      </div>

      <nav className="flex-1 py-2 px-4 space-y-4">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center w-full justify-start p-2 rounded transition-colors ${isActive
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`
              }
            >
              <Icon className="w-5 h-5 mr-3" />
              {item.label}
            </NavLink>
          )
        })}
      </nav>

      <div className="p-4 border-t border-gray-200 dark:border-gray-700 space-y-2">
        <Button variant="ghost" className="w-full justify-start text-gray-700 dark:text-gray-300">
          <Settings className="w-5 h-5 mr-3" />
          Settings
        </Button>
        <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-700 hover:bg-red-50 flex items-center gap-4"
          onClick={() => navigate(paths.PUBLIC.LOGIN)}>
          <p>
            <LogOut className="w-5 h-5" />
          </p>
          <p>
            Logout
          </p>
        </Button>
      </div>
    </div>
  )
}
