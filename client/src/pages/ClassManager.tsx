import Sidebar from "@/components/Sidebar";

export default function ClassManager() {
  const handleSubmit = () => {
    console.log("submittion successful");
  };
  return (
    <>
      <div className="w-full min-h-screen bg-gray-950 flex py-3 pl-3 overflow-hidden">
        <Sidebar />
        <main className="flex-1 ml-3 mr-3 bg-zinc-900 rounded-2xl p-6 flex flex-col">
          <h1 className="text-2xl mb-4 font-bold text-white">Class Manager</h1>
          <div
            className="flex justify-center items-center flex-1
              col-span-1 row-span-9 rounded-2xl
              bg-[linear-gradient(90deg,_#00008B_0%,_#000080_84%)]
            "
          >
            {/* Implement task cards later */}
            <form onSubmit={() => handleSubmit()} className="space-y-4">
              <div className="bg-card text-card-foreground rounded-lg p-6 shadow-md border border-border">
                <h2 className="text-xl font-bold mb-4 text-emphasis">
                  Upload Syllabus
                </h2>
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}
