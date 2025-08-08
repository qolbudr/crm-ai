export interface AppointmentListType {
  id: string;
  name: string
  date: Date;
  type: "MEETING" | "CALL" | "FOLLOW_UP";
  summary: string;
  suggestion: string;
  contact: string;
}
