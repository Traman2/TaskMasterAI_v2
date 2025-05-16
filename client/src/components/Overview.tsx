import axios from "axios";
import { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);


/*
 * TODO during summer for Dashboard Overview: 
 * - Replace activity task list with graph
 * - Fix color scheme
 * - Add Oauth and get rid of hardcoded email
 */


// Interfaces
interface UserData {
  _id: string;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
}

interface TaskData {
  _id: string;
  deadline: string;
  topic: string;
  title: string;
  status: "pending" | "completed" | "overdue";
  points: number | null;
  textbook: string | null;
  class: string; // classId
  className?: string; // Added by fetching logic
  classLocation?: string; // Added by fetching logic
}

interface ClassData {
  _id: string;
  name: string;
  timing: string;
  location: string;
}

export default function Overview() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [tasks, setTasks] = useState<TaskData[]>([]);
  const [classes, setClasses] = useState<ClassData[]>([]);

  //Pull user details
  useEffect(() => {
    const fetchUserData = () => {
      axios
        .get<UserData>("http://localhost:4000/user/email/tejassraman@gmail.com")
        .then((userRes) => {
          setUserData(userRes.data);
          console.log("success, change to not use hardcoded email");
        })
        .catch((err) => {
          console.error("Error connection to server 4000", err);
        });
    };
    fetchUserData();
  }, []);

  //Pull class details
  useEffect(() => {
    const fetchClassData = () => {
      axios
        .get<ClassData[]>(
          "http://localhost:4000/class/user/6823b140e1877e1c6d56ce8d"
        )
        .then((classRes) => {
          setClasses(classRes.data);
          console.log("success, change to not use hardcoded email");
        })
        .catch((err) => {
          console.error("Error connection to server 4000", err);
        });
    };
    fetchClassData();
  }, []);

  // Pull task details
  useEffect(() => {
    const fetchTaskData = () => {
      const requests = classes.map((cls) =>
        axios
          .get<TaskData[]>(`http://localhost:4000/task/classid/${cls._id}`)
          .then((res) => res.data)
      );

      Promise.all(requests)
        .then((resultsArrays) => {
          const allTasks = resultsArrays.flat();
          setTasks(allTasks);
          console.log("fetched & set all tasks for graphs");
        })
        .catch((err) => {
          console.error("Error connecting to server 4000", err);
        });
    };

    fetchTaskData();
  }, [classes]);

  //Counts for Doghnut chart
  const completedCount = tasks.filter((t) => t.status === "completed").length;
  const pendingCount = tasks.filter((t) => t.status === "pending").length;
  const overdueCount = tasks.filter((t) => t.status === "overdue").length;

  //Chart vars
  const data = {
    labels: ["Pending", "Completed", "Overdue"],
    datasets: [
      {
        label: "Tasks by Status",
        data: [pendingCount, completedCount, overdueCount],
        backgroundColor: [
        "rgba(43, 32, 252, 1)",
        "rgba(50, 205, 50, 0.6)",
        "rgba(220, 20, 60, 0.6)",
      ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    cutout: "60%",
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <>
      <div className="grid grid-cols-3 grid-rows-3 gap-3 flex-1">

        {/* Small card user details --------------------------------------------------------------------------------------*/}
        <div
          className="
              col-span-1 row-span-1 rounded-2xl py-5 px-5
              bg-[linear-gradient(90deg,_#00008B_0%,_#000080_84%)]
            "
        >
          <h1 className="text-white font-bold">User Details</h1>
          <div className="border-blue-700 border-2 bg-[linear-gradient(90deg,_#3C3CB5_0%,_#4444C8_100%)] mt-3 px-4 py-2 rounded-md">
            <p className="text-blue-300 font-bold">
              @{userData && userData.userName}
            </p>
            <p className="text-blue-300">
              <span className="font-bold">Email:</span>{" "}
              {userData && userData.email}
            </p>
            <p className="text-blue-300">
              <span className="font-bold">Unique ID:</span>{" "}
              {userData && userData._id}
            </p>
          </div>
        </div>

        {/* Large card top row class details ------------------------------------------------------------------------------------------*/}
        <div
          className="
              col-span-2 row-span-1 rounded-2xl py-5 px-5
              bg-[linear-gradient(90deg,_#00008B_0%,_#000080_84%)]
            "
        >
          <h1 className="text-white font-bold">Upcoming Classes</h1>
          <div className="flex flex-wrap gap-3">
            {classes.map((data) => {
              const finalName =
                data.name.length <= 24
                  ? data.name
                  : `${data.name.slice(0, 24)}...`;

              return (
                <div
                  key={data._id}
                  className="border-blue-700 border-2 bg-[linear-gradient(90deg,_#3C3CB5_0%,_#4444C8_100%)] mt-3 px-4 py-2 rounded-md"
                >
                  <p className="text-blue-300">
                    <span className="font-bold">Class:</span>{" "}
                    <span className="truncate">{finalName}</span>
                  </p>
                  <p className="text-blue-300">
                    <span className="font-bold">Timing:</span>{" "}
                    {data && data.timing}
                  </p>
                  <p className="text-blue-300">
                    <span className="font-bold">Location:</span>{" "}
                    {data && data.location}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Large card second row activity -----------------------------------------------------------------------------*/}
        <div
          className="
              col-span-2 row-span-2 rounded-2xl px-5 py-5
              bg-[linear-gradient(90deg,_#00008B_0%,_#000080_84%)]
            "
        >
          <h1 className="text-white font-bold">Activity</h1>
          <div className="flex flex-wrap gap-x-2">
            {tasks.slice(0, 6).map((data) => {
              const date = new Date(data.deadline);
              const formattedDate = date.toLocaleString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
              });

              const finalName =
                data.title.length <= 24
                  ? data.title
                  : `${data.title.slice(0, 24)}...`;

              return (
                <div
                  key={data._id}
                  className="border-blue-700 border-2 bg-[linear-gradient(90deg,_#3C3CB5_0%,_#4444C8_100%)] mt-3 px-4 py-2 rounded-md"
                >
                  <p className="text-blue-300">
                    <span className="font-bold">Title:</span>
                    {" "} {finalName}
                  </p>
                  <p className="text-blue-300">
                    <span className="font-bold">Due Date:</span>
                    {" "} {formattedDate}
                  </p>
                  <p className="text-blue-300">
                    <span className="font-bold">Points:</span>
                    {" "} {data && data.points}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* small card status ---------------------------------------------------------------------------------------------------*/}
        <div
          className="
            col-span-1 row-span-2 rounded-2xl
            bg-[linear-gradient(90deg,_#00008B_0%,_#000080_84%)]
            p-4
            flex flex-col
          "
        >
          <h1 className="text-white font-bold text-lg mb-3">Status</h1>
          <div
            className="
              flex
              bg-[linear-gradient(90deg,_#3C3CB5_0%,_#4444C8_100%)]
              border border-blue-700 rounded-2xl
              px-4
              py-2
              items-center
              flex-row
              flex-1
            "
          >
            <div className="flex-shrink-0">
              <Doughnut
                data={data}
                options={options}
                width={180}
                height={170}
              />
            </div>

            <div className="ml-6 flex-1 ">
              <p className="text-blue-200 text-base leading-snug border-blue-700 border-2 p-2 rounded-2xl bg-[rgba(37,33,96,0.42)]">
                <span className="text-blue-300 font-bold">Pending: </span> {pendingCount}
                <br />
                <span className="text-blue-300 font-bold">Completed: </span> {completedCount}
                <br />
                <span className="text-blue-300 font-bold">Overdue: </span> {overdueCount}
              </p>
            </div>
            
          </div>
          <div className="mt-5 bg-[linear-gradient(90deg,_#3C3CB5_0%,_#4444C8_100%)]
              border border-blue-700 rounded-2xl p-3">
              <p className="text-white"> Computer Science 2 currently has 5 assignments</p>
            </div>
        </div>
      </div>
    </>
  );
}
