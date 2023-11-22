
import { useState } from "react";

const App = () => {

  const [color, setColor] = useState("white");

  return(

    // Main div for the full screen backgrund.
    <div className="w-full h-screen duration-200 flex justify-center"
    style={{backgroundColor: color}}
    >
      {/* Second div container. */}
      <div className="flex flex-wrap justify-center fixed bottom-12 px-4">

        {/* Third div container. */}
        <div className="flex flex-wrap justify-center items-center bg-white rounded-xl shadow-lg border-[2px] border-solid">

          {/* Buttons */}
          <button
          onClick={() => setColor("red")}
          className="outline-none px-3 py-2 m-2 font-semibold text-white rounded-full shadow-lg"
          style={{backgroundColor: "red"}}
          >
          Red
          </button>

          <button
          onClick={() => setColor("greenyellow")}
          className="outline-none px-3 py-2 m-2 font-semibold text-blackq rounded-full shadow-lg"
          style={{backgroundColor: "greenyellow"}}
          >
          Green
          </button>

          <button
          onClick={() => setColor("blue")}
          className="outline-none px-3 py-2 m-2 font-semibold text-white rounded-full shadow-lg"
          style={{backgroundColor: "blue"}}
          >
          Blue
          </button>

          <button
          onClick={() => setColor("purple")}
          className="outline-none px-3 py-2 m-2 font-semibold text-white rounded-full shadow-lg"
          style={{backgroundColor: "purple"}}
          >
          Purple
          </button>

          <button
          onClick={() => setColor("pink")}
          className="outline-none px-3 py-2 m-2 font-semibold text-black rounded-full shadow-lg"
          style={{backgroundColor: "pink"}}
          >
          Pink
          </button>

          <button
          onClick={() => setColor("orange")}
          className="outline-none px-3 py-2 m-2 font-semibold text-white rounded-full shadow-lg"
          style={{backgroundColor: "orange"}}
          >
          Orange
          </button>

          <button
          onClick={() => setColor("yellow")}
          className="outline-none px-3 py-2 m-2 font-semibold text-black rounded-full shadow-lg"
          style={{backgroundColor: "yellow"}}
          >
          Yellow
          </button>

          <button
          onClick={() => setColor("cyan")}
          className="outline-none px-3 py-2 m-2 font-semibold text-black rounded-full shadow-lg"
          style={{backgroundColor: "cyan"}}
          >
          Cyan
          </button>

          <button
          onClick={() => setColor("salmon")}
          className="outline-none px-3 py-2 m-2 font-semibold text-white rounded-full shadow-lg"
          style={{backgroundColor: "salmon"}}
          >
          Salmon
          </button>

          <button
          onClick={() => setColor("grey")}
          className="outline-none px-3 py-2 m-2 font-semibold text-white rounded-full shadow-lg"
          style={{backgroundColor: "grey"}}
          >
          Grey
          </button>

          <button
          onClick={() => setColor("black")}
          className="outline-none px-3 py-2 m-2 font-semibold text-white rounded-full shadow-lg"
          style={{backgroundColor: "black"}}
          >
          Black
          </button>

          
        </div>

      </div>
    
    </div>
  )
}

export default App;