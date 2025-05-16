import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const onSubmit = () => {
    navigate("/dashboard");
  }
  
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-bold">
          <div className="flex h-6 w-6 items-center justify-center rounded-md">
            <img
              src="LogoMaster.png"
              alt="TaskMasterAI Logo"
            />
          </div>
          TaskMasterAI
          <br/>
          Login form goes here. Temp login form
        </a>
        <button className="border-blue-600 bg-blue-800 text-white rounded-2xl p-2" onClick={onSubmit}>Go to dashboard</button>
      </div>
    </div>
  )
}
