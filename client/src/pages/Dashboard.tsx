import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Overview from "@/components/Overview";
import Tasks from "@/components/Tasks";
import Friends from "@/components/Friends";
import { useEffect, useState } from "react";
import axios from "axios";

const tabs = [{ label: "Overview" }, { label: "Tasks" }, { label: "Friends" }]; //Part of mininavbar

interface UserData {
  _id: string;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
}

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [userData, setUserData] = useState<UserData | null>(null);

  //Part of mininavbar
  function renderContent() {
    switch (activeTab) {
      case "Tasks":
        return <Tasks />;
      case "Friends":
        return <Friends />;
      default:
        /* First set of props are Userdetails
         * Second set of props are for friends
         * Third set of props are for classes
         * Forth set of props are for upcoming tasks
         */
        return (
          <Overview
            _id={userData ? userData._id : ""}
            userName={userData ? userData.userName : ""}
            email={userData ? userData.email : ""}
          />
        );
    }
  }

  //Pull user details
  useEffect(() => {
    const fetchUserData = () => {
      axios
        .get("http://localhost:3000/user/email/tejassraman@gmail.com")
        .then((userRes) => {
          setUserData(userRes.data);
          console.log("success, change to not use hardcoded email");
        })
        .catch((err) => {
          console.error("Error connection to server", err);
        });
    };
    fetchUserData();
  }, []);

  return (
    <div className="w-full min-h-screen bg-zinc-900 flex py-3 pl-3 overflow-hidden">
      <Sidebar />
      <main className="flex-1 ml-3 mr-3 bg-gray-950 rounded-2xl p-6 flex flex-col">
        <Header
          firstName={userData ? userData.firstName : ""}
          lastName={userData ? userData.lastName : ""}
        />

        {/* part of mininavbar */}
        <nav
          className="
            mb-6 inline-flex space-x-2 rounded-full p-1 w-max
            bg-[linear-gradient(to_right,#0D0C27_0%,#090979_100%)]
          "
        >
          {tabs.map(({ label }) => {
            const isActive = activeTab === label;
            return (
              <button
                key={label}
                onClick={() => setActiveTab(label)}
                className={`
                  px-4 py-1 rounded-full font-medium transition text-white
                  ${
                    isActive
                      ? "bg-[linear-gradient(to_right,#191970_0%,#3030D6_100%)]"
                      : "bg-transparent hover:bg-white/20"
                  }
                `}
              >
                {label}
              </button>
            );
          })}
        </nav>
        {/* put mininavbar as a component later */}

        {renderContent()}
      </main>
    </div>
  );
}
