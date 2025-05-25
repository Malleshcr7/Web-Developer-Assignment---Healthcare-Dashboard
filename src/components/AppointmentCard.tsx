import React from 'react';
import { AppointmentType } from '../types';

/**
 * Props interface for the AppointmentCard component
 * @property {AppointmentType} appointment - The appointment data to display
 */
interface AppointmentCardProps {
  appointment: AppointmentType;
}

/**
 * AppointmentCard Component
 * 
 * A reusable card component that displays appointment information in a visually
 * appealing format. The component uses dynamic styling based on the appointment type.
 * 
 * Features:
 * - Dynamic background color based on appointment type
 * - Title and time display
 * - Custom icon with dynamic color
 * - Responsive layout with flex positioning
 * 
 * @param {AppointmentCardProps} props - The component props
 * @returns {JSX.Element} A styled appointment card
 */
const AppointmentCard: React.FC<AppointmentCardProps> = ({ appointment }) => {
  return (
    // Card container with dynamic background color
    <div className={`${appointment.bgColor} rounded-lg p-4`}>
      {/* Content wrapper with flex layout */}
      <div className="flex justify-between">
        {/* Left section: Title and time */}
        <div>
          <h3 className={`font-medium ${appointment.textColor}`}>{appointment.title}</h3>
          <p className={`text-sm ${appointment.textColor} opacity-80`}>
            {appointment.time}
          </p>
        </div>
        {/* Right section: Icon with dynamic color */}
        <div className={`${appointment.iconColor} h-6 w-6 flex items-center justify-center`}>
          {appointment.icon}
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;