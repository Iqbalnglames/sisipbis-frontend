import React from "react";
import { IoIosBuild } from "react-icons/io";
import { Link } from "react-router-dom";

const DetailArmada = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="border rounded-md w-[1225px] pb-8 mt-[24px] bg-slate-200 mx-[27px]">
          <h1 className="mt-5 ml-5 text-2xl font-logo">
            <IoIosBuild className="inline-block" /> SisipBis Maintenances
          </h1>
          <p className="mt-2 ml-5 mb-5">Detail Akun</p>
          <div className="flex justify-center text-xl">
            <img src="#" width="200px" alt="gambar foto armada" />
            <div className="px-10">
              <tr className="flex">
                <th className="px-4 py-2">Nomer Lambung :</th>
                <td className="px-4 py-2"> EP4</td>
              </tr>
              <tr className="flex">
                <th className="px-4 py-2">Nama Chasis : </th>
                <td className="px-4 py-2">SCANIA K-410 IB</td>
              </tr>
              <tr className="flex">
                <th className="px-4 py-2">Status :</th>
                <td className="px-4 py-2">NEED MAINTENANCE</td>
              </tr>
              <tr className="flex">
                <th className="px-4 py-2">Catatan :</th>
                <td className="px-4 py-2">
                  SEGERA PERBAIKI AGAR BISA JALAN KEMBALI
                </td>
              </tr>
              <tr className="flex">
                <th className="px-2 py-4">
                  <button className="p-2 bg-gray-800 hover:bg-gray-600 text-white rounded-md">
                    Update Profile
                  </button>
                </th>
                <th className="px-2 py-4">
                  <button className="p-2 bg-red-800 hover:bg-gray-600 text-white rounded-md">
                    Delete User
                  </button>
                </th>
              </tr>
            </div>
          </div>
          <Link to={"/maintenances"}>
            <button className="ml-10 mt-4 mb-4 p-2 rounded bg-[#D9D9D9] hover:bg-[#bfbfbf]">
              Kembali
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default DetailArmada;
