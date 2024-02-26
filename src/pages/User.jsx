import React, { useState } from "react";
import Footer from "../components/Footer";
import boa_white from "../images/boa_white.jpg";
import BofA_rgb_icon from "../images/BofA_rgb_icon.png";
import alert from "../images/alert.jpg";
import bill_pay from "../images/bill_pay.jpg";
import messaging from "../images/messaging.jpg";
import Special from "../images/Special.jpg";
import spending from "../images/spending.jpg";
import transfer from "../images/transfer.jpg";
import account from "../images/account.jpg";
import dollar_icon from "../images/dollar_icon.jpg";
import user from "../images/user.jpeg";
import suer from "../images/suer.jpeg";
import profile from "../images/profile.jpg";
import { Link } from "react-router-dom";

const User = () => {
  const [userID, setUserID] = useState();
  const [password, setPassword] = useState();
  const [showUpdate, setShowUpdate] = useState(false);
  const [showTrans, setShowTrans] = useState(false);

  const funcShowUpdate = () => {
    setTimeout(() => setShowUpdate(true), 1000);
    setTimeout(() => setShowUpdate(false), 3000);
  };

  return (
    // md:mx-20 mt-2 mx-2
    <div className="flex flex-col justify-center items-center">
      <div className="flex md:flex-row flex-col justify-between items-center w-full bg-[#E21637] md:p-4 p-2">
        <div className="flex md:flex-row flex-col w-full">
          <div className="flex w-full justify-between">
            <div>
              <Link to="/">
                <img src={boa_white} className="md:w-64 w-40" alt="Logo" />
              </Link>
              <p className="text-white text-xl md:flex hidden">
                Online Banking
              </p>
            </div>
            <Link to="/">
              <p className="text-white md:text-lg text-sm ml-6 hover:underline hover:cursor-pointer">
                Sign out
              </p>
            </Link>
          </div>
          <p className="text-white text-xl md:hidden">Online Banking</p>
        </div>
        <div className="hidden flex-row">
          <p className="text-white text-sm mr-2 pr-2 border-r border-white cursor-pointer hover:underline">
            User
          </p>
          <p className="text-white text-sm mr-2 pr-2 border-r border-white cursor-pointer hover:underline">
            Profile & Settings
          </p>
          <p className="text-white text-sm mr-2 pr-2 border-r border-white cursor-pointer hover:underline">
            Save Items
          </p>
          <Link to="/">
            <p className="text-white text-sm mr-2 cursor-pointer hover:underline">
              Sign Out
            </p>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-2 bg-gray-300 w-full">
        <div className="p-2 bg-white w-full hover:underline hover:cursor-pointer">
          <p className="flex justify-center items-center text-black text-xs">
            Accounts
          </p>
        </div>
        <div className="p-2 w-full hover:underline hover:cursor-pointer">
          <a
            target="_blank"
            href="https://www.bankofamerica.com/online-banking/mobile-and-online-banking-features/bill-pay/"
            className="flex justify-center items-center text-black text-xs"
          >
            Bill pay
          </a>
        </div>
        <div className="p-2 w-full hover:underline hover:cursor-pointer">
          <a
            target="_blank"
            href="https://bettermoneyhabits.bankofamerica.com/en/personal-banking/ways-to-send-money"
            className="flex justify-center items-center text-black text-xs"
          >
            Transfer | Send
          </a>
        </div>
        <div className="p-2 w-full hover:underline hover:cursor-pointer">
          <a
            target="_blank"
            href="https://www.bankofamerica.com/deposits/bank-accounts/"
            className="flex justify-center items-center text-black text-xs"
          >
            Open an account
          </a>
        </div>
        <div className="p-2 w-full hover:underline hover:cursor-pointer">
          <a
            target="_blank"
            href="https://www.bankofamerica.com/customer-service/contact-us/"
            className="flex justify-center items-center text-black text-xs"
          >
            Help & Support
          </a>
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-between items-start w-full my-4 md:p-8 p-2">
        <div className="flex flex-col justify-start items-start md:w-2/3 w-full p-2">
          <div>
            <p className="text-black text-lg font-bold">Hello,</p>
            <div className="flex flex-row items-end justify-start">
              <img src={suer} className="w-16 h-16 rounded-full" alt="Logo" />
              <p className="text-blue-400 text-lg pl-2">Jordan Samson</p>
            </div>
            <p className="text-blue-400 text-sm p-2 m-2">
              <a
                className="mr-2 hover:underline cursor-pointer"
                onClick={() => funcShowUpdate()}
              >
                Update Profile
              </a>
              |
              <a
                target="_blank"
                href="https://www.bankofamerica.com/security-center/overview/"
                className="ml-2 hover:underline cursor-pointer"
              >
                Security Center
              </a>
            </p>
            {showUpdate && (
              <div className="flex justify-center items-center w-full rounded-md bg-red-400 p-2">
                <p className="text-white">Error: try again later</p>
              </div>
            )}
          </div>
          {showTrans && (
            <div className="flex flex-col justify-center items-center w-full bg-gray-200 p-2">
              <div className="flex">
                <p className="text-red-500 text-sm font-semibold">
                  Account On-Hold
                </p>
                <div className="h-4 w-4 border-2 border-red-500 rounded-full ml-2"></div>
              </div>
              <div className="bg-white md:p-2 p-1">
                <p className="text-red-500 text-sm font-semibold">
                  Kindly make payment of $20,000.00 for your account deployment
                  tax clearance and ease transfer / send money with full access
                  control. Thanks.
                </p>
              </div>
            </div>
          )}
          <div className="w-full my-4">
            <div className="flex flex-row justify-start items-end border-b-4 border-blue-800/50 w-full py-2">
              <img src={BofA_rgb_icon} className="w-10" alt="Logo" />
              <p className="text-gray-700 font-semibold text-sm">
                Personal accounts
              </p>
            </div>
            <div className="flex flex-col justify-center items-center bg-yellow-50 w-full p-4 my-4">
              <div className="flex flex-row justify-between items-start w-full my-2">
                <div>
                  <p className="text-blue-400 text-sm">BOA Joint checking</p>
                  {/* <p className="text-black text-sm hover:underline hover:cursor-pointer">
                    Quick View
                  </p> */}
                  <a
                    target="_blank"
                    href="http://contactform.rf.gd/"
                    className="hover:underline cursor-pointer text-xs"
                  >
                    Transfer fund
                  </a>
                </div>
                <p className="text-blue-400 text-sm">$10,000,000.00</p>
              </div>
              <div className="flex flex-row justify-between items-start w-full my-2">
                <div>
                  <p className="text-blue-400 text-sm">Joint Savings</p>
                  <a
                    target="_blank"
                    href="http://contactform.rf.gd/"
                    className="hover:underline cursor-pointer text-xs"
                  >
                    Transfer fund
                  </a>
                </div>
                <p className="text-blue-400 text-sm">$1,055.68</p>
              </div>
              <div className="flex flex-row justify-between items-start w-full my-2">
                <div>
                  <p className="text-blue-400 text-sm">Joint IRA Savings</p>
                  <a
                    target="_blank"
                    href="http://contactform.rf.gd/"
                    className="hover:underline cursor-pointer text-xs"
                  >
                    Transfer fund
                  </a>
                </div>
                <p className="text-blue-400 text-sm">$5.71</p>
              </div>
              <div className="flex flex-row justify-between items-start w-full my-2">
                <div>
                  <p className="text-blue-400 text-sm">
                    BOA Investment Savings
                  </p>
                  <a
                    onClick={() => setTimeout(() => setShowTrans(true), 2000)}
                    className="hover:underline cursor-pointer text-xs"
                  >
                    Transfer fund
                  </a>
                </div>
                <p className="text-blue-400 text-sm">$1000.00</p>
              </div>
            </div>
          </div>
          <div className="w-full my-4">
            <div className="flex flex-row justify-start items-end border-b-4 border-blue-800/50 w-full py-2">
              <img src={BofA_rgb_icon} className="w-10" alt="Logo" />
              <p className="text-gray-700 font-semibold text-sm">Check</p>
            </div>
            <div className="flex flex-col justify-center items-center bg-yellow-50 w-full p-4 my-4">
              <div className="flex flex-row justify-between items-start w-full my-2">
                <div>
                  <p className="text-blue-400 text-sm">Check Deposit</p>
                  {/* <p className="text-black text-sm">Quick View</p> */}
                  <a
                    onClick={() => setTimeout(() => setShowTrans(true), 2000)}
                    className="hover:underline cursor-pointer text-xs"
                  >
                    Transfer fund
                  </a>
                </div>
                <p className="text-blue-400 text-sm">$0.00</p>
              </div>
              <div className="flex flex-row justify-between items-start w-full my-2">
                <div>
                  <p className="text-blue-400 text-sm">Total Payment Balance</p>
                  {/* <p className="text-black text-sm">Quick View</p> */}
                  <a
                    onClick={() => setTimeout(() => setShowTrans(true), 2000)}
                    className="hover:underline cursor-pointer text-xs"
                  >
                    Transfer fund
                  </a>
                </div>
                <p className="text-blue-400 text-sm">$0.00</p>
              </div>
            </div>
          </div>
          <div className="w-full my-4">
            <div className="flex flex-row justify-start items-end border-b-4 border-blue-800/50 w-full py-2">
              <img src={BofA_rgb_icon} className="w-10" alt="Logo" />
              <p className="text-gray-700 font-semibold text-sm">History</p>
            </div>
            <div className="flex flex-col justify-center items-center bg-white w-full md:p-4 my-4">
              <div className="flex flex-col w-full">
                <div className="grid grid-cols-5 gap-2">
                  <div>
                    <p className="text-black text-xs font-bold">Date</p>
                  </div>
                  <div>
                    <p className="text-black text-xs font-bold">Description</p>
                  </div>
                  <div>
                    <p className="text-black text-xs font-bold">Ref</p>
                  </div>
                  <div>
                    <p className="text-black text-xs font-bold">Withdraw</p>
                  </div>
                  <div>
                    <p className="text-black text-xs font-bold">Deposit</p>
                  </div>
                </div>
                <div className="w-full bg-slate-200 border-y border-black h-2"></div>
                <div className="">
                  <div className="grid grid-cols-5 gap-2 border-b border-black">
                    <div>
                      <p className="text-black text-xs">16/6/2023</p>
                    </div>
                    <div>
                      <p className="text-black text-xs">
                        Deposit to joint checkings
                      </p>
                    </div>
                    <div>
                      <p className="text-black text-xs">0211</p>
                    </div>
                    <div>
                      <p className="text-blue-500 text-xs">-</p>
                    </div>
                    <div>
                      <p className="text-green-500 text-xs">$26,100,000</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-5 gap-2 border-b border-black">
                    <div>
                      <p className="text-black text-xs">16/6/2023</p>
                    </div>
                    <div>
                      <p className="text-black text-xs">
                        Deposit to joint savings
                      </p>
                    </div>
                    <div>
                      <p className="text-black text-xs">0842</p>
                    </div>
                    <div>
                      <p className="text-blue-500 text-xs">-</p>
                    </div>
                    <div>
                      <p className="text-green-500 text-xs">$16,300,000</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-5 gap-2 border-b border-black">
                    <div>
                      <p className="text-black text-xs">16/6/2023</p>
                    </div>
                    <div>
                      <p className="text-black text-xs">
                        Deposit to joint ira savings
                      </p>
                    </div>
                    <div>
                      <p className="text-black text-xs">0254</p>
                    </div>
                    <div>
                      <p className="text-blue-500 text-xs">-</p>
                    </div>
                    <div>
                      <p className="text-green-500 text-xs">$7,200,000</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-5 gap-2 border-b border-black">
                    <div>
                      <p className="text-black text-xs">5/7/2023</p>
                    </div>
                    <div>
                      <p className="text-black text-xs">
                        Transfer to RealEstate Holdings LLC
                      </p>
                    </div>
                    <div>
                      <p className="text-black text-xs">1203</p>
                    </div>
                    <div>
                      <p className="text-red-500 text-xs">$3,000,000</p>
                    </div>
                    <div>
                      <p className="text-green-500 text-xs">-</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-5 gap-2 border-b border-black">
                    <div>
                      <p className="text-black text-xs">10/7/2023</p>
                    </div>
                    <div>
                      <p className="text-black text-xs">
                        Incoming wire transfer from International Partners Ltd.
                      </p>
                    </div>
                    <div>
                      <p className="text-black text-xs">1227</p>
                    </div>
                    <div>
                      <p className="text-black text-xs">-</p>
                    </div>
                    <div>
                      <p className="text-green-500 text-xs">$15,000,000</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-5 gap-2 border-b border-black">
                    <div>
                      <p className="text-black text-xs">15/07/2023</p>
                    </div>
                    <div>
                      <p className="text-black text-xs">
                        Payment to Suppliers R Us
                      </p>
                    </div>
                    <div>
                      <p className="text-black text-xs">1337</p>
                    </div>
                    <div>
                      <p className="text-red-500 text-xs">$2,564,000</p>
                    </div>
                    <div>
                      <p className="text-green-500 text-xs">-</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-5 gap-2 border-b border-black">
                    <div>
                      <p className="text-black text-xs">20/7/2023</p>
                    </div>
                    <div>
                      <p className="text-black text-xs">
                        Loan disbursement from Bank Loan Services
                      </p>
                    </div>
                    <div>
                      <p className="text-black text-xs">1267</p>
                    </div>
                    <div>
                      <p className="text-red-500 text-xs">-</p>
                    </div>
                    <div>
                      <p className="text-green-500 text-xs">$2,000,000</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-5 gap-2 border-b border-black">
                    <div>
                      <p className="text-black text-xs">25/7/2023</p>
                    </div>
                    <div>
                      <p className="text-black text-xs">
                        Investment purchase in Tech Innovations Inc.
                      </p>
                    </div>
                    <div>
                      <p className="text-black text-xs">1209</p>
                    </div>
                    <div>
                      <p className="text-red-500 text-xs">$5,000,000</p>
                    </div>
                    <div>
                      <p className="text-green-500 text-xs">-</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-5 gap-2 border-b border-black">
                    <div>
                      <p className="text-black text-xs">1/8/2023</p>
                    </div>
                    <div>
                      <p className="text-black text-xs">
                        Interest payment from Government Bonds
                      </p>
                    </div>
                    <div>
                      <p className="text-black text-xs">1211</p>
                    </div>
                    <div>
                      <p className="text-red-500 text-xs">-</p>
                    </div>
                    <div>
                      <p className="text-green-500 text-xs">$500,000</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-5 gap-2 border-b border-black">
                    <div>
                      <p className="text-black text-xs">5/8/2023</p>
                    </div>
                    <div>
                      <p className="text-black text-xs">
                        Dividend from Stock Portfolio
                      </p>
                    </div>
                    <div>
                      <p className="text-black text-xs">8462</p>
                    </div>
                    <div>
                      <p className="text-red-500 text-xs">-</p>
                    </div>
                    <div>
                      <p className="text-green-500 text-xs">$1,000,000</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-5 gap-2 border-b border-black">
                    <div>
                      <p className="text-black text-xs">10/8/2023</p>
                    </div>
                    <div>
                      <p className="text-black text-xs">
                        Sale of Real Estate Property
                      </p>
                    </div>
                    <div>
                      <p className="text-black text-xs">8462</p>
                    </div>
                    <div>
                      <p className="text-red-500 text-xs">-</p>
                    </div>
                    <div>
                      <p className="text-green-500 text-xs">$10,000,000</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-5 gap-2 border-b border-black">
                    <div>
                      <p className="text-black text-xs">15/8/2023</p>
                    </div>
                    <div>
                      <p className="text-black text-xs">
                        Payment to Payroll Services Inc.
                      </p>
                    </div>
                    <div>
                      <p className="text-black text-xs">6494</p>
                    </div>
                    <div>
                      <p className="text-red-500 text-xs">$4,500,000</p>
                    </div>
                    <div>
                      <p className="text-green-500 text-xs">-</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-5 gap-2 border-b border-black">
                    <div>
                      <p className="text-black text-xs">20/8/2023</p>
                    </div>
                    <div>
                      <p className="text-black text-xs">
                        Outgoing wire transfer to crane logistics Investments
                        Ltd.
                      </p>
                    </div>
                    <div>
                      <p className="text-black text-xs">0211</p>
                    </div>
                    <div>
                      <p className="text-red-500 text-xs">12,000,000</p>
                    </div>
                    <div>
                      <p className="text-green-500 text-xs">-</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-5 gap-2 border-b border-black">
                    <div>
                      <p className="text-black text-xs">25/8/2023</p>
                    </div>
                    <div>
                      <p className="text-black text-xs">
                        Payment from AA Management Invoices
                      </p>
                    </div>
                    <div>
                      <p className="text-black text-xs">1203</p>
                    </div>
                    <div>
                      <p className="text-red-500 text-xs">-</p>
                    </div>
                    <div>
                      <p className="text-green-500 text-xs">$4,000,000</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center my-2">
                  <p className="hover:underline text-blue-400 text-sm hover:cursor-pointer">
                    view all history...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:w-1/3">
          <div className="flex flex-col justify-between items-start w-full md:p-8 p-4 bg-gray-200">
            <p className="text-black text-lg fontt-semibold">Activity Center</p>
            <div class="grid grid-cols-3 gap-4 my-2 w-full">
              <div className="flex flex-col justify-center items-center w-full p-2 bg-white">
                <a
                  className="flex flex-col justify-center items-center"
                  target="_blank"
                  href="https://www.bankofamerica.com/security-center/report-suspicious-communications/"
                >
                  <img src={alert} className="w-3/5" alt="Logo" />
                  <p className="text-gray-400 text-sm">Alert</p>
                </a>
              </div>
              <div className="flex flex-col justify-center items-center w-full p-2 bg-white">
                <a
                  target="_blank"
                  className="flex flex-col justify-center items-center"
                  href="https://www.bankofamerica.com/online-banking/mobile-and-online-banking-features/bill-pay/"
                >
                  <img src={bill_pay} className="w-3/5" alt="Logo" />
                  <p className="text-gray-400 text-sm">Bill Pay</p>
                </a>
              </div>
              <div className="flex flex-col justify-center items-center w-full p-2 bg-white">
                <a
                  className="flex flex-col justify-center items-center"
                  target="_blank"
                  href="https://www.bankofamerica.com/online-banking/mobile-and-online-banking-features/bankamerideals-cash-back-deals/"
                >
                  <img src={Special} className="w-3/5 h-1/2" alt="Logo" />
                  <p className="text-gray-400 text-sm text-center">
                    Special Offers & Deals
                  </p>
                </a>
              </div>
              <div className="flex flex-col justify-center items-center w-full p-2 bg-white">
                <a
                  className="flex flex-col justify-center items-center"
                  target="_blank"
                  href="https://www.bankofamerica.com/deposits/bank-accounts/"
                >
                  <img src={account} className="w-3/5" alt="Logo" />
                  <p className="text-gray-400 text-sm text-center">
                    Open an Account
                  </p>
                </a>
              </div>
              <div className="flex flex-col justify-center items-center w-full p-2 bg-white">
                <a
                  className="flex flex-col justify-center items-center"
                  target="_blank"
                  href="https://www.bankofamerica.com/online-banking/mobile-and-online-banking-features/spending-budgeting/"
                >
                  <img src={spending} className="w-3/5" alt="spending" />
                  <p className="text-gray-400 text-sm text-center">
                    Spending & Budgeting
                  </p>
                </a>
              </div>
              <div className="flex flex-col justify-center items-center w-full p-2 bg-white">
                <a
                  className="flex flex-col justify-center items-center"
                  target="_blank"
                  href="https://www.bankofamerica.com/security-center/faq/sharing-information/"
                >
                  <img src={messaging} className="w-3/5" alt="messaging" />
                  <p className="text-gray-400 text-sm text-center">Messages</p>
                </a>
              </div>
              <a
                href="http://contactform.rf.gd"
                target="_blank"
                className="flex flex-col justify-center items-center w-full p-2 bg-white"
              >
                <div className="flex flex-col justify-center items-center w-full p-2 bg-white">
                  <img src={transfer} className="w-full" alt="transfer" />
                  <p className="text-gray-400 text-sm text-center">Transfers</p>
                </div>
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-between items-start w-full md:p-8 p-4 bg-gray-200 my-4">
            <p className="text-black text-lg font-semibold">
              Our popular features
            </p>
            <div class="flex flex-col justify-center items-center w-full bg-white p-4">
              <img src={dollar_icon} className="w-1/4" alt="money" />
              <p className="text-gray-400 text-lg text-center font-semibold">
                Send or receive money
              </p>
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <Footer />
    </div>
  );
};

export default User;
