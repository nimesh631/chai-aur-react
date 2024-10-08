import { useState } from "react";
function App() {
  const [color, setColor] = useState("aqua");

  return (
    <>
   
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="flex justify-center font-sans font-bold text-4xl bg-gray-300 py-5">
      Rainbow Color
    </div>


      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-2xl px-3 py-2">
          <button onClick={()=>{
              setColor("red")
          }}
            className="outline-none px-4 text-black rounded-xl"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button onClick={()=>setColor("orange")}
            className="outline-none px-4 text-black rounded-xl"
            style={{ backgroundColor: "orange" }}
          >
            orange
          </button>

          <button onClick={()=>setColor("yellow")}
            className="outline-none px-4 text-black rounded-xl"
            style={{ backgroundColor: "yellow" }}
          >
            yellow
          </button>

          <button onClick={()=>setColor("green")}
            className="outline-none px-4 text-black rounded-xl"
            style={{ backgroundColor: "green" }}
          >
            green
          </button>

          <button onClick={()=>setColor("blue")}
            className="outline-none px-4 text-black rounded-xl"
            style={{ backgroundColor: "blue" }}
          >
            blue
          </button>

          <button onClick={()=>setColor("indigo")}
            className="outline-none px-4 text-black rounded-xl"
            style={{ backgroundColor: "indigo" }}
          >
            indigo
          </button>

          <button onClick={()=>setColor("violet")}
            className="outline-none px-4 text-black rounded-xl"
            style={{ backgroundColor: "violet" }}
          >
            violet
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
