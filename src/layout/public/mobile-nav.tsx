import { NavLink } from "react-router-dom"
import { menuItems } from "../../constant/menus/main"

export function MobileNav() {

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="grid grid-cols-6 gap-1 p-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center h-auto justify-center py-2 px-1 rounded transition-all ${isActive
                  ? "bg-blue-500 text-white hover:bg-blue-600 "
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon className={`w-5 h-5 mb-1 ${isActive && "w-6 h-6 mb-0"}`} />
                  {
                    !isActive && <span className={"text-xs"}>
                      {item.label}
                    </span>
                  }
                </>
              )}
            </NavLink>
          )
        })}
      </div>
    </div>
  )
}
