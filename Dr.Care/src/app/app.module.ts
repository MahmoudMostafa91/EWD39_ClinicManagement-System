import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { UpperHeaderComponent } from './core/header/upper-header/upper-header.component';
import { LowerHeaderComponent } from './core/header/lower-header/lower-header.component';
import { FooterComponent } from './core/footer/footer.component';
import { OurServiceComponent } from './features/our-service/our-service.component';
import { OffersComponent } from './features/offers/offers.component';
import { AdvartismentsComponent } from './features/advartisments/advartisments.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UpperHeaderComponent,
    LowerHeaderComponent,
    FooterComponent,
    OurServiceComponent,
    OffersComponent,
    AdvartismentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
