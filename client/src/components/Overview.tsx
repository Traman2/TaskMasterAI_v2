type UserProps = {
  _id: string;
  userName: string;
  email: string;
};

export default function Overview({ _id, userName, email }: UserProps) {
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-3 gap-3 flex-1">
        {/* Small card user details*/}
        <div
          className="
              col-span-1 row-span-1 rounded-2xl
              bg-[linear-gradient(90deg,_#00008B_0%,_#000080_84%)]
            "
        >
          <h1 className="text-blue-200 ml-9 mt-5 font-bold">User Details</h1>
          <div className="bg-[linear-gradient(90deg,_rgba(34,34,198,0.9)_0%,_rgba(19,19,153,0.9)_100%)] mx-5 mt-3 py-2 rounded-md">
            <p className="text-blue-300 ml-4 font-bold">{userName}</p>
            <p className="text-blue-300 ml-4">
              <span className="font-bold">Email:</span> {email}
            </p>
            <p className="text-blue-300 ml-4">
              <span className="font-bold">Unique ID:</span> {_id}
            </p>
          </div>
        </div>






        {/* Large card top row class details*/}
        <div
          className="
              col-span-2 row-span-1 rounded-2xl
              bg-[linear-gradient(90deg,_#00008B_0%,_#000080_84%)]
            "
        ></div>

        {/* Large card second row tasks*/}
        <div
          className="
              col-span-2 row-span-2 rounded-2xl
              bg-[linear-gradient(90deg,_#00008B_0%,_#000080_84%)]
            "
        ></div>

        {/* small card friends*/}
        <div
          className="
              col-span-1 row-span-2 rounded-2xl
              bg-[linear-gradient(90deg,_#00008B_0%,_#000080_84%)]
            "
        ></div>





        
      </div>
    </>
  );
}
