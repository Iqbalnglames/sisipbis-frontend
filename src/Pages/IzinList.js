import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineClipboardCheck } from "react-icons/hi";

const IzinList = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="border rounded-md w-[1225px] pb-8 mt-[24px] bg-slate-200 mx-[27px]">
          <h1 className="mt-5 ml-5 text-2xl font-logo">
            <HiOutlineClipboardCheck className="inline-block" /> SisipBis Izin
          </h1>
          <p className="mt-2 ml-5">List Perizinan Pegawai</p>
          <Link to={"/list-absen"}>
            <button className="ml-10 mt-4 mb-4 p-2 rounded bg-[#D9D9D9] hover:bg-[#bfbfbf]">
              Kembali ke List Absensi
            </button>
          </Link>
          <div className="flex justify-center text-xl">
            <table className="table-auto w-[95%]">
              <thead className="">
                <tr className="bg-gray-300">
                  <th className="px-4 py-2">Nomer</th>
                  <th className="px-4 py-2">Nama</th>
                  <th className="px-4 py-2">Divisi</th>
                  <th className="px-4 py-2">Mulai Izin</th>
                  <th className="px-4 py-2">Akhir Izin</th>
                  <th className="px-4 py-2">Alasan</th>
                  <th className="px-4 py-2">Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-100">
                  <td className="border px-4 py-2">1</td>
                  <td className="border px-4 py-2">Muhammad Iqbal</td>
                  <td className="border px-4 py-2">montir</td>
                  <td className="border px-4 py-2">11-02-2023</td>
                  <td className="border px-4 py-2">12-03-2023</td>
                  <td className="border px-4 py-2">sakit keras</td>
                  <td className="border px-4 py-2 text-center">
                    <Link>
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
export default IzinList
