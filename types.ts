
export interface Event {
  id: number;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD format
  time: string; // HH:MM AM/PM format
  venue: string;
  image: string;
}

export interface EventsData {
  [departmentCode: string]: Event[];
}
