import React from 'react';
import { 
  Stethoscope, 
  Eye, 
  Heart, 
  Brain 
} from 'lucide-react';

export const upcomingAppointments = [
  {
    id: 1,
    day: 'Thursday',
    title: 'Health checkup complete',
    time: '11:00 AM',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-800',
    iconColor: 'text-blue-500',
    icon: <Stethoscope className="w-4 h-4" />
  },
  {
    id: 2,
    day: 'Thursday',
    title: 'Ophthalmologist',
    time: '14:00 PM',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-800',
    iconColor: 'text-purple-500',
    icon: <Eye className="w-4 h-4" />
  },
  {
    id: 3,
    day: 'Saturday',
    title: 'Cardiologist',
    time: '12:00 AM',
    bgColor: 'bg-red-50',
    textColor: 'text-red-800',
    iconColor: 'text-red-500',
    icon: <Heart className="w-4 h-4" />
  },
  {
    id: 4,
    day: 'Saturday',
    title: 'Neurologist',
    time: '16:00 PM',
    bgColor: 'bg-amber-50',
    textColor: 'text-amber-800',
    iconColor: 'text-amber-500',
    icon: <Brain className="w-4 h-4" />
  }
];