import React from 'react'

 const NavbarLeft = () => {
  return (
<div className="left-bar w-96 bg-barleft border-r-2 border-gray-200 flex-col">
        <div className="links-bar w-full h-[86%] pt-7">
          <div className="h-fit flex flex-col gap-16 justify-center items-center ">
            <img
              src={require("../resources/cashBlack.png")}
              className="w-auto h-[34px]"
              alt='img'
            />
            <div className="w-56 h-96 ">
              <ul>
                <li className="w-full h-14 rounded-lg font-medium flex items-center gap-5  hover:bg-dashboard text-lg pl-6">
                  <img
                    src={require("../resources/layout-line.png")}
                    className="w-[24px] h-[24px]"
                    alt='img'
                  />
                  Dashboard
                </li>
                <li className="w-full h-14 rounded-lg font-medium flex items-center gap-5  bg-dashboard text-lg pl-6">
                  <img
                    src={require("../resources/list-check.png")}
                    className="w-[24px] h-[24px]"
                    alt='img'
                  />
                  Transactions
                </li>
                <li className="w-full h-14 rounded-lg font-medium flex items-center gap-5  hover:bg-dashboard text-lg pl-6">
                  <img
                    src={require("../resources//secure-payment-fill.png")}
                    className="w-[24px] h-[24px]"
                    alt='img'
                  />
                  Payments
                </li>
                <li className="w-full h-14 rounded-lg font-medium flex items-center gap-5  hover:bg-dashboard text-lg pl-6">
                  <img
                    src={require("../resources/bank-card-2-line.png")}
                    className="w-[24px] h-[24px]"
                    alt='img'
                  />
                  Cards
                </li>
                <li className="w-full h-14 rounded-lg font-medium flex items-center gap-5  hover:bg-dashboard text-lg pl-6">
                  <img
                    src={require("../resources/bank-line.png")}
                    className="w-[24px] h-[24px]"
                    alt='img'
                  />
                  Accounts
                </li>
                <li className="w-full h-14 rounded-lg font-medium flex items-center gap-5  hover:bg-dashboard text-lg pl-6">
                  <img
                    src={require("../resources/arrow-up-down-line.png")}
                    className="w-[24px] h-[24px]"
                    alt='img'
                  />
                  Exchange
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="user-card w-full h-[14%]  flex items-end ">
          <div className=" w-[98%] h-[95%] border-t-2 border-gray-200 grid items-center grid-cols-10 pl-8 pr-5  gap-1 ">
            <div className="col-span-2 h-14 flex items-center">
              <div className="bg-[#E5E7EB] w-[42px] h-[42px] rounded-lg">
                <img
                  className="object-cover max-w-none"
                  src={require("../resources/logo-card.png")}
                  alt='img'
                />
              </div>
            </div>
            <div className="col-span-7 flex  flex-col ">
              <p className="font-medium ">Tesla</p>
              <p className="font-normal text-[#6D7280]">Juvenal Campos</p>
            </div>
            <div className="col-span-1 h-14 flex items-center">
              <img src={require("../resources/arrow-up-s-line.png")}   alt='img' />
            </div>
          </div>
        </div>
      </div>
  )
}

export default NavbarLeft
