import Sidebar from "@/components/Sidebar";

export default function Chatbot() {
  return (
    <>
      <div className="w-full min-h-screen bg-gray-950 flex py-3 pl-3 overflow-hidden">
        <Sidebar />
        <main className="flex-1 ml-3 mr-3 bg-zinc-900 rounded-2xl p-6 flex flex-col">
          <h1 className="text-2xl mb-4 font-bold text-white">AI Assistant</h1>
          <div className="grid grid-cols-12 grid-rows-1 gap-3 flex-1">
            <div
              className="
              col-span-3 row-span-1 rounded-2xl
              bg-[linear-gradient(90deg,_#00008B_0%,_#000080_84%)]
            "
            ></div>

            <div
              className="
              col-span-9 row-span-1 rounded-2xl justify-center items-center flex flex-1
              bg-[linear-gradient(90deg,_#00008B_0%,_#000080_84%)]
            "
            >
              {/*Implement friends chat and details later*/}
              <p className="text-white text-2xl font-bold border-2 border-dashed p-3 rounded-2xl">
                Friends chat coming soon
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
