import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  const navItems = [
    {
      icon: "/sidebarLogos/stash--dashboard-duotone.svg",
      label: "Dashboard",
      link: "/dashboard",
    },
    {
      icon: "/sidebarLogos/solar--calendar-linear.svg",
      label: "Calendar",
      link: "/calendar",
    },
    {
      icon: "/sidebarLogos/fluent--class-24-regular.svg",
      label: "Class Manager",
      link: "/classManager",
    },
    {
      icon: "/sidebarLogos/arcticons--flashcards.svg",
      label: "FlashCards",
      link: "/flashCards",
    },
    {
      icon: "/sidebarLogos/grommet-icons--resources.svg",
      label: "Resources",
      link: "/resources",
    },
    {
      icon: "/sidebarLogos/mage--settings.svg",
      label: "Settings",
      link: "/settings",
    },
  ];

  const logoutHandler = () => {
   navigate("/login");
  }
  return (
    <>
      <aside className="relative w-57 bg-gray-950 rounded-2xl flex flex-col p-6">
        <div className="flex items-center mb-4">
          <img
            src="/LogoMaster.png"
            alt="TaskMasterAI Logo"
            className="h-8 w-auto flex-shrink-0"
          />
          <span className="ml-3 text-white text-xl font-bold whitespace-nowrap">
            TaskMasterAI
          </span>
        </div>
        <hr className="border-gray-700 mb-5" />
        <nav className="flex-1 space-y-4 mt-5">
          {navItems.map(({ icon, label, link }) => (
            <button
              key={label}
              onClick={() => navigate(link)}
              className="flex items-center space-x-3 text-white text-base hover:text-blue-400 transition-colors"
            >
              <img
                src={icon}
                alt={`${label} icon`}
                className="w-5 h-5 flex-shrink-0"
              />
              <span>{label}</span>
            </button>
          ))}
        </nav>
        <button
          className="mt-auto w-full py-2 rounded-full text-white font-medium hover:opacity-90 transition-opacity
             bg-[linear-gradient(to_right,#0D0C27_0%,#090979_100%)]"
             onClick={logoutHandler}
        >
          Logout
        </button>
      </aside>
    </>
  );
}
