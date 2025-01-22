import React from 'react';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const timeSlots = [
  '7:00 AM', '8:00 AM', '9:00 AM', '11:00 AM', '12:00 PM',
  '2:00 PM', '3:00 PM', '4:00 PM'
];

const WeeklyRoutineCalendar = ({ events }) => {
  const getEventForSlot = (day, time) => {
    return events.find(event => 
      event.day === day && 
      event.startTime <= time && 
      event.endTime > time
    );
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[800px] table-fixed">
        <thead>
          <tr>
            <th className="border p-2 bg-gray-100 text-center">Time</th>
            {days.map(day => (
              <th key={day} className="border p-2 bg-gray-100 text-center">{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timeSlots.map(time => (
            <tr key={time}>
              <td className="border p-2 font-semibold text-center">{time}</td>
              {days.map(day => {
                const event = getEventForSlot(day, time);
                return (
                  <td key={`${day}-${time}`} className={`border p-2 text-center ${event ? 'bg-blue-100' : ''}`}>
                    {event && (
                      <div className="p-1 rounded">
                        <p className="text-bold">{event.subject}</p>
                        <p className="font-semibold">{event.className}</p>
                        <p className="text-sm">{event.room}</p>
                      </div>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WeeklyRoutineCalendar;
