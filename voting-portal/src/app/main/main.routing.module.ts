import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { VotingpageComponent } from "./components/votingpage/votingpage.component";

const routes: Routes = [
   {path: 'dashboard', component: DashboardComponent},
   {path: 'votingpage', component: VotingpageComponent},
   
   {path: '', 
   redirectTo: 'dashboard', 
   pathMatch: 'full'}
]

@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [ RouterModule ]
  })
  export class MainRoutingModule { }