'use client'
import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { GoBell } from "react-icons/go";
import { PiBriefcaseLight, PiPencilSimpleLine, PiLockKeyLight } from "react-icons/pi";
import { HiOutlineMail } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa6";
import { Tabs } from "flowbite-react";
import { TbNotes } from "react-icons/tb";
import { Breadcrumb } from "flowbite-react";
import { Lexend } from 'next/font/google'
const lexend = Lexend({ subsets: ['latin'] });


export default function Profile() {


  const [data, setData] = useState(null);

  async function getProfileData() {
    try {
      let { data } = await axios.get(`https://cyparta-backend-gf7qm.ondigitalocean.app/api/profile/`, { headers: { 'Authorization': `Bearer ${localStorage.getItem('accessToken')}` } });
      setData(data);
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    getProfileData();
  }, [])






  return (
    <>
      <section className='pl-10'>
        <div className='flex justify-end items-center gap-10 bg-lime-00 w-full'>
          <div className='size-9 bg-[#efeef0] rounded-lg flex justify-center items-center cursor-pointer'>
            <GoBell size={20} />
          </div>
          <div className='size-10 rounded-full overflow-hidden'>
            <Image src={data?.image} className='w-full' alt="person image" width={500} height={500} />
          </div>
        </div>


        <div className='my-3'>
          <Breadcrumb aria-label="Default breadcrumb example">
            <Breadcrumb.Item className='[&>span]:font-semibold [&>span]:text-base [&>span]:text-[#242223]'>Employees</Breadcrumb.Item>
            <Breadcrumb.Item className='[&>span]:font-semibold [&>span]:text-base [&>span]:text-[#242223]'>Profile</Breadcrumb.Item>
          </Breadcrumb>
        </div>


        <div className='flex justify-between items-center pb-4 border-b border-b-[#A2A1A8]'>
          <div className='flex gap-6 items-center'>
            <div className='size-24 rounded-lg overflow-hidden'>
              <Image src={data?.image} className='w-full' alt="person image" width={500} height={500} />
            </div>
            <div>
              <h2 className='font-semibold text-2xl text-[#242223]' style={{ fontFamily: lexend.style.fontFamily }}>{data?.name}</h2>
              <div className='flex items-center gap-4 font-light text-[#16151c]' style={{ fontFamily: lexend.style.fontFamily }}><PiBriefcaseLight size={25} /> {data?.bio}</div>
              <div className='flex items-center gap-4 font-light text-[#16151c]' style={{ fontFamily: lexend.style.fontFamily }}><HiOutlineMail size={25} /> {data?.email}</div>
            </div>
          </div>

          <div className='mr-20'>
            <button className='flex items-center gap-2.5 bg-[#242223] rounded-xl font-light text-white p-3' style={{ fontFamily: lexend.style.fontFamily }}><PiPencilSimpleLine size={25} /> Edit Profile</button>
          </div>
        </div>


        <div className='mt-1 w-3/4 bg-red-5'>
          <Tabs className='[&>button]:text-base [&>button]:font-semibold' aria-label="Tabs with underline" variant="underline">
            <Tabs.Item active title="Personal Information" icon={FaRegUser}>
              <div>
                <div className='flex border-b pb-3'>
                  <div className='w-1/2'>
                    <p className='font-light text-sm text-[#a2a1ab]' style={{ fontFamily: lexend.style.fontFamily }}>First Name</p>
                    <p className='font-light  text-[#16151c] mt-3' style={{ fontFamily: lexend.style.fontFamily }}>{data?.first_name}</p>
                  </div>
                  <div className='w-1/2'>
                    <p className='font-light text-sm text-[#a2a1ab]' style={{ fontFamily: lexend.style.fontFamily }}>Last Name</p>
                    <p className='font-light  text-[#16151c] mt-3' style={{ fontFamily: lexend.style.fontFamily }}>{data?.last_name}</p>
                  </div>
                </div>

                <div className='flex border-b pb-3 pt-4'>
                  <div className='w-1/2'>
                    <p className='font-light text-sm text-[#a2a1ab]' style={{ fontFamily: lexend.style.fontFamily }}>Mobile Number</p>
                    <p className='font-light  text-[#16151c] mt-3' style={{ fontFamily: lexend.style.fontFamily }}>{data?.phone}</p>
                  </div>
                  <div className='w-1/2'>
                    <p className='font-light text-sm text-[#a2a1ab]' style={{ fontFamily: lexend.style.fontFamily }}>Email Address</p>
                    <p className='font-light  text-[#16151c] mt-3' style={{ fontFamily: lexend.style.fontFamily }}>{data?.email}</p>
                  </div>
                </div>

                <div className='flex border-b pb-3 pt-4'>
                  <div className='w-1/2'>
                    <p className='font-light text-sm text-[#a2a1ab]' style={{ fontFamily: lexend.style.fontFamily }}>Date of Birth</p>
                    <p className='font-light  text-[#16151c] mt-3' style={{ fontFamily: lexend.style.fontFamily }}>{data?.date_joined}</p>
                  </div>
                  <div className='w-1/2'>
                    <p className='font-light text-sm text-[#a2a1ab]' style={{ fontFamily: lexend.style.fontFamily }}>Marital Status</p>
                    <p className='font-light  text-[#16151c] mt-3' style={{ fontFamily: lexend.style.fontFamily }}>Single</p>
                  </div>
                </div>

                <div className='flex border-b pb-3 pt-4'>
                  <div className='w-1/2'>
                    <p className='font-light text-sm text-[#a2a1ab]' style={{ fontFamily: lexend.style.fontFamily }}>Gender</p>
                    <p className='font-light  text-[#16151c] mt-3' style={{ fontFamily: lexend.style.fontFamily }}>Male</p>
                  </div>
                  <div className='w-1/2'>
                    <p className='font-light text-sm text-[#a2a1ab]' style={{ fontFamily: lexend.style.fontFamily }}>Nationality</p>
                    <p className='font-light  text-[#16151c] mt-3' style={{ fontFamily: lexend.style.fontFamily }}>Egypt</p>
                  </div>
                </div>

                <div className='flex border-b pb-3 pt-4'>
                  <div className='w-1/2'>
                    <p className='font-light text-sm text-[#a2a1ab]' style={{ fontFamily: lexend.style.fontFamily }}>Address</p>
                    <p className='font-light  text-[#16151c] mt-3' style={{ fontFamily: lexend.style.fontFamily }}>Maadi</p>
                  </div>
                  <div className='w-1/2'>
                    <p className='font-light text-sm text-[#a2a1ab]' style={{ fontFamily: lexend.style.fontFamily }}>City</p>
                    <p className='font-light  text-[#16151c] mt-3' style={{ fontFamily: lexend.style.fontFamily }}>Cairo</p>
                  </div>
                </div>

                <div className='flex border-b pb-3 pt-4'>
                  <div className='w-1/2'>
                    <p className='font-light text-sm text-[#a2a1ab]' style={{ fontFamily: lexend.style.fontFamily }}>State</p>
                    <p className='font-light  text-[#16151c] mt-3' style={{ fontFamily: lexend.style.fontFamily }}>Cairo</p>
                  </div>
                  <div className='w-1/2'>
                    <p className='font-light text-sm text-[#a2a1ab]' style={{ fontFamily: lexend.style.fontFamily }}>Zip Code</p>
                    <p className='font-light  text-[#16151c] mt-3' style={{ fontFamily: lexend.style.fontFamily }}>35624</p>
                  </div>
                </div>

                <div className='flex border-b pb-3 pt-4'>
                  <div className='w-1/2'>
                    <p className='font-light text-sm text-[#a2a1ab]' style={{ fontFamily: lexend.style.fontFamily }}>Work’s hours</p>
                    <p className='font-light  text-[#16151c] mt-3' style={{ fontFamily: lexend.style.fontFamily }}>180 hour</p>
                  </div>
                  <div className='w-1/2'>
                    <p className='font-light text-sm text-[#a2a1ab]' style={{ fontFamily: lexend.style.fontFamily }}>Salary/hour</p>
                    <p className='font-light  text-[#16151c] mt-3' style={{ fontFamily: lexend.style.fontFamily }}>300 EGP</p>
                  </div>
                  <div className='w-1/2'>
                    <p className='text-sm text-[#ee232f]' style={{ fontFamily: lexend.style.fontFamily }}>Total Salary</p>
                    <p className='font-light  text-[#16151c] mt-3' style={{ fontFamily: lexend.style.fontFamily }}>54000 EGP</p>
                  </div>
                </div>
              </div>
            </Tabs.Item>
            <Tabs.Item title="Professional Information" icon={PiBriefcaseLight}>

            </Tabs.Item>
            <Tabs.Item title="Documents" icon={TbNotes}>

            </Tabs.Item>
            <Tabs.Item title="Account Access" icon={PiLockKeyLight}>
            </Tabs.Item>
          </Tabs>
        </div>

      </section>
    </>
  )
}
