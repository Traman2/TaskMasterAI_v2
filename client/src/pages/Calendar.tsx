import Sidebar from "@/components/Sidebar";

export default function Calendar() {
  return (
    <>
        <main className="flex-1 ml-3 mr-3 bg-[#0B103E] rounded-2xl p-6 flex flex-col">
          <h1 className="text-2xl mb-4 font-bold text-white">Calendar</h1>
          <div
            className="flex justify-center items-center flex-1
              col-span-1 row-span-9 rounded-2xl
              bg-[linear-gradient(90deg,_#00008B_0%,_#000080_84%)]
            "
          >
            {/* Implement task cards later */}
            <p className="text-white text-2xl font-bold border-2 border-dashed p-3 rounded-2xl">
              Calendar feature coming soon
            </p>
          </div>
        </main>
    </>
  );
}
