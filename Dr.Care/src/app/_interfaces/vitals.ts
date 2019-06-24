import { User } from './personal-info';
import { DoctorData } from '../_models/DoctorData';
import { clinicdata } from '../_models/clinicdata';

export interface Vital {
    id?: number;
    vid?: number;
    patient?: User;
    type?: string;
    date?: string;
    measurment?: string;
}
