import React from 'react';
import { Dumbbell } from 'lucide-react';
import { FaTooth } from 'react-icons/fa';

export const calendar = {
  month: 'October',
  year: 2021,
  days: [
    { date: 25, isCurrentMonth: true, isToday: false, isWeekend: false, appointments: [
      { time: '10:00', backgroundColor: 'bg-blue-100', textColor: 'text-blue-700' },
      { time: '11:00', backgroundColor: 'bg-blue-100', textColor: 'text-blue-700' },
      { time: '12:00', backgroundColor: 'bg-blue-100', textColor: 'text-blue-700' }
    ] },
    { date: 26, isCurrentMonth: true, isToday: false, isWeekend: false, appointments: [
      { time: '08:00', backgroundColor: 'bg-blue-100', textColor: 'text-blue-700' },
      { time: '09:00', backgroundColor: 'bg-primary-200', textColor: 'text-primary-700' }
    ] },
    { date: 27, isCurrentMonth: true, isToday: false, isWeekend: false, appointments: [
      { time: '12:00', backgroundColor: 'bg-blue-100', textColor: 'text-blue-700' },
      { time: '13:00', backgroundColor: 'bg-blue-100', textColor: 'text-blue-700' }
    ] },
    { date: 28, isCurrentMonth: true, isToday: true, isWeekend: false, appointments: [
      { time: '10:00', backgroundColor: 'bg-blue-100', textColor: 'text-blue-700' },
      { time: '11:00', backgroundColor: 'bg-primary-200', textColor: 'text-primary-700' }
    ] },
    { date: 29, isCurrentMonth: true, isToday: false, isWeekend: false, appointments: [
      { time: '14:00', backgroundColor: 'bg-blue-100', textColor: 'text-blue-700' },
      { time: '16:00', backgroundColor: 'bg-blue-100', textColor: 'text-blue-700' }
    ] },
    { date: 30, isCurrentMonth: true, isToday: false, isWeekend: true, appointments: [
      { time: '12:00', backgroundColor: 'bg-primary-200', textColor: 'text-primary-700' },
      { time: '15:00', backgroundColor: 'bg-blue-100', textColor: 'text-blue-700' }
    ] },
    { date: 31, isCurrentMonth: true, isToday: false, isWeekend: true, appointments: [
      { time: '09:00', backgroundColor: 'bg-blue-100', textColor: 'text-blue-700' },
      { time: '10:00', backgroundColor: 'bg-blue-100', textColor: 'text-blue-700' }
    ] },
  ]
};

export const appointmentDetails = [
  {
    id: 1,
    title: 'Dentist',
    timeRange: '09:00-11:00',
    doctor: 'Dr. Cameron Williamson',
    bgColor: 'bg-card-blue',
    textColor: 'text-white',
    iconBgColor: 'bg-blue-500/30',
    icon: <FaTooth className="w-5 h-5 text-white" />
  },
  {
    id: 2,
    title: 'Physiotherapy Appointment',
    timeRange: '11:00-12:00',
    doctor: 'Dr. Kevin Jones',
    bgColor: 'bg-card-purple',
    textColor: 'text-white',
    iconBgColor: 'bg-purple-500/30',
    icon: <Dumbbell className="w-5 h-5 text-white" />
  }
];