import axios from "axios";
import { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

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

  //Pull task details
  useEffect(() => {
    const fetchTaskData = () => {
      axios
        .get<TaskData[]>(
          "http://localhost:4000/task/classid/6825518793679ec91179b657"
        )
        .then((taskResponse) => {
          setTasks(taskResponse.data);
          console.log(
            "fix to render all tasks to complete for graphs, not one class"
          );
        })
        .catch((err) => {
          console.error("Error connection to server 4000", err);
        });
    };
    fetchTaskData();
  }, []);

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
          "rgb(173, 216, 230)", // lightblue
          "rgb(100, 149, 237)", // cornflowerblue
          "rgb(25, 25, 112)", // midnightblue
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
        {/* Small card user details*/}
        <div
          className="
              col-span-1 row-span-1 rounded-2xl py-5 px-5
              bg-[linear-gradient(90deg,_#00008B_0%,_#000080_84%)]
            "
        >
          <h1 className="text-white font-bold">User Details</h1>
          <div className="border-blue-700 border-2 bg-[linear-gradient(90deg,_rgba(34,34,198,0.9)_0%,_rgba(19,19,153,0.9)_100%)] mt-3 px-4 py-2 rounded-md">
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

        {/* Large card top row class details*/}
        <div
          className="
              col-span-2 row-span-1 rounded-2xl py-5 px-5
              bg-[linear-gradient(90deg,_#00008B_0%,_#000080_84%)]
            "
        >
          <h1 className="text-white font-bold">Upcoming Classes</h1>
          <div className="flex flex-wrap gap-3">

          {classes.map((data) => {
            const finalName = (data.name.length <= 24) ? data.name : `${data.name.slice(0, 24)}...`;

            return (
            <div className="border-blue-700 border-2 bg-[linear-gradient(90deg,_rgba(34,34,198,0.9)_0%,_rgba(19,19,153,0.9)_100%)] mt-3 px-4 py-2 rounded-md">
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
          )})}
          </div>
        </div>

        {/* Large card second row tasks*/}
        <div
          className="
              col-span-2 row-span-2 rounded-2xl
              bg-[linear-gradient(90deg,_#00008B_0%,_#000080_84%)]
            "
        ></div>

        {/* small card friends */}
        <div
          className="
            col-span-1 row-span-2 rounded-2xl
            bg-[linear-gradient(90deg,_#00008B_0%,_#000080_84%)]
            p-4
            flex flex-col
          "
        >
          <h1 className="text-white font-bold text-lg mb-3">Tasks</h1>
          <div
            className="
              flex
              bg-[linear-gradient(90deg,_rgba(34,34,198,0.9)_0%,_rgba(19,19,153,0.9)_100%)]
              border border-blue-700 rounded-2xl
              p-4
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

            <div className="ml-6 flex-1">
              <p className="text-blue-200 text-base leading-snug">
                Pending: <strong>{pendingCount}</strong>
                <br />
                Completed: <strong>{completedCount}</strong>
                <br />
                Overdue: <strong>{overdueCount}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
