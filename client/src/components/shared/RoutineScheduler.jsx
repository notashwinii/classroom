import React from 'react';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const WeeklyRoutineCalendar = ({ events, timeSlots }) => {
  const getEventForSlot = (day, time) =>
    events.find(e => e.day === day && e.startTime <= time && e.endTime > time);

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[800px] table-fixed">
        <thead>
          <tr>
            <th className="border p-2 bg-blue-600 text-center">Time</th>
            {days.map(day => (
              <th key={day} className="border p-2 bg-blue-600 text-center">{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timeSlots.map(time => (
            <tr key={time}>
              <td className="border p-2 font-semibold bg-gray-400 text-center">{time}</td>
              {days.map(day => {
                const event = getEventForSlot(day, time);
                return (
                  <td key={`${day}-${time}`} className={`border p-2 text-center ${event ? 'bg-indigo-500' : ''}`}>
                    {event && (
                      <div className="p-1 rounded">
                        <p className="font-bold">{event.subject}</p>
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
