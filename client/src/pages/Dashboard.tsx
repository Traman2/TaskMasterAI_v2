import Sidebar from "@/components/Sidebar";

export default function Dashboard() {
  return (
    <div className="w-full min-h-screen bg-zinc-900 flex py-3 pl-3 overflow-hidden">
      <Sidebar/>
      <main className="flex-1 ml-3 mr-3 bg-gray-950 rounded-2xl p-6 flex flex-col">
      </main>
    </div>
  )
}
