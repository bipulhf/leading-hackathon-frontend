"use client";

import { CalendarDays, BarChart2, Search, TimerIcon } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { SidebarInset } from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import { NotificationList } from "../notification/notification-list";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex h-screen'>
      <Sidebar className='basis-[30%]'>
        <SidebarHeader>
          <Image
            src={"/images/logo.jpeg"}
            alt='logo'
            width={150}
            height={150}
            className='mx-auto my-5'
          />
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href='/dashboard'>
                  <CalendarDays className='mr-2 h-4 w-4' />
                  Schedules
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href='/slot'>
                  <TimerIcon className='mr-2 h-4 w-4' />
                  Slot
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href='/analytics'>
                  <BarChart2 className='mr-2 h-4 w-4' />
                  Analytics
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href='/search'>
                  <Search className='mr-2 h-4 w-4' />
                  Search
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <SidebarInset className='basis-[70%]'>
        <div className='container py-4'>
          <div className='flex justify-between w-[1620px]'>
            <SidebarTrigger className='mb-6' />
            <NotificationList />
          </div>
          {children}
        </div>
      </SidebarInset>
    </div>
  );
}
