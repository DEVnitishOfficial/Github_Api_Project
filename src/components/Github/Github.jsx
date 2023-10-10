import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProjectUi from '../ProjectUi/ProjectUi';

function Github({userName}) {


  const [data, setData] = useState([]);

 
    async function downloadGithubData() {
      console.log('userName',userName)
      if(!userName){
        return
      }
      try {

          const response = await axios.get(`https://api.github.com/users/${userName}`,{
            headers:{
              Authorization: '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'
            }
          });
          setData(response.data);
          console.log('this is data',response.data);
        
        }
        catch (error) {
          console.error('Error fetching data:', error);
        }
        
    }

    useEffect(() => {
    downloadGithubData();
  }, [userName]);

  return (
    <> 
   {(userName) ? 
    <div className=' m-4 p-4 flex items-center justify-center'>
          <img
            className="rounded-xl   "
            src={data.avatar_url}
            alt="GithHub pic"
            width={300}
          />
          <p className="text-2xl font-bold bg-white p-2 mr-32 text-left rounded-xl z-10 absolute mt-[180px]   text-black">
           {data.name}
          </p>
          <div className='flex flex-row justify-center items-center'>           
          <p className="text-2xl font-bold bg-green-300 p-2 mr-32 text-left rounded-xl z-10 absolute mt-[380px]   text-black">
          Followers : {data.followers}
          </p>

          <p className="text-2xl font-bold bg-green-300 p-2 mr-32 text-left rounded-xl z-10 absolute    text-black mt-[380px] mx-[-500px] ">
           Public Repo : {data.public_repos}
          </p>
          </div>
          
        </div>
        
        : (
          <ProjectUi />
        )}
        

    </>
  );
}

export default Github;
