import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FamilyMembersModule } from './family-members/family-members.module';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { StatisticsModule } from './statistics/statistics.module';
import { TransactionsModule } from './transactions/transactions.module';
import { FamilyMembersService } from './family-members/shared/services/family-members.service';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    FamilyMembersModule,
    TransactionsModule,
    StatisticsModule,
    HttpClientModule
  ],
  providers: [FamilyMembersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
