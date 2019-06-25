import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { UserService } from 'src/app/_services/user.service';
import { first } from 'rxjs/operators';
import { ReservationService} from 'src/app/_services/reservation.service';
import { Reservation } from 'src/app/_models/reservation';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reservation-celendar',
  templateUrl: './reservation-celendar.component.html',
  styleUrls: ['./reservation-celendar.component.scss']
})
export class ReservationCelendarComponent implements OnInit {
  currentUser: any;
  users = [];
  reservations: Reservation[];
  

  constructor(  private authenticationService: AuthenticationService,
                private userService: UserService,
                private reservationService:ReservationService) {
      this.currentUser = this.authenticationService.currentUserValue;
     

     }

  ngOnInit() {
    // this.loadAllUsers();
    this.getReservations();

  }

//   deleteUser(id: number) {
//     this.userService.delete(id)
//         .pipe(first())
//         .subscribe(() => this.loadAllUsers());
// }


getReservations(){
this.reservations = this.reservationService.getAll();
  }
//  loadAllUsers() {
//     this.userService.getAll()
//         .pipe(first())
//         .subscribe(users => this.users = users);
// }

}
