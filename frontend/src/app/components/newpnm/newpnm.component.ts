import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { PNMService } from '../../pnm.service';
@Component({
  selector: 'app-newpnm',
  templateUrl: './newpnm.component.html',
  styleUrls: ['./newpnm.component.css']
})
export class NewpnmComponent implements OnInit {
  access: Number;
  newPNMForm: FormGroup;
  constructor(private pnmService: PNMService, private formBuild: FormBuilder, private router: Router, private route: ActivatedRoute, private snack: MatSnackBar ) {
	  this.newPNMForm = this.formBuild.group({name: ['', Validators.required], email: '', phone: ['', Validators.required], year: ['', Validators.required]});
  }
  
  ngOnInit() {
	  this.route.params.subscribe(params => {
	      this.access = params.access;
	  });
  }
  
  addPNM(name, year, email, phone) {
	  	  this.newPNMForm.get('name').setValue(null);
		  this.newPNMForm.get('year').setValue(null);
		  this.newPNMForm.get('email').setValue(null);
		  this.newPNMForm.get('phone').setValue(null);
		  this.newPNMForm.updateValueAndValidity();
	  this.pnmService.addPNM(name, year, email, phone).subscribe(() => {
		  this.snack.open('Successfully registered!', null, { duration: 3000 });
	  });
  }



}
