import { NavLink } from "react-router-dom"
import { menuItems } from "../../constant/menus/main"

export function MobileNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-t border-gray-200/20 dark:border-gray-800/20">
      <div className="flex justify-around items-center px-4 py-3 pb-safe">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <NavLink
              key={item.id}
              to={item.path}
              className="relative group"
            >
              {({ isActive }) => (
                <div className="flex flex-col items-center space-y-1">
                  {/* Icon with Morphing Background */}
                  <div className={`relative p-3 rounded-2xl transition-all duration-500 ${isActive
                    ? "bg-blue-500 shadow-lg shadow-blue-500/30 scale-110"
                    : "group-active:scale-95 group-hover:bg-gray-100 dark:group-hover:bg-gray-800"
                    }`}>
                    <Icon className={`w-5 h-5 transition-colors duration-300 ${isActive ? "text-white" : "text-gray-600 dark:text-gray-400"
                      }`} />
                  </div>

                  {/* Dynamic Label */}
                  <span className={`text-xs transition-all duration-300 ${isActive
                    ? "text-blue-600 dark:text-blue-400 font-bold"
                    : "text-gray-500 dark:text-gray-500"
                    } ${isActive ? "opacity-100 transform translate-y-0" : "opacity-70"}`}>
                    {item.label}
                  </span>

                  {/* Active Indicator Line */}
                  <div className={`h-0.5 bg-blue-500 rounded-full transition-all duration-300 ${isActive ? "w-6" : "w-0"
                    }`} />
                </div>
              )}
            </NavLink>
          )
        })}
      </div>
    </div>
  )
}