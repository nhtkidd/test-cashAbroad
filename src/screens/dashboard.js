import React, { useEffect, useState } from "react";
import { getData } from "../apis/api";
import NavbarLeft from "../components/navbarLeft";

const Dashboard = () => {
  const numbers = [1, 2, 3, 4];
  const [dataTransactions, getDataTransactions] = useState([]);
  const [loader, setLoader]= useState(true);

  const getDataFromApi = async() => {

    await getData()
      .then((data) => {
        // Recibe los datos y los mete en un state
        getDataTransactions(data.transactions);
        setTimeout(() => {
          setLoader(false)
        }, 3000);
      
    
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  };
  const Transaction = () => {
    return (
      <>
        {dataTransactions?.map((data, index) => {
          const status = data?.status;
          const statusMap = {
            "Pending": { backgroundColor: "#FFEDD5", textColor: "#9A3412" },
            "In Process": { backgroundColor: "#DBEAFE", textColor: "#1E40AF" },
            "Completed": { backgroundColor: "#DCFCE7", textColor: "#166534" },
            "Scheduled": { backgroundColor: "#EAEAFF", textColor: "#5D5CE7" },
            "Canceled": { backgroundColor: "#FEE2E2", textColor: "#991B1B" },
          };
          const { backgroundColor = "#FFFFFF", textColor = "#000000" } = statusMap[status] || {};
          return (
            <tr className="border-b border-border" key={index}>
              <td className="whitespace-nowrap px-6 py-4 font-normal">
                {data?.date}
              </td>
              <td className="whitespace-nowrap px-6 py-4 font-normal">
                {data?.receiver}
              </td>
              <td className="whitespace-nowrap px-6 py-4 font-normal">
                {data?.action}
              </td>
              <td className="whitespace-nowrap px-6 py-4 font-normal text-center">
                <p
                  style={{ color: textColor, backgroundColor: backgroundColor }}
                  className={` py-2 rounded-md font-bold `}
                  id="status"
                >
                  {data?.status}
                </p>
              </td>
              <td className="whitespace-nowrap px-6 py-4 font-normal text-[#2563EB]">
                ${data?.amount}
              </td>
              <td className="whitespace-nowrap px-6 py-4 font-normal flex ">
                <div className=" lg:w-3/4 2xl:w-1/2 lg:whitespace-normal lg:break-words">
                  {data?.paymentMethod}
                </div>
                <div className=" hidden  w-1/2 lg:flex items-center justify-center">
                  <p>...</p>
                </div>
              </td>
            </tr>
            
          );
        })}
      </>
    );
  };
  const Loader =()=>{
    
      return (
        <>
          {numbers.map((numbers,index) =>{
            return(
              <tr key={index} className={` ${loader ? 'border-b border-border max-w-sm animate-pulse' : 'hidden'}`}>
                <td className="w-auto bg-gray-300 px-6 py-8">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-200 "></div>
                </td>
                <td className="w-auto bg-gray-300 px-6 py-5">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-200 "></div>
                </td>
                <td className="w-auto bg-gray-300 px-6 py-5">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-200 "></div>
                </td>
                <td className="w-auto bg-gray-300 px-6 py-5">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-200 "></div>
                </td>
                <td className="w-auto bg-gray-300 px-6 py-5">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-200 "></div>
                </td>
                <td className="w-auto bg-gray-300 px-6 py-5">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-200 "></div>
                </td>
              </tr>
            )
          })}
        </>
      )
  }
  useEffect(() => {
    getDataFromApi();
  }, []);

  return (
    <div className=" flex w-auto h-[100vh]">
      <NavbarLeft></NavbarLeft>
      <div className="dashboard-content w-full bg-dashboard pl-5 pr-5 lg:pr-10 flex flex-col">
        <div className="relative w-full lg:w-[50%] flex justify-center py-8">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none bg-transparent">
            <img
              className="w-4 h-4 text-gray-500 dark:text-gray-400 "
              src={require("../resources/Group.png")}
            />
          </div>
          <input
            type="text"
            id="search"
            className="border-2 border-gray-200 text-sm rounded-lg block w-full h-[54px] pl-10  focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search transactions or more"
          />
        </div>
        <div className="w-full h-16 flex flex-col gap-2 ">
          <h2 className="font-bold text-2xl">Transactions</h2>
          <p className="text-sm text-[#6D7280] ">
            You are viewing the total number of transfers done by your company
          </p>
        </div>
        <div className="w-full h-16 grid grid-cols-4 lg:grid-cols-9 2xl:grid-cols-12 items-center my-5 gap-1 lg:gap-4">
          <div className="col-span-1 lg:col-span-2 ">
            <button className="h-10 w-full  flex  items-center justify-center gap-1  lg:gap-4 rounded-lg border-2 border-border bg-button shadow-sm text-xs lg:text-sm">
              <img className='hidden lg:block lg:w-auto lg:h-auto ' src={require("../resources/calendart.png")} />
              Last 30 Days
              <img className='w-[8%] lg:w-auto lg:h-auto '  src={require("../resources/arrowDown.png")} />
            </button>
          </div>
          <div className="col-span-1">
            <button className="h-10 w-full  flex  items-center justify-center  gap-1 rounded-lg border-2 border-border bg-button shadow-sm lg:p-1 text-xs lg:text-sm">
              Filter by
              <img className='w-[10%] lg:w-auto lg:h-auto ' src={require("../resources/arrowDown.png")} />
            </button>
          </div>
          <div className="col-span-1 lg:col-span-2 lg:col-end-7  2xl:col-end-8">
            <button className="h-10 w-full text-white rounded-full bg-[#111827] font-bold flex items-center justify-center gap-2 text-xs lg:text-sm  lg:p-0">
              Create Payment
            </button>
          </div>
          <div className=" col-span-1 col-end-9 2xl:col-end-12 hidden lg:block">
            <p className="text-xs lg:text-sm ">Page 1 of 4</p>
          </div>
          <div className=" col-span-1 flex gap-2 ">
            <button className="h-9 text-sm w-14 bg-[#F7F7F8] rounded-md border-2 border-[#EDEFF2] flex items-center justify-center shadow-sm">
              <img src={require("../resources/ArrowButtonLeft.png")} />
            </button>
            <button className="h-9 text-sm w-14 bg-barleft rounded-md border-2 border-border flex items-center justify-center shadow-sm">
              <img src={require("../resources/ArrowButton.png")} />
            </button>
          </div>
        </div>
        <div className="w-full h-3/6 bg-white rounded-lg overflow-auto my-5">
          <table className="min-w-full text-left text-sm font-light">
            <thead className="border-b font-medium border-border w-full">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-4 text-gray-table font-normal"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-gray-table font-normal"
                >
                  Receiver
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-gray-table font-normal"
                >
                  Action
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-gray-table font-normal"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-gray-table font-normal"
                >
                  Amount
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-gray-table font-normal 2xl:w-[15%] "
                >
                 <div className="flex items-center gap-2">
                 <img src={require("../resources/coin.png")} /> Payment Method
                 </div>
                </th>
              </tr>
            </thead>
            <tbody>
            {
              (loader ? <Loader></Loader> : <Transaction></Transaction>)
            }
             
            </tbody>
          </table>
        </div>
        <div className="w-full self-end grid grid-cols-12 lg:grid-cols-11 mt-[3%]">
            <div className=" col-span-5 lg:col-span-2  flex items-center gap-2">
              <p className="text-gray-text text-xs lg:text-sm">Go to</p>
              <div className="bg-button text-center flex justify-center items-center w-[50px]  h-[40px] rounded-md text-gray-text">10</div>
              <p className="text-gray-text text-xs lg:text-sm">Page</p>
            </div>
            <div className="hidden lg:block lg:col-span-6 2xl:col-span-7 "></div>
            <div className="col-span-7 lg:col-span-3 2xl:col-span-2  grid grid-cols-6  gap-2">
            <button className="bg-[#F7F7F8] hover:bg-[#5D5CE7]  border-2 border-[#EDEFF2] text-center flex justify-center items-center w-full  h-[40px] rounded-md text-gray-text col-span-1"> <img src={require("../resources/ArrowButtonLeft.png")} /></button>
                {numbers.map((number,index)=>{
                  return (
                    <button key={index} className="bg-button hover:bg-[#5D5CE7] hover:text-white border-2 border-border text-center flex justify-center items-center rounded-md w-full text-gray-text col-span-1 font-bold">{number}</button>
                  )
                })}
              <button className="bg-barleft hover:bg-[#5D5CE7] border-2 border-border text-center flex justify-center items-center w-full h-[40px] rounded-md text-gray-text col-span-1"><img src={require("../resources/ArrowButton.png")} /></button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
