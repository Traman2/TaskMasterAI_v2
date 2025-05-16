import Sidebar from "@/components/Sidebar";
import axios from "axios";
import { useEffect, useState } from "react";

// Interfaces
interface UserData {
  _id: string;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
}

interface ClassData {
  _id: string;
  name: string;
  timing: string;
  location: string;
  gradingPolicy: string;
}

export default function ClassManager() {
  const [classes, setClasses] = useState<ClassData[]>([]);

  // Pull user and class details
  useEffect(() => {
    axios
      .get<UserData>("http://localhost:4000/user/email/tejassraman@gmail.com")
      .then((userRes) => {
        return axios.get<ClassData[]>(
          `http://localhost:4000/class/user/${userRes.data._id}`
        );
      })
      .then((classRes) => {
        setClasses(classRes.data);
      })
      .catch((err) => {
        console.error("Error fetching data from server", err);
      });
  }, []);

  return (
    <>
      <div className="w-full min-h-screen bg-zinc-900 flex py-3 pl-3 overflow-hidden">
        <Sidebar />
        <main className="flex-1 ml-3 mr-3 bg-[#060B3B] rounded-2xl p-6 flex flex-col">
          <h1 className="text-2xl mb-4 font-bold text-white">Class Manager</h1>
          <div
            className="flex flex-col items-center justify-start space-y-6 flex-1 rounded-2xl
                       bg-[linear-gradient(90deg,_#00008B_0%,_#000080_84%)] p-6 overflow-hidden"
          >
            {/* Upload box */}
            <div
              className="w-full max-w h-52 border-2 border-dashed rounded-2xl
                         flex flex-col items-center justify-center p-7"
            >
              <img
                src="/material-symbols--upload.svg"
                className="w-10 h-10 mb-2"
                alt="Upload Icon"
              />
              <p className="text-white text-2xl font-bold text-center">
                Drop your PDF here
                <br />
                <span className="text-sm text-gray-400">
                  Drag and drop or browse to upload. Max file size: 10MB
                </span>
              </p>
            </div>

            {/* Classes grid */}
            <div className="w-full flex-1 grid grid-cols-3 gap-4 overflow-y-auto scrollbar-cool">
              {classes.map((data) => (
                <div
                  key={data._id}
                  className="border-2 border-blue-700 rounded-md
                             bg-[linear-gradient(90deg,_#3C3CB5_0%,_#4444C8_100%)]
                             p-4"
                >
                  <p className="text-blue-300">
                    <span className="font-bold">Title:</span> {data.name}
                  </p>
                  <p className="text-blue-300">
                    <span className="font-bold">Timing:</span> {data.timing}
                  </p>
                  <p className="text-blue-300">
                    <span className="font-bold">Location:</span> {data.location}
                  </p>
                  <p className="text-blue-300">
                    <span className="font-bold">Grading Policy:</span> 

                    <p className="mt-2 border-2 border-blue-700 rounded-md
                             bg-[#1C2032]/50
                             p-2">{data.gradingPolicy}</p>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
