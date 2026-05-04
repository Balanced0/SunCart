import React from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { IoShieldOutline } from "react-icons/io5";
import { IoWater } from "react-icons/io5";

const SummerCare = () => {
  return (
    <div className="bg-[#F3F1ED]">
      <div className="container mx-auto p-4">
        <h3 className="text-center mb-8 pt-10 font-extrabold text-3xl">☀️ Summer Care Tips</h3>

        <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div>
            <div className="card bg-base-100 shadow-sm h-full">
              <div className="card-body flex flex-col justify-center items-center">
                <div className="bg-gradient-to-br from-orange-500 to-yellow-400 text-white p-4 rounded-full mb-3">
                    <MdOutlineLightMode size={32}/>
                </div>
                <h2 className="card-title font-bold">Stay Hydrated</h2>
                <p className="text-gray-400 text-center">
                  Drink at least 8 glasses of water daily during summer.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="card bg-base-100 shadow-sm h-full">
              <div className="card-body flex flex-col justify-center items-center">
                <div className="bg-gradient-to-br from-orange-500 to-yellow-400 text-white p-4 rounded-full mb-3">
                    <IoShieldOutline size={32}/>
                </div>
                <h2 className="card-title font-bold">Use Sunscreen</h2>
                <p className="text-gray-400 text-center">
                  Apply SPF 50+ every 2 hours when outdoors.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="card bg-base-100 shadow-sm h-full">
              <div className="card-body flex flex-col justify-center items-center">
                <div className="bg-gradient-to-br from-orange-500 to-yellow-400 text-white p-4 rounded-full mb-3">
                    <IoWater size={32}/>
                </div>
                <h2 className="card-title font-bold">Moisturize</h2>
                <p className="text-gray-400 text-center">
                  Keep skin hydrated with lightweight summer moisturizers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummerCare;
