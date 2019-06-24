
export interface Medication {
    id?: number;
    patientId?: number;
    vid?: number;
    name?: string;
    noOfTimes?: number;
    unitOfTime?: string;
    doctor?: string;
    clinic?: string;
    from?: string;
    period?: number;
    notes?: string;
}
