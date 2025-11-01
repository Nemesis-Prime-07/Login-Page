
import React from 'react';
import { Event } from '../types';
import { EventCard } from './EventCard';

interface DepartmentSectionProps {
  departmentName: string;
  events: Event[];
}

export const DepartmentSection: React.FC<DepartmentSectionProps> = ({ departmentName, events }) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Normalize today's date to midnight for accurate comparison

  const upcomingEvents = events
    .filter(event => new Date(event.date) >= today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    
  const pastEvents = events
    .filter(event => new Date(event.date) < today)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <section>
      <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-600 pb-2 mb-8">
        {departmentName}
      </h3>
      
      {/* Upcoming Events */}
      {upcomingEvents.length > 0 && (
        <div>
          <h4 className="text-xl font-semibold text-gray-700 mb-6">Upcoming Events</h4>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map(event => (
              <EventCard key={event.id} event={event} isPast={false} />
            ))}
          </div>
        </div>
      )}

      {/* Past Events */}
      {pastEvents.length > 0 && (
        <div className="mt-12">
          <h4 className="text-xl font-semibold text-gray-700 mb-6">Past Events</h4>
           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {pastEvents.map(event => (
              <EventCard key={event.id} event={event} isPast={true} />
            ))}
          </div>
        </div>
      )}

      {upcomingEvents.length === 0 && pastEvents.length === 0 && (
        <p className="text-gray-500">No events to display for this department.</p>
      )}
    </section>
  );
};
