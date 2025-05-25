export interface AppointmentType {
  id: number;
  day: string;
  title: string;
  time: string;
  bgColor: string;
  textColor: string;
  iconColor: string;
  icon: React.ReactNode;
}

export interface HealthStatusType {
  id: number;
  name: string;
  date: string;
  percentage: number;
  statusColor: string;
  iconUrl: string;
}

export interface CalendarDayType {
  date: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  isWeekend: boolean;
  appointments: {
    time: string;
    backgroundColor: string;
    textColor: string;
  }[];
}

export interface CalendarType {
  month: string;
  year: number;
  days: CalendarDayType[];
}

export interface AppointmentDetailType {
  id: number;
  title: string;
  timeRange: string;
  doctor: string;
  bgColor: string;
  textColor: string;
  iconBgColor: string;
  icon: React.ReactNode;
}