import { DoctorData } from './DoctorData';

export interface Reservation {
    // id: Number;
    // name?: string;
    // clinic_fk: Number;
    user_id:Number;
    doctor: DoctorData ;
    // doctorName: string;
    appointment_date?:string;
    message?:string;
}
