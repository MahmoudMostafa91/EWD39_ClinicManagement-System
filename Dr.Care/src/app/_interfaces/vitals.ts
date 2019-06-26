import { User } from './personal-info';

export interface Vital {
    id?: number;
    vid?: number;
    pId?: number;
    patient?: User;
    type?: string;
    date?: string;
    measurment?: string;
}
