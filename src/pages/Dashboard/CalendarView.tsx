import React from 'react';
import { calendar, appointmentDetails } from '../../data/calendarData';

const CalendarView: React.FC = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">October 2021</h2>
      </div>
      
      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1 mb-6">
        {/* Calendar headers */}
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
          <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
            {day}
          </div>
        ))}
        
        {/* Calendar cells */}
        {calendar.days.map((day) => (
          <div 
            key={day.date} 
            className={`rounded-lg p-2 ${
              day.isToday ? 'bg-primary-100 border border-primary-300' : 
              day.isWeekend ? 'bg-gray-50' : 'bg-white'
            } ${day.isCurrentMonth ? '' : 'opacity-40'}`}
          >
            <div className="text-center mb-1">
              <span className={`text-sm ${day.isToday ? 'font-semibold text-primary-700' : 'text-gray-700'}`}>
                {day.date}
              </span>
            </div>
            
            {/* Time slots */}
            <div className="space-y-1">
              {day.appointments.map((app, idx) => (
                <div 
                  key={idx}
                  className={`text-[10px] text-center py-0.5 px-1 rounded ${app.backgroundColor} ${app.textColor}`}
                >
                  {app.time}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Appointment cards */}
      <div className="grid grid-cols-2 gap-4">
        {appointmentDetails.map((appointment) => (
          <div 
            key={appointment.id} 
            className={`${appointment.bgColor} ${appointment.textColor} p-4 rounded-lg`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold mb-1">{appointment.title}</h3>
                <p className="text-sm opacity-90">
                  {appointment.timeRange}
                </p>
                <p className="text-sm opacity-90">
                  {appointment.doctor}
                </p>
              </div>
              <div className={`${appointment.iconBgColor} p-2 rounded-md`}>
                {appointment.icon}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;