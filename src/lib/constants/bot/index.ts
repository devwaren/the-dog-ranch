const time = new Date().toLocaleString(); // Correctly formats current date & time

const vectors: Record<string, string> = {
    price: "Our membership packages come with flexible pricing. Click below to view details and apply.",
    address: "📍 The Dog Ranch Training Ground is located at 141 Narra Street, Barangay Dagatan, Lipa City.",
    contact: "📞 You can reach us at:\n\nTrainer: Dog Coach Francis\nPhone: 0917-839-3647\nEmail: itrain@dogcoachfrancis.com",
    hi: "Hello there! 👋 How can I assist you today?",
    hello: "Hi, welcome to The Dog Ranch Training Sessions! 🐶 How can I help you?",
    book: "Great choice! 🐾 You can book your appointment by clicking the Apply Membership button below.",
    membership: "We’d love to have you join our training family! 🐕 Click Apply Membership to get started.",
    register: "We’d love to have you join our training family! 🐕 Click Apply Membership to get started.",
    appointment: "Ready to secure your slot? 🐾 Just click Apply Membership to book your appointment.",
    program: "That's great! click Apply for a membership now!.",
    schedule: "📅 Training Hours:\n\nMon–Fri: 9:00 AM – 4:00 PM\nSat: 9:00 AM – 4:00 PM\nSun: Member check-ins only",
    time: `🕒 Current date and time: ${time}`
}

export { vectors }
