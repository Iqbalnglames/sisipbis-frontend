import React from "react";
import { FaBus } from "react-icons/fa";

const Login = () => {
    const inputStyle ="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";
    const alertStyle = "bg-red-300 text-red-600 p-2 rounded-sm";

  return (
    <>
      <div className="relative p-[36px] pt-[10%] z-1 bg-blur">
        <div className="flex justify-center shadow-lg bg-slate-300 mx-[65vh] px-4 py-10 rounded-md">
          <form
            onSubmit={''}
            encType="multipart/form-data"
            className="text-base">
            <div className="flex justify-center border-b-2 pb-3 border-black">
              <h1 className="mb-2 text-bold font-component2 ">
                <FaBus className="inline-block" /> Login Ke SisipBis
              </h1>
            </div>
            {/* {validation.message && (
              <div className={alertStyle}>{validation.message}</div>
            )} */}

            <label className="block">Username</label>
            <input
              type="text"
              placeholder="Username untuk akun pegawai baru"
              className={inputStyle}
            />
            {/* {validation.username && (
              <div className={alertStyle}>{validation.username[0]}</div>
            )} */}

            <label className="block">Password</label>
            <input
              type="password"
              placeholder="Password pengguna"
              className={inputStyle}
            />
            {/* {validation.password && (
              <div className={alertStyle}>{validation.password[0]}</div>
            )} */}

            <button
              type="submit"
              className="mt-4 p-2 rounded bg-[#D9D9D9] hover:bg-[#bfbfbf]">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
