import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { PNMService } from '../../pnm.service';

@Component({
  selector: 'app-pnm',
  templateUrl: './pnm.component.html',
  styleUrls: ['./pnm.component.css']
})
export class PnmComponent implements OnInit {
  access: Number;
  id: Number;
  rushee: any = {};
  uploads: String;
  commentForm: FormGroup;
  
  constructor(private pnmService: PNMService, private router: Router, private route: ActivatedRoute, private snack: MatSnackBar, private formBuild: FormBuilder) {
	  this.uploads = pnmService.uploads;
      this.commentForm = formBuild.group({name: ['', Validators.required], comment: ['', Validators.required], rating: ['', Validators.required]});
  }

  ngOnInit() {
	  this.route.params.subscribe(params => {
		  this.id = params.id;
		  this.access = params.access;
		  this.pnmService.getPNM(this.id).subscribe(res => {
			  this.rushee = res;
		  });
	  });
  }
  
  commentPNM(name, comment, rating) {
	  	 this.commentForm.get('name').setValue(null);
		 this.commentForm.get('comment').setValue(null);
		 this.commentForm.get('rating').setValue(null);
		 this.commentForm.updateValueAndValidity();
	  this.pnmService.commentPNM(this.id, name, comment, rating).subscribe(() => {
		 this.snack.open('Comment added successfully!', null, { duration: 3000 });
		 this.rushee.comments.unshift({owner: name, comm: comment, rating: rating});
		 this.rushee.lencomments += 1;
	  });
  }

}
