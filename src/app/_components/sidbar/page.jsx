'use client'
import Image from 'next/image.js'
import React from 'react'
import cypartaLogo from '../../../Image/cypartal logo 1.png'
import { Lexend } from 'next/font/google'
const lexend = Lexend({ subsets: ['latin'] });
import { Sidebar } from "flowbite-react";
import { GrGroup } from "react-icons/gr";
import { CiDollar, CiUser } from "react-icons/ci";
import { PiCalendarCheckLight, PiScroll } from "react-icons/pi";
import { BsClipboardCheck, BsGrid1X2 } from "react-icons/bs";
import { IoWalletOutline } from "react-icons/io5";
import Link from 'next/link.js'
import { usePathname } from 'next/navigation.js'


export default function Sidebarr() {



  const pathName = usePathname();











  return (
    <>
      <div className='w-1/4 shadow-sm border rounded-3xl overflow-hidden pt-10'>
        <div className='flex justify-center'>
          <Image src={cypartaLogo} alt="cyparta logo" className='w-1/2' />
        </div>
        <div>
          <Sidebar className='bg-transparent w-full [&>div]:px-0' aria-label="Sidebar with multi-level dropdown example">
            <Sidebar.Items >
              <Sidebar.ItemGroup>

                <Sidebar.Item
                  className={pathName === '/home/dashboard' ? 'bg-[#f9eaeb] font-medium pl-28 mt-10 border-l-4 border-l-[#ec232b] rounded-r-3xl py-3 rounded-l-none hover:bg-[#f9eaeb] text-[#EE232F]' :
                    "hover:bg-[#f9eaeb] text-[#242223] font-medium pl-28 mt-10 rounded-r-3xl py-3 rounded-l-none"}
                  style={{ fontFamily: lexend.style.fontFamily }}
                  href="/home/dashboard"
                  icon={BsGrid1X2}
                  as={Link}>
                  Dashboard
                </Sidebar.Item>

                <Sidebar.Collapse
                  className={pathName === '/home/profile' ? 'bg-[#f9eaeb] font-medium pl-28 mt-10 border-l-4 border-l-[#ec232b] rounded-r-3xl py-3 rounded-l-none hover:bg-[#f9eaeb] text-[#EE232F]' :
                    "hover:bg-[#f9eaeb] text-[#242223] font-medium pl-28 mt-10 rounded-r-3xl py-3 rounded-l-none"}
                  style={{ fontFamily: lexend.style.fontFamily }}
                  icon={GrGroup}
                  label="Employees">
                  <Sidebar.Item
                    className={pathName === '/home/profile' ? 'text-[#7b7b7b] pl-[8.5rem] font-light [&>span]:flex [&>span]:items-center' :
                      'pl-[8.5rem] font-light text-[#242223]  [&>span]:flex [&>span]:items-center'}
                    style={{ fontFamily: lexend.style.fontFamily }}
                    href="/home/profile" as={Link}>
                    <CiUser className='text-xl mr-3' /> Profile
                  </Sidebar.Item>
                  <Sidebar.Item
                    className={pathName === '/home/attendance' ? 'text-[#7b7b7b] pl-[8.5rem] font-light [&>span]:flex [&>span]:items-center' :
                      'pl-[8.5rem] font-light text-[#242223]  [&>span]:flex [&>span]:items-center'}
                    style={{ fontFamily: lexend.style.fontFamily }}
                    href="/home/attendance" as={Link}>
                    <PiCalendarCheckLight className='text-xl mr-3' />Attendance
                  </Sidebar.Item>
                  <Sidebar.Item
                    className={pathName === '/home/tasks' ? 'text-[#7b7b7b] pl-[8.5rem] font-light [&>span]:flex [&>span]:items-center' :
                      'pl-[8.5rem] font-light text-[#242223]  [&>span]:flex [&>span]:items-center'}
                    style={{ fontFamily: lexend.style.fontFamily }}
                    href="/home/tasks" as={Link}>
                    <PiScroll className='text-xl mr-3' /> Tasks</Sidebar.Item>
                </Sidebar.Collapse>

                <Sidebar.Item
                  className={pathName === '/home/pyroll' ? 'bg-[#f9eaeb] font-medium pl-28 mt-10 border-l-4 border-l-[#ec232b] rounded-r-3xl py-3 rounded-l-none hover:bg-[#f9eaeb] text-[#EE232F]' :
                    "hover:bg-[#f9eaeb] text-[#242223] font-medium pl-28 mt-10 rounded-r-3xl py-3 rounded-l-none"}
                  style={{ fontFamily: lexend.style.fontFamily }}
                  href="/home/pyroll"
                  icon={CiDollar}
                  as={Link}>
                  Pyroll
                </Sidebar.Item>

                <Sidebar.Collapse
                  className={pathName === '/home/holidays' ? 'bg-[#f9eaeb] font-medium pl-28 mt-10 border-l-4 border-l-[#ec232b] rounded-r-3xl py-3 rounded-l-none hover:bg-[#f9eaeb] text-[#EE232F]' :
                    "hover:bg-[#f9eaeb] text-[#242223] font-medium pl-28 mt-10 rounded-r-3xl py-3 rounded-l-none"}
                  style={{ fontFamily: lexend.style.fontFamily }}
                  icon={BsClipboardCheck}
                  label="Holidays">
                </Sidebar.Collapse>

                <Sidebar.Item
                  className={pathName === '/home/payment' ? 'bg-[#f9eaeb] font-medium pl-28 mt-10 border-l-4 border-l-[#ec232b] rounded-r-3xl py-3 rounded-l-none hover:bg-[#f9eaeb] text-[#EE232F]' :
                    "hover:bg-[#f9eaeb] text-[#242223] font-medium pl-28 mt-10 rounded-r-3xl py-3 rounded-l-none"}
                  style={{ fontFamily: lexend.style.fontFamily }}
                  href="/home/payment"
                  icon={IoWalletOutline}
                  as={Link}>
                  Advanced Payment
                </Sidebar.Item>

              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
        </div>
      </div>
    </>
  )
}
