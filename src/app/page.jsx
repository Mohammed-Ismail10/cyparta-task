'use client'

import Image from "next/image";
import cypartaLogo from '../Image/cypartal logo 1.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { useState } from "react";
import { Cairo } from 'next/font/google'
import { useFormik } from "formik";
import axios from "axios";
import { useRouter } from "next/navigation";
const cairo = Cairo({ subsets: ['latin'] })
export default function Login() {


  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');


  async function submitLogin(values) {
    try {
      const { data } = await axios.post(`https://cyparta-backend-gf7qm.ondigitalocean.app/api/login/`, values, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      localStorage.setItem('accessToken', data.access)
      router.push('/home/profile');
    } catch (error) {
      setError(error.response.data.detail)
    }
  }



  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: submitLogin
  });




  return (
    <>
      <section className="md:w-1/3 sm:w-1/2 h-screen mx-auto flex items-center">
        <div className="w-full">

          <div className="flex justify-center">
            <Image src={cypartaLogo} alt="cypartal Logo" />
          </div>

          <div className="shadow-md rounded-xl px-11 py-20 mt-10">
            <form onSubmit={formik.handleSubmit}>
              {error ? <div className="bg-red-400 rounded mb-4 p-3">{error}</div> : null}
              <div>
                <label className="block font-semibold text-neutral-800 text-[17px]" style={{ fontFamily: cairo.style.fontFamily }} htmlFor="email">Email Address</label>
                <input
                  className="rounded-xl w-full border border-gray-300 p-4 mt-2 bg-transparent"
                  type="email"
                  id="email"
                  placeholder="nouran@cyparta.com"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                />
              </div>
              <div className="mt-6 relative">
                <label className="block font-semibold text-neutral-800 text-[17px]" style={{ fontFamily: cairo.style.fontFamily }} htmlFor="password">Password</label>
                <input
                  className="rounded-xl w-full border border-gray-300 p-4 mt-2 bg-transparent"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="************"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}

                  required
                />

                {showPassword ?
                  <FontAwesomeIcon onClick={() => setShowPassword(!showPassword)} className="text-gray-500 absolute top-[50px] right-4 scale-x-[-1]" size="lg" icon={faEye} /> : <FontAwesomeIcon onClick={() => setShowPassword(!showPassword)} className="text-gray-500 absolute top-[50px] right-4 scale-x-[-1]" size="lg" icon={faEyeSlash} />}
              </div>


              <div className="text-center">
                <button type="submit" className="w-5/6 bg-neutral-800 px-5 py-4 rounded-xl text-lg text-white font-bold mt-24" style={{ fontFamily: cairo.style.fontFamily }}>Login</button>
              </div>
            </form>
          </div>

        </div>
      </section>
    </>
  );
}
