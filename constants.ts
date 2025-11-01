
import { EventsData } from './types';

export const LOCAL_STORAGE_KEY = 'collegeEvents';

// This mock data simulates what would be managed by HODs through the login portal.
// It is used to initially populate localStorage if it's empty.
export const INITIAL_EVENTS_DATA: EventsData = {
  "CS": [
    {
      "id": 1,
      "title": "AI & Future Tech Summit",
      "description": "An exciting summit exploring the frontiers of Artificial Intelligence and its impact on future technologies. Guest speakers from leading tech companies.",
      "date": getFutureDate(25),
      "time": "09:00 AM",
      "venue": "Main Auditorium",
      "image": "https://picsum.photos/seed/cs_event1/400/300"
    },
    {
      "id": 2,
      "title": "Annual Hackathon 'CodeStorm'",
      "description": "24-hour coding competition. Build innovative solutions and win exciting prizes. Open to all departments.",
      "date": getFutureDate(60),
      "time": "10:00 AM",
      "venue": "CS Department Labs",
      "image": "https://picsum.photos/seed/cs_event2/400/300"
    },
    {
      "id": 3,
      "title": "Cybersecurity Workshop 2023",
      "description": "A workshop focused on the fundamentals of cybersecurity and ethical hacking. Hosted by industry experts.",
      "date": getPastDate(45),
      "time": "02:00 PM",
      "venue": "Seminar Hall C",
      "image": "https://picsum.photos/seed/cs_event3/400/300"
    }
  ],
  "EE": [
    {
      "id": 4,
      "title": "Robotics & Automation Expo",
      "description": "Showcase of the latest student projects in robotics and automation. Includes a live drone competition.",
      "date": getFutureDate(35),
      "time": "11:00 AM",
      "venue": "Engineering Block B",
      "image": "https://picsum.photos/seed/ee_event1/400/300"
    },
    {
      "id": 5,
      "title": "Renewable Energy Seminar 2023",
      "description": "A seminar discussing the future of renewable energy sources and sustainable power systems.",
      "date": getPastDate(80),
      "time": "03:00 PM",
      "venue": "Auditorium A",
      "image": "https://picsum.photos/seed/ee_event2/400/300"
    }
  ],
  "ME": [
    {
      "id": 6,
      "title": "Automotive Design Challenge",
      "description": "A competition for students to design and model the next generation of eco-friendly vehicles.",
      "date": getFutureDate(50),
      "time": "09:30 AM",
      "venue": "Mechanical Workshop",
      "image": "https://picsum.photos/seed/me_event1/400/300"
    },
    {
        "id": 7,
        "title": "3D Printing & Prototyping Workshop 2023",
        "description": "Hands-on workshop covering the basics of 3D printing and rapid prototyping techniques.",
        "date": getPastDate(20),
        "time": "01:00 PM",
        "venue": "Design Studio 4",
        "image": "https://picsum.photos/seed/me_event2/400/300"
    }
  ]
};

// Helper functions to generate dynamic dates for demonstration
function getFutureDate(daysInFuture: number): string {
  const date = new Date();
  date.setDate(date.getDate() + daysInFuture);
  return date.toISOString().split('T')[0];
}

function getPastDate(daysInPast: number): string {
  const date = new Date();
  date.setDate(date.getDate() - daysInPast);
  return date.toISOString().split('T')[0];
}
