import type { AppointmentListType } from "../types/appointment_list_type";

export const appointmentList: AppointmentListType[] = [
    {
        id: "1",
        name: "John Doe",
        date: new Date("2023-10-20T09:00:00+00:00"),
        type: "MEETING",
        summary: "John Doe shows high interest in product A. Time to follow up with a price proposal.",
        suggestion: "Hello Mr. Budi, thank you for your interest in product A. I have prepared a special proposal for PT Maju Jaya...",
        contact: "PT. Maju Jaya"
    },
    {
        id: "2",
        name: "Jane Smith",
        date: new Date("2023-10-22T11:30:00+00:00"),
        type: "CALL",
        summary: "Jane Smith is interested in our new service offerings. Schedule a follow-up call.",
        suggestion: "Hi Jane, I hope you're well! I wanted to discuss our new service offerings that might interest you...",
        contact: "PT. Sejahtera Abadi"
    },
    {
        id: "3",
        name: "Alice Johnson",
        date: new Date("2023-10-25T14:00:00+00:00"),
        type: "FOLLOW_UP",
        summary: "Alice Johnson has questions about her recent order. Provide detailed answers.",
        suggestion: "Dear Alice, thank you for reaching out regarding your order. Here are the details you requested...",
        contact: "PT. Mekar Jaya"
    }
]