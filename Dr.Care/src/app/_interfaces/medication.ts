
export interface Medication {
    id?: number;
    patientId?: number;
    name?: string;
    noOfTimes?: number;
    unitOfTime?: string;
    doctor?: string;
    clinic?: string;
    from?: string;
    to?: string;
    notes?: string;
}
