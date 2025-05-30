import { menuItems } from "../../constant/menus/main"
import { Button } from "../../components/ui/button"

export function MobileNav() {

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="grid grid-cols-6 gap-1 p-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              className={`flex flex-col items-center py-2 px-1 h-auto ${false ? "text-blue-500" : "text-gray-500 dark:text-gray-400"
                }`}
            >
              <Icon className="w-5 h-5 mb-1" />
              <span className="text-xs">{item.label}</span>
            </Button>
          )
        })}
      </div>
    </div>
  )
}
