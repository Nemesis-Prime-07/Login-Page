
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { DepartmentSection } from './components/DepartmentSection';
import { EventsData } from './types';
import { INITIAL_EVENTS_DATA, LOCAL_STORAGE_KEY } from './constants';

const App: React.FC = () => {
  const [eventsData, setEventsData] = useState<EventsData>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (storedData) {
        setEventsData(JSON.parse(storedData));
      } else {
        // If no data in localStorage, initialize with mock data.
        // The HOD login/management page would be responsible for updating this.
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(INITIAL_EVENTS_DATA));
        setEventsData(INITIAL_EVENTS_DATA);
      }
    } catch (error) {
      console.error("Failed to load or parse event data from localStorage:", error);
      // Fallback to initial data in case of parsing errors
      setEventsData(INITIAL_EVENTS_DATA);
    } finally {
      setLoading(false);
    }
  }, []);

  const departmentAcronyms = {
    "CS": "Computer Science",
    "EE": "Electrical Engineering",
    "ME": "Mechanical Engineering",
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-blue-800 text-white">
          <div className="absolute inset-0">
            <img 
              src="https://picsum.photos/1600/600?grayscale&blur=2" 
              alt="University Campus" 
              className="w-full h-full object-cover opacity-30" 
            />
          </div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">Welcome to Grand University</h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-blue-100">Excellence in Education, Innovation in Research.</p>
          </div>
        </div>

        {/* Events Section */}
        <div className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                University Events
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Discover what's happening across our departments.
              </p>
            </div>
            {loading ? (
              <div className="text-center text-gray-500">Loading events...</div>
            ) : (
              <div className="space-y-16">
                {Object.keys(eventsData).length > 0 ? (
                  Object.entries(eventsData).map(([dept, events]) => (
                    <DepartmentSection
                      key={dept}
                      departmentName={departmentAcronyms[dept as keyof typeof departmentAcronyms] || dept}
                      events={events}
                    />
                  ))
                ) : (
                  <div className="text-center py-12 px-4 border-2 border-dashed border-gray-300 rounded-lg">
                    <p className="text-lg text-gray-500">No events found.</p>
                    <p className="mt-2 text-sm text-gray-400">Please check back later or contact administration.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
