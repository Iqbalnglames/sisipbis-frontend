import React from "react";
import { Link } from "react-router-dom";
import { IoIosBuild } from "react-icons/io";

const MaintananceList = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="border rounded-md w-[1225px] pb-8 mt-[24px] bg-slate-200 mx-[27px]">
          <h1 className="mt-5 ml-5 text-2xl font-logo">
            <IoIosBuild className="inline-block" /> SisipBis Maintenances
          </h1>
          <p className="mt-2 ml-5 mb-5">List Maintenance Armada</p>
          <div className="flex justify-center text-xl">
            <table className="table-fixed w-[95%]">
              <thead className="">
                <tr className="bg-gray-300">
                  <th className="px-4 py-2">Nomer</th>
                  <th className="px-4 py-2">Nomer Lambung</th>
                  <th className="px-4 py-2">Nama Chasis</th>
                  <th className="px-4 py-2">Status Armada</th>
                  <th className="px-4 py-2">Catatan</th>
                  <th className="px-4 py-2">Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-100">
                  <td className="border px-4 py-2">1</td>
                  <td className="border px-4 py-2">EP4</td>
                  <td className="border px-4 py-2">SCANIA K-410 IB</td>
                  <td className="text-[red] border px-4 py-2">NEED MAINTENANCE</td>
                  <td className="border px-4 py-2">SEGERA PERBAIKI AGAR BISA JALAN KEMBALI</td>
                  <td className="border px-4 py-2 text-center">
                    <Link to={'/detail-armada'}>
                      <button className="bg-blue-500 text-white p-2 rounded">
                        Show Detail
                      </button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default MaintananceList;
