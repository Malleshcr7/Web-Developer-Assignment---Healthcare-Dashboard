import React from 'react';
import AnatomySection from './AnatomySection';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivitySection from './ActivitySection';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Dashboard Component
 * 
 * This is the main dashboard view that organizes and displays different sections
 * of the application. It uses a responsive grid layout that adapts to different screen sizes.
 * 
 * Layout Structure:
 * - Header with title and navigation controls
 * - Two-column grid layout on larger screens (lg:grid-cols-2)
 * - Single column on mobile devices (grid-cols-1)
 */
const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        {/* Navigation Controls */}
        <div className="flex items-center space-x-4">
          {/* Time Period Selector */}
          <div className="flex items-center">
            <button className="px-3 py-1.5 rounded-md text-sm text-gray-700 bg-white hover:bg-gray-100 flex items-center">
              This Week
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
          </div>
          {/* Navigation Arrows */}
          <div className="flex items-center space-x-1">
            <button className="p-1.5 rounded-md text-gray-500 hover:bg-gray-100">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button className="p-1.5 rounded-md text-gray-500 hover:bg-gray-100">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          <AnatomySection />
          <ActivitySection />
        </div>
        {/* Right Column */}
        <div className="space-y-6">
          <CalendarView />
          <UpcomingSchedule />
        </div>
      </div>
    </div>
  );
};

/**
 * ChevronDown Component
 * 
 * A custom SVG icon component for the dropdown indicator.
 * This is implemented as a separate component to maintain consistency
 * and reusability across the application.
 * 
 * @param {string} className - Optional CSS classes to apply to the SVG
 */
const ChevronDown = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
      clipRule="evenodd"
    />
  </svg>
);

export default Dashboard;