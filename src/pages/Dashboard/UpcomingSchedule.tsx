import React from 'react';
import { upcomingAppointments } from '../../data/appointmentData';
import AppointmentCard from '../../components/AppointmentCard';

const UpcomingSchedule: React.FC = () => {
  // Group appointments by day
  const appointmentsByDay = upcomingAppointments.reduce((acc, appointment) => {
    if (!acc[appointment.day]) {
      acc[appointment.day] = [];
    }
    acc[appointment.day].push(appointment);
    return acc;
  }, {} as Record<string, typeof upcomingAppointments>);

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">The Upcoming Schedule</h2>
      
      {Object.entries(appointmentsByDay).map(([day, appointments]) => (
        <div key={day} className="mb-6 last:mb-0">
          <h3 className="text-sm font-medium text-gray-500 mb-3">On {day}</h3>
          <div className="grid grid-cols-2 gap-4">
            {appointments.map((appointment) => (
              <AppointmentCard key={appointment.id} appointment={appointment} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;