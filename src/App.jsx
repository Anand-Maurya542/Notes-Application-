import React, { useState } from "react";


const App = () => {
  const [title, settitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const deleteNote=(idx)=>{
    
    const copyTask=[...task]
    copyTask.splice(idx,1)
    setTask(copyTask)
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("form submitted");
    const copyTask = [...task];
    copyTask.push({ title, details });
    setTask(copyTask);
    settitle("");
    setDetails("");
  };
  return (
    <div className="h-screen  lg:flex bg-black p-10 text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex lg:w-1/2 items-start gap-5 flex-col "
      >
        <h1 className="font-bold text-xl">Add Notes</h1>
        {/*First heading input*/}
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 w-3/4 py-2 font-medium outline-none border-2 rounded"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />

        {/*Second details input*/}
        <textarea
          name=""
          id=""
          placeholder="Write Details"
          className="px-5 w-3/4 py-2  font-medium outline-none border-2 rounded h-30"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        ></textarea>

        <button className="bg-white  font-medium outline-none rounded w-3/4 text-black">
          Add Note
        </button>
      </form>
      <div className="  h-full  lg:w-1/2 ">
        <h1 className="text-xl font-bold">Recent Notes</h1>
        <div className="flex  overflow-auto flex-wrap gap-5 my-4">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="leading-tight  flex flex-col justify-between 
                        relative h-52 w-40 rounded-2xl bg-white text-black p-4
                         bg-cover items-start"
              >
                <h3 className="font-bold">{elem.title}</h3>
                <p className="font-medium leading-tight text-gray-600">
                  {elem.details}
                </p>
                <button onClick={()=>{
                  deleteNote(idx)
                }} className="w-full active:scale-95 cursor-grab bg-red-600 text-white rounded-full font-bold">
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
