import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 

  constructor(private formBuild: FormBuilder, private route: Router, ) {
  
  }

  ngOnInit(): void {
    
  }

  onCheck() {
   
  }

}
