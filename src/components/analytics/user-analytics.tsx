"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MeetingStatusChart } from "./meeting-status-chart";
import { SlotUtilizationChart } from "./slot-utilication-chart";
import { MeetingTrendsChart } from "./meeting-trend-chart";
import { NotificationsOverview } from "./notifications-overview";

interface UserAnalyticsProps {
  userId: number;
}

interface AnalyticsData {
  totalMeetingsHosted: number;
  totalMeetingsAttended: number;
  meetingStatusDistribution: { status: string; count: number }[];
  slotUtilization: { status: string; count: number }[];
  recentNotifications: { title: string; date: string }[];
  meetingTrends: { date: string; count: number }[];
}

export function UserAnalytics({ userId }: UserAnalyticsProps) {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(
    null
  );

  useEffect(() => {
    // In a real application, you would fetch this data from your API
    const fetchAnalyticsData = async () => {
      // Simulating API call
      const data: AnalyticsData = {
        totalMeetingsHosted: 45,
        totalMeetingsAttended: 30,
        meetingStatusDistribution: [
          { status: "Completed", count: 35 },
          { status: "Pending", count: 8 },
          { status: "Cancelled", count: 2 },
        ],
        slotUtilization: [
          { status: "Used", count: 45 },
          { status: "Available", count: 15 },
        ],
        recentNotifications: [
          { title: "New meeting request", date: "2023-06-01" },
          { title: "Meeting cancelled", date: "2023-05-30" },
          { title: "Reminder: Upcoming meeting", date: "2023-05-29" },
        ],
        meetingTrends: [
          { date: "2023-05-01", count: 5 },
          { date: "2023-05-08", count: 8 },
          { date: "2023-05-15", count: 12 },
          { date: "2023-05-22", count: 10 },
          { date: "2023-05-29", count: 15 },
        ],
      };
      setAnalyticsData(data);
    };

    fetchAnalyticsData();
  }, [userId]);

  if (!analyticsData) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container mx-auto'>
      <h1 className='text-4xl font-bold mb-6'>User Analytics</h1>
      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              Total Meetings Hosted
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>
              {analyticsData.totalMeetingsHosted}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              Total Meetings Attended
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>
              {analyticsData.totalMeetingsAttended}
            </div>
          </CardContent>
        </Card>
      </div>
      <div className='grid gap-6 mt-6 md:grid-cols-2'>
        <Card>
          <CardHeader>
            <CardTitle>Meeting Status Distribution</CardTitle>
            <CardDescription>Overview of your meeting statuses</CardDescription>
          </CardHeader>
          <CardContent className='pl-2'>
            <MeetingStatusChart
              data={analyticsData.meetingStatusDistribution}
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Slot Utilization</CardTitle>
            <CardDescription>
              How your time slots are being used
            </CardDescription>
          </CardHeader>
          <CardContent className='pl-2'>
            <SlotUtilizationChart data={analyticsData.slotUtilization} />
          </CardContent>
        </Card>
      </div>
      <div className='grid gap-6 mt-6 md:grid-cols-2'>
        <Card>
          <CardHeader>
            <CardTitle>Meeting Trends</CardTitle>
            <CardDescription>Your meeting activity over time</CardDescription>
          </CardHeader>
          <CardContent className='pl-2'>
            <MeetingTrendsChart data={analyticsData.meetingTrends} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Notifications</CardTitle>
            <CardDescription>Some of your recent notifications</CardDescription>
          </CardHeader>
          <CardContent className='pl-2'>
            <NotificationsOverview
              notifications={analyticsData.recentNotifications}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}