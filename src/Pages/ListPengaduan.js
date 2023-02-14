import React from "react";
import { Link } from "react-router-dom";
import { MdReportProblem } from "react-icons/md";

const ListPengaduan = () => {
    return(
        <>
        <div className="flex justify-center">
        <div className="border rounded-md w-[1225px] pb-8 mt-[24px] bg-slate-200 mx-[27px]">
          <h1 className="mt-5 ml-5 text-2xl font-logo">
            <MdReportProblem className="inline-block" /> SisipBis Pengaduan
          </h1>
          <p className="mt-2 ml-5 mb-5">
Daftar Pengaduan pegawai selama bekerja
          </p>        
          <div className="flex justify-center text-xl">
            <table className="table-fixed w-[95%]">
              <thead className="">
                <tr  className="bg-gray-300">
                  <th className="px-4 py-2">Nomer</th>
                  <th className="px-4 py-2">Nama Pelapor</th>
                  <th className="px-4 py-2">divisi</th>
                  <th className="px-4 py-2">laporan</th>
                  <th className="px-4 py-2">Status Pengaduan</th>
                  <th className="px-4 py-2">Aksi</th>
                </tr>
              </thead>
                  <tbody>                   
                        <tr className="bg-gray-100">
                          <td className="border px-4 py-2">1</td>
                          <td className="border px-4 py-2">Muhammad Iqbal</td>
                          <td className="border px-4 py-2">montir</td>
                          <td className="border px-4 py-2">ada badai nerjang tumpukan ban bus</td>
                          <td className="border px-4 py-2">Dalam pemeriksaan</td>
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
    )
}
export default ListPengaduan