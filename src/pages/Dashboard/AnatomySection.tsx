import React from 'react';
import { Search } from 'lucide-react';
import { healthStatuses } from '../../data/healthData';

/**
 * AnatomySection Component
 * 
 * A complex visualization component that displays human anatomy with health indicators
 * and status information. The component combines an anatomical image with interactive
 * health status indicators and a detailed status list.
 * 
 * Features:
 * - Interactive anatomy visualization
 * - Health status indicators with tooltips
 * - Progress bars for different health metrics
 * - Search functionality
 * - Responsive layout
 */
const AnatomySection: React.FC = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      {/* Search button in the top-right corner */}
      <div className="flex justify-end mb-4">
        <button className="text-gray-500 hover:text-gray-700">
          <Search className="h-5 w-5" />
        </button>
      </div>
      
      {/* Main content area with anatomy image and status list */}
      <div className="flex">
        {/* Left section: Anatomy visualization */}
        <div className="relative flex-1 flex justify-center">
          {/* Container for the anatomy image and its overlays */}
          <div className="relative w-56">
            {/* Base anatomy image */}
            <img 
              src="https://img.freepik.com/free-photo/human-body-frontal_1048-5345.jpg?ga=GA1.1.1957047751.1748114644&semt=ais_hybrid&w=740"
              alt="Human anatomy visualization" 
              className="w-full h-auto"
            />
            
            {/* Heart health indicator with tooltip */}
            <div className="absolute top-[25%] left-[63%]">
              <div className="relative">
                {/* Tooltip showing heart status */}
                <div className="absolute -top-3 -left-3 bg-danger-500 text-white text-xs p-1 rounded-md">
                  Healthy Heart
                </div>
                {/* Interactive indicator dot */}
                <div className="h-6 w-6 rounded-full bg-red-100 border-2 border-danger-500 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-danger-500"></div>
                </div>
              </div>
            </div>
            
            {/* Leg health indicator with tooltip */}
            <div className="absolute bottom-[28%] left-[38%]">
              <div className="relative">
                {/* Interactive indicator dot */}
                <div className="h-6 w-6 rounded-full bg-cyan-100 border-2 border-cyan-500 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-cyan-500"></div>
                </div>
                {/* Tooltip showing leg status */}
                <div className="absolute -bottom-7 -left-8 bg-cyan-500 text-white text-xs p-1 rounded-md">
                  Healthy Leg
                </div>
              </div>
            </div>
            
            {/* Image navigation dots */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-1">
              <div className="h-1.5 w-1.5 rounded-full bg-gray-300"></div>
              <div className="h-1.5 w-1.5 rounded-full bg-gray-300"></div>
              <div className="h-1.5 w-1.5 rounded-full bg-primary-500"></div>
              <div className="h-1.5 w-1.5 rounded-full bg-gray-300"></div>
              <div className="h-1.5 w-1.5 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </div>
        
        {/* Right section: Health status list */}
        <div className="w-52 space-y-6">
          {/* Map through health statuses to create status cards */}
          {healthStatuses.map((status) => (
            <div key={status.id} className="space-y-1">
              {/* Status header with icon and name */}
              <div className="flex items-center">
                <img 
                  src={status.iconUrl} 
                  alt={status.name} 
                  className="w-6 h-6 mr-2"
                />
                <span className="font-medium">{status.name}</span>
              </div>
              {/* Status date */}
              <div className="text-xs text-gray-500">
                Date: {status.date}
              </div>
              {/* Progress bar showing status percentage */}
              <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${status.statusColor}`} 
                  style={{ width: `${status.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Details button at the bottom */}
      <div className="mt-4 text-right">
        <button className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center justify-end w-full">
          Details
          <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AnatomySection;