import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { PNMService } from '../../pnm.service';

@Component({
  selector: 'app-editpnm',
  templateUrl: './editpnm.component.html',
  styleUrls: ['./editpnm.component.css']
})
export class EditpnmComponent implements OnInit {
  access: Number;
  id: Number;
  rushee: any = {};
  uploads: String;
  editForm: FormGroup;
  
  constructor(private pnmService: PNMService, private router: Router, private route: ActivatedRoute, private snack: MatSnackBar, private formBuild: FormBuilder) { 
	  this.uploads = pnmService.uploads;
	  this.editForm = formBuild.group({name: ['', Validators.required], year: ['', Validators.required], email: '', phone: ['', Validators.required], stat: ['', Validators.required]});
  }
  

  ngOnInit() {
	  this.route.params.subscribe(params => {
		  this.id = params.id;
		  this.access = params.access;
		  this.pnmService.getPNM(this.id).subscribe(res => {
			  this.rushee = res;
			  this.editForm.get('name').setValue(this.rushee.name);
			  this.editForm.get('year').setValue(this.rushee.year);
			  this.editForm.get('email').setValue(this.rushee.email);
			  this.editForm.get('phone').setValue(this.rushee.phone);
			  this.editForm.get('stat').setValue(this.rushee.stat);
			  this.editForm.updateValueAndValidity();
		  });
	  });
  }
  
  editPNM(name, year, email, phone, stat, file) {
	  this.pnmService.editPNM(this.id, name, year, email, phone, ((this.access == 2) ? stat : null), file).subscribe(() => {
	      if (this.access < 2 && (this.rushee.stat !== stat)) {this.snack.open('PNM information updated successfully (status unchanged, not an admin)!', null, { duration: 3000 });}
		  else {this.snack.open('PNM information updated successfully!', null, { duration: 3000 });}
	  });
  }
  
  previewUpload(file) {
	  let preview = document.querySelector('img');
      let reader  = new FileReader();
	  let context = this;
      reader.addEventListener("load", function () {
          preview.src = String(reader.result);
      }, false);
      if (file) {
        reader.readAsDataURL(file);
	  }
  }
  
}
