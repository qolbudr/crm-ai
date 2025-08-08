import type { CallSimulationType } from "../types/call_simulation_type";

export const callSimulation : CallSimulationType[] = [
    {
        transcript: "John: Hi, I wanted to know more about your CRM product launch.",
        isMe: false
    },
    {
        transcript: "Me: Sure, Alex! Our CRM product is launching next month. Would you like a demo?",
        isMe: true
    },
    {
        transcript: "John: Yes, that would be great! When can we schedule it?",
        isMe: false
    },
    {
        transcript: "Me: How about this Friday at 3 PM?",
        isMe: true
    },
    {
        transcript: "John: Perfect! Looking forward to it.",
        isMe: false
    },
    {
        transcript: "Me: Great! I'll send you a calendar invite.",
        isMe: true
    },
    {
        transcript: "John: Thanks! See you then.",
        isMe: false
    },
    {
        transcript: "Me: You're welcome! If you have any questions before the demo, feel free to ask.",
        isMe: true
    }
]