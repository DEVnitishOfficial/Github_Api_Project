import React, { useEffect, useState } from "react";

function ProjectUi() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/farmanyu")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <>
      <h1 className="bg-gray-500 text-white p-4 m-4 font-bold text-3xl">
        GITHUB API INTEGRATION{" "}
      </h1>
      <input
        className="w-[500px] p-3 bg-transparent border-2 border-fuchsia-700 outline-none text-center "
        type="text"
        placeholder="Entre Github Phot Id"
      />
      <div className="flex gap-4 flex-wrap m-4 p-4 place-content-evenly ">
        <div>
          <img
            className="rounded-xl"
            src="https://avatars.githubusercontent.com/u/118646662?v=4"
            alt="GithHub pic"
            width={300}
          />
          <p className="text-2xl font-bold bg-white p-2 mr-52 text-left rounded-xl z-10 absolute mt-[-60px]   text-black">
            Nitish kumar
          </p>
        </div>
        <div>
          <img
            className="rounded-xl"
            src="https://avatars.githubusercontent.com/u/11613311?v=4"
            alt="GithHub pic"
            width={300}
          />
          <p className="text-2xl font-bold bg-white p-2 mr-52 text-left rounded-xl z-10 absolute mt-[-60px]   text-black">
            Hitesh Choudhary
          </p>
        </div>

        <div>
          <img
            className="rounded-xl"
            src="https://avatars.githubusercontent.com/u/29747452?v=4"
            alt="GithHub pic"
            width={300}
          />
          <p className="text-2xl font-bold bg-white p-2 mr-52 text-left rounded-xl z-10 absolute mt-[-60px]   text-black">
          Sanket Singh
          </p>
        </div>
        <div>
          <img
            className="rounded-xl"
            src="https://avatars.githubusercontent.com/u/17738708?v=4"
            alt="GithHub pic"
            width={300}
          />
          <p className="text-2xl font-bold bg-white p-2 mr-52 text-left rounded-xl z-10 absolute mt-[-60px]   text-black">
           rlfarman
          </p>
        </div>
        <div>
          <img
            className="rounded-xl"
            src="https://avatars.githubusercontent.com/u/741048?v=4"
            alt="GithHub pic"
            width={300}
          />
          <p className="text-2xl font-bold bg-white p-2 mr-52 text-left rounded-xl z-10 absolute mt-[-60px]   text-black">
           FarmanYu
          </p>
        </div>
        <div>
          <img
            className="rounded-xl"
            src="https://avatars.githubusercontent.com/u/107990962?v=4"
            alt="GithHub pic"
            width={300}
          />
          <p className="text-2xl font-bold bg-white p-2 mr-52 text-left rounded-xl z-10 absolute mt-[-60px]   text-black">
            Farmantasleem
          </p>
        </div>
      </div>
    </>
  );
}

export default ProjectUi;
