import React from 'react';
import { activityData } from '../../data/activityData';

interface ChartDimensions {
  chartHeight: number;
  labelHeight: number;
  barAreaHeight: number;
  barGap: number;
  barWidth: string;
}

interface ActivityBarProps {
  value: number;
  maxValue: number;
  color: string;
  availableHeight: number;
}

interface DayColumnProps {
  day: {
    name: string;
    values: Array<{
      color: string;
      value: number;
    }>;
  };
  maxValue: number;
  barAreaHeight: number;
  barGap: number;
  barWidth: string;
  isLast: boolean;
}

// Custom hook for chart calculations
const useChartDimensions = (): ChartDimensions => {
  const chartHeight = 192;
  const labelHeight = 24;
  const barAreaHeight = 50;
  const barGap = 2;
  const barWidth = 'w-3';

  return {
    chartHeight,
    labelHeight,
    barAreaHeight,
    barGap,
    barWidth
  };
};

// Component for individual bar
const ActivityBar: React.FC<ActivityBarProps> = ({ value, maxValue, color, availableHeight }) => {
  const height = Math.max(1, (value / maxValue) * availableHeight);
  return (
    <div
      className={`w-full rounded-sm ${color}`}
      style={{ height: `${height}px` }}
    />
  );
};

// Component for day column
const DayColumn: React.FC<DayColumnProps> = ({ day, maxValue, barAreaHeight, barGap, barWidth, isLast }) => {
  const totalGapHeight = (day.values.length - 1) * barGap;
  const availableHeight = Math.max(0, barAreaHeight - totalGapHeight);

  return (
    <div className="flex flex-col items-center justify-end h-full relative pb-[24px]">
      {!isLast && (
        <div className="absolute inset-y-0 top-0 bottom-[24px] right-0 w-px bg-gray-200" />
      )}
      <div className={`relative flex flex-col-reverse gap-[2px] ${barWidth} flex-grow justify-end`}>
        {day.values.map((item, idx) => (
          <ActivityBar
            key={idx}
            value={item.value}
            maxValue={maxValue}
            color={item.color}
            availableHeight={availableHeight}
          />
        ))}
      </div>
      <span className="text-xs text-gray-500 absolute bottom-0 left-1/2 transform -translate-x-1/2">
        {day.name}
      </span>
    </div>
  );
};

// Main component
const ActivitySection: React.FC = () => {
  const dimensions = useChartDimensions();
  const maxValue = Math.max(...activityData.flatMap(day => day.values.map(v => v.value)));

  const activityTypes = [
    { color: 'bg-cyan-400', label: 'Check-ups' },
    { color: 'bg-primary-400', label: 'Appointments' },
    { color: 'bg-green-400', label: 'Tests' }
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Activity</h2>
        <span className="text-sm text-gray-500">
          3 appointment on this week
        </span>
      </div>

      <div className="flex flex-col">
        <div className="flex h-48 items-end relative px-3">
          <div className="absolute bottom-[24px] left-0 right-0 h-px bg-gray-300 mx-3" />

          <div className="grid grid-cols-7 gap-x-3 w-full h-full items-end">
            {activityData.map((day, index) => (
              <DayColumn
                key={day.name}
                day={day}
                maxValue={maxValue}
                barAreaHeight={dimensions.barAreaHeight}
                barGap={dimensions.barGap}
                barWidth={dimensions.barWidth}
                isLast={index === activityData.length - 1}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center space-x-6 mt-4">
          {activityTypes.map((type, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-sm ${type.color}`} />
              <span className="text-xs text-gray-500">{type.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivitySection;