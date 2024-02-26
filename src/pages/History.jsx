import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import merrill_t from "../images/merrill_t.png";
import boa_white from "../images/boa_white.jpg";
import BofA_rgb_icon from "../images/BofA_rgb_icon.png";
import alert from "../images/alert.jpg";
import bill_pay from "../images/bill_pay.jpg";
import messaging from "../images/messaging.jpg";
import Special from "../images/Special.jpg";
import spending from "../images/spending.jpg";
import transfer from "../images/transfer.jpg";
import account from "../images/account.jpg";

const History = () => {
  const [userID, setUserID] = useState();
  const [password, setPassword] = useState();
  //   console.log(userID);

  return (
    <div className="flex flex-col justify-center items-center md:mx-20 mt-2 mx-2">
      <div className="flex md:flex-row flex-col justify-between items-center w-full bg-red-600 p-4">
        <div className="flex flex-row">
          <Link to="/">
            <img src={boa_white} className="w-64" alt="Logo" />
          </Link>
          <p className="text-white text-xl ml-6">Online Banking</p>
        </div>
        <div className="flex flex-row">
          <p className="text-white text-xs mr-2 pr-2 border-r border-white">
            Bernard
          </p>
          <p className="text-white text-xs mr-2 pr-2 border-r border-white">
            Profile & Settings
          </p>
          <p className="text-white text-xs mr-2 pr-2 border-r border-white">
            Save Items
          </p>
          <p className="text-white text-xs mr-2">Sign Out</p>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <p className="text-black text-xl font-bold">
          BofA Checking: Account Activities
        </p>
        <p className="text-black text-lg">Balance summary: $4,000,000.00</p>
      </div>
      <div className="flex flex-col w-full my-4">
        <p className="text-black text-lg font-bold">All transaction</p>
        <div className="grid grid-cols-5 gap-4">
          <div>
            <p className="text-black text-xs font-bold">Posting date</p>
          </div>
          <div>
            <p className="text-black text-xs font-bold">Description</p>
          </div>
          <div>
            <p className="text-black text-xs font-bold">Status</p>
          </div>
          <div>
            <p className="text-black text-xs font-bold">Amount</p>
          </div>
          <div>
            <p className="text-black text-xs font-bold">Available Balance</p>
          </div>

          <div>
            <p className="text-black text-xs">11/1/2013</p>
          </div>
          <div>
            <p className="text-black text-xs">Bank Transfer #206076299</p>
          </div>
          <div>
            <p className="text-black text-xs">C</p>
          </div>
          <div>
            <p className="text-blue-500 text-xs">$10,000,000.00</p>
          </div>
          <div>
            <p className="text-black text-xs">-</p>
          </div>

          <div>
            <p className="text-black text-xs">9/3/2013</p>
          </div>
          <div>
            <p className="text-black text-xs">
              Online scheduled payment to CRD 4950 Confirmation #2060795209
            </p>
          </div>
          <div>
            <p className="text-black text-xs">C</p>
          </div>
          <div>
            <p className="text-black text-xs">-$41,100.00</p>
          </div>
          <div>
            <p className="text-black text-xs">-</p>
          </div>

          <div>
            <p className="text-black text-xs">09/7/2013</p>
          </div>
          <div>
            <p className="text-black text-xs">Bank Transfer #2060702739</p>
          </div>
          <div>
            <p className="text-black text-xs">C</p>
          </div>
          <div>
            <p className="text-blue-500 text-xs">$50,000,000.00</p>
          </div>
          <div>
            <p className="text-black text-xs">-</p>
          </div>

          <div>
            <p className="text-black text-xs">08/11/2013</p>
          </div>
          <div>
            <p className="text-black text-xs">
              Online scheduled payment to CRD 4950 Confirmation #2060743290
            </p>
          </div>
          <div>
            <p className="text-black text-xs">C</p>
          </div>
          <div>
            <p className="text-black text-xs">-$220,430.00</p>
          </div>
          <div>
            <p className="text-black text-xs">-</p>
          </div>

          <div>
            <p className="text-black text-xs">11/02/2014</p>
          </div>
          <div>
            <p className="text-black text-xs">Bank Transfer #3879505209</p>
          </div>
          <div>
            <p className="text-black text-xs">C</p>
          </div>
          <div>
            <p className="text-blue-500 text-xs">610,378,900.00</p>
          </div>
          <div>
            <p className="text-black text-xs">-</p>
          </div>

          <div>
            <p className="text-black text-xs">11/05/2014</p>
          </div>
          <div>
            <p className="text-black text-xs">
              Online scheduled payment to CRD 4950 Confirmation #2060798354
            </p>
          </div>
          <div>
            <p className="text-black text-xs">C</p>
          </div>
          <div>
            <p className="text-black text-xs">-$100,000.00</p>
          </div>
          <div>
            <p className="text-black text-xs">-</p>
          </div>

          <div>
            <p className="text-black text-xs">09/07/2014</p>
          </div>
          <div>
            <p className="text-black text-xs">
              Online scheduled payment to CRD 4950 Confirmation #2060795209
            </p>
          </div>
          <div>
            <p className="text-black text-xs">C</p>
          </div>
          <div>
            <p className="text-black text-xs">-$41,348.00</p>
          </div>
          <div>
            <p className="text-black text-xs">-</p>
          </div>

          <div>
            <p className="text-black text-xs">10/10/2014</p>
          </div>
          <div>
            <p className="text-black text-xs">Bank Transfer</p>
          </div>
          <div>
            <p className="text-black text-xs">C</p>
          </div>
          <div>
            <p className="text-blue-500 text-xs">$400,238,000.00</p>
          </div>
          <div>
            <p className="text-black text-xs">-</p>
          </div>

          <div>
            <p className="text-black text-xs">11/01/2015</p>
          </div>
          <div>
            <p className="text-black text-xs">Bank Transfer #0709698548</p>
          </div>
          <div>
            <p className="text-black text-xs">C</p>
          </div>
          <div>
            <p className="text-blue-500 text-xs">$790,654.00</p>
          </div>
          <div>
            <p className="text-black text-xs">-</p>
          </div>

          <div>
            <p className="text-black text-xs">22/06/2015</p>
          </div>
          <div>
            <p className="text-black text-xs">
              Online scheduled payment to CRD 4950 Confirmation #2067665533
            </p>
          </div>
          <div>
            <p className="text-black text-xs">C</p>
          </div>
          <div>
            <p className="text-black text-xs">-$300,765.00</p>
          </div>
          <div>
            <p className="text-black text-xs">-</p>
          </div>

          <div>
            <p className="text-black text-xs">11/05/2016</p>
          </div>
          <div>
            <p className="text-black text-xs">
              Online scheduled payment to CRD 4950 Confirmation #2060798354
            </p>
          </div>
          <div>
            <p className="text-black text-xs">C</p>
          </div>
          <div>
            <p className="text-black text-xs">-$100,000.00</p>
          </div>
          <div>
            <p className="text-black text-xs">-</p>
          </div>

          <div>
            <p className="text-black text-xs">09/07/2016</p>
          </div>
          <div>
            <p className="text-black text-xs">
              Online scheduled payment to CRD 4950 Confirmation #2060795209
            </p>
          </div>
          <div>
            <p className="text-black text-xs">C</p>
          </div>
          <div>
            <p className="text-black text-xs">-$41,348.00</p>
          </div>
          <div>
            <p className="text-black text-xs">-</p>
          </div>

          <div>
            <p className="text-black text-xs">10/01/2017</p>
          </div>
          <div>
            <p className="text-black text-xs">Bank Transfer</p>
          </div>
          <div>
            <p className="text-black text-xs">C</p>
          </div>
          <div>
            <p className="text-blue-500 text-xs">$400,238,000.00</p>
          </div>
          <div>
            <p className="text-black text-xs">-</p>
          </div>

          <div>
            <p className="text-black text-xs">11/11/2017</p>
          </div>
          <div>
            <p className="text-black text-xs">Bank Transfer #0709698548</p>
          </div>
          <div>
            <p className="text-black text-xs">C</p>
          </div>
          <div>
            <p className="text-blue-500 text-xs">$790,654.00</p>
          </div>
          <div>
            <p className="text-black text-xs">-</p>
          </div>

          <div>
            <p className="text-black text-xs">22/06/2017</p>
          </div>
          <div>
            <p className="text-black text-xs">
              Online scheduled payment to CRD 4950 Confirmation #2067665533
            </p>
          </div>
          <div>
            <p className="text-black text-xs">C</p>
          </div>
          <div>
            <p className="text-black text-xs">-$300,765.00</p>
          </div>
          <div>
            <p className="text-black text-xs">-</p>
          </div>

          <div>
            <p className="text-black text-xs">11/05/2018</p>
          </div>
          <div>
            <p className="text-black text-xs">
              Online scheduled payment to CRD 4950 Confirmation #2060798354
            </p>
          </div>
          <div>
            <p className="text-black text-xs">C</p>
          </div>
          <div>
            <p className="text-black text-xs">-$100,000.00</p>
          </div>
          <div>
            <p className="text-black text-xs">-</p>
          </div>

          <div>
            <p className="text-black text-xs">09/07/2018</p>
          </div>
          <div>
            <p className="text-black text-xs">
              Online scheduled payment to CRD 4950 Confirmation #2060795209
            </p>
          </div>
          <div>
            <p className="text-black text-xs">C</p>
          </div>
          <div>
            <p className="text-black text-xs">-$41,348.00</p>
          </div>
          <div>
            <p className="text-black text-xs">-</p>
          </div>

          <div>
            <p className="text-black text-xs">10/01/2018</p>
          </div>
          <div>
            <p className="text-black text-xs">Bank Transfer</p>
          </div>
          <div>
            <p className="text-black text-xs">C</p>
          </div>
          <div>
            <p className="text-blue-500 text-xs">$400,238,000.00</p>
          </div>
          <div>
            <p className="text-black text-xs">-</p>
          </div>

          <div>
            <p className="text-black text-xs">11/11/2019</p>
          </div>
          <div>
            <p className="text-black text-xs">Bank Transfer #0709698548</p>
          </div>
          <div>
            <p className="text-black text-xs">C</p>
          </div>
          <div>
            <p className="text-blue-500 text-xs">$790,654.00</p>
          </div>
          <div>
            <p className="text-black text-xs">-</p>
          </div>

          <div>
            <p className="text-black text-xs">22/06/2019</p>
          </div>
          <div>
            <p className="text-black text-xs">
              Online scheduled payment to CRD 4950 Confirmation #2067665533
            </p>
          </div>
          <div>
            <p className="text-black text-xs">C</p>
          </div>
          <div>
            <p className="text-black text-xs">-$300,765.00</p>
          </div>
          <div>
            <p className="text-black text-xs">-</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default History;
