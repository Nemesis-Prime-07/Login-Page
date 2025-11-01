
import React from 'react';
import { Event } from '../types';

interface EventCardProps {
  event: Event;
  isPast: boolean;
}

const CalendarIcon: React.FC<{className: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const LocationIcon: React.FC<{className: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export const EventCard: React.FC<EventCardProps> = ({ event, isPast }) => {
  const cardClasses = `bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl flex flex-col ${isPast ? 'filter grayscale' : ''}`;

  const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className={cardClasses}>
      <img className="h-48 w-full object-cover" src={event.image} alt={event.title} />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
        <p className="text-gray-600 text-sm flex-grow">{event.description}</p>
        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="flex items-center text-gray-500 mb-2">
            <CalendarIcon className="h-5 w-5 mr-2" />
            <span className="text-sm font-medium">{formattedDate} at {event.time}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <LocationIcon className="h-5 w-5 mr-2" />
            <span className="text-sm font-medium">{event.venue}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
