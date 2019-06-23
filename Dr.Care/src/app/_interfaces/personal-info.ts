import { GenericBrowserDomAdapter } from '@angular/platform-browser/src/browser/generic_browser_adapter';

export interface User {
    patientId?: number;
    name?: string;
    age?: number;
    gender?: string;
    bloodType?: string;
    occupation?: string;
    adress?: string;
    telephone?: string;
    weight?: number;
    height?: number;
    imgURL?: string;
}
