import { CommonModule } from "@angular/common";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModules } from "../modules/material.module";
import { MainRoutingModule } from "./main.routing.module";

import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { VotingpageComponent } from "./components/votingpage/votingpage.component";

@NgModule({
    declarations: [
        DashboardComponent,
        VotingpageComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModules,
        MainRoutingModule,
    ],schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
})
export class MainModule {}