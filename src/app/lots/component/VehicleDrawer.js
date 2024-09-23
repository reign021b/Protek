import React from "react";
import Image from "next/image";
import Navbar from "/src/app/components/Navbar"; // Adjust the import path based on your project structure

const VehicleDrawer = ({ openDrawer, closeDrawer }) => {
  if (!openDrawer) return null;

  return (
    <div
      className="bg-slate-800/45 w-screen h-screen fixed z-10 right-0 top-0"
      onClick={closeDrawer}
    >
      <div className="">
        <Navbar />
      </div>

      {/* Side bar */}
      <div
        className="w-[540px] absolute right-0 top-14 bottom-0 bg-white shadow-lg py-8 pl-4 pr-3 overflow-y-auto text-sm"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src="https://scngrphomkhxwdssipjb.supabase.co/storage/v1/object/public/vehicles/jeep_wrangler.jpg"
          alt="vehicle"
          width={494}
          height={383}
          className="rounded-2xl"
        />

        {/* Impound status */}
        <p className="pt-6 pb-2 px-5 text-gray-500">IMPOUND STATUS</p>
        <InfoRow label="Check in" value="07/29/2024 12:30" />
        <InfoRow label="Check out" value="N/A" />
        <InfoRow label="No. of days" value="10" />
        <InfoRow label="Total Payments" value="0" />
        <InfoRow label="Daily Rate" value="300" />
        <InfoRow label="Branch" value="Butuan City - Main" />
        <InfoRow label="Teller" value="Janine Doe" />
        <InfoRow label="Parking Lot" value="P1 - A2" />

        {/* Vehicle info */}
        <p className="px-5 pt-6 pb-2 text-gray-500">VEHICLE INFO</p>
        <InfoRow label="Make" value="Jeep" />
        <InfoRow label="Model" value="Wrangler" />
        <InfoRow label="Type" value="Midsize SUV" />
        <InfoRow label="Fuel Type" value="Gas" />
        <InfoRow label="Year" value="2022" />
        <InfoRow label="Plate Number" value="JBU-994" />
        <InfoRow label="Owner" value="Jane Doe" />

        {/* Vehicle status */}
        <p className="px-5 pt-6 pb-2 text-gray-500">VEHICLE STATUS</p>
        <InfoRow label="Mileage" value="18,000 KM" />

        <p className="px-5 pt-6 pb-2 text-gray-500">STATEMENT OF ACCOUNT</p>
        <p className="px-5 pt-6 pb-2 text-gray-500">VIOLATIONS</p>

        {/* Damages */}
        <p className="px-5 pt-6 pb-2 text-gray-500">DAMAGES</p>
        <p className="px-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        {/* Checkout */}
        <div className="flex items-center justify-center mb-5">
          <button className="rounded-lg bg-yellow-400 hover:bg-yellow-600 text-black font-medium shadow-md py-2.5 w-[450px] h-[44px] mt-5">
            <p className="">C H E C K O U T</p>
          </button>
        </div>
      </div>
    </div>
  );
};

const InfoRow = ({ label, value }) => (
  <div className="px-5 flex justify-between py-2">
    <p className="font-medium">{label}</p>
    <p className="text-slate-600">{value}</p>
  </div>
);

export default VehicleDrawer;
