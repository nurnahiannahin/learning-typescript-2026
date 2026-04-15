const hospitalName: string = "Lab Aid";

// 2. Union Types (Strict Enums)

type AppoinmentsStatus = "pending" | "confirmed" | "cancelled";
type Specialization = "Cardiology" | "Neurology" | "General";

// Interfaces (the blueprints)
interface Doctor {
    id: string;
    name: string;
    specialization: Specialization
    experience: number;
};

interface PriorityDetails {
    date: Date;
    priorityLevel: number;
}
 interface Appoinment {
    patientName: string;
    status: AppoinmentsStatus;
 }

 type UrgentAppoinment = Appoinment & PriorityDetails;

// Example: 1 . Creating doctor obj

const headDoctor: Doctor = {
    id: "DOC-001",
    name: "Dr. Nahin",
    specialization: "Neurology",
    experience: 10
};

// Ex 2. Creating an Urgent Appoinment

const emergencyCall: UrgentAppoinment = {
    patientName: "Rahim",
    status: "confirmed",
    date: new Date(),
    priorityLevel: 1
}