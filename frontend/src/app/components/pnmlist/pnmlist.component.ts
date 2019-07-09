import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { PNMService } from '../../pnm.service';

@Component({
  selector: 'app-pnmlist',
  templateUrl: './pnmlist.component.html',
  styleUrls: ['./pnmlist.component.css']
})
export class PnmlistComponent implements OnInit {
  access: Number;
  rushees: any[];
  uploads: String;
  constructor(private pnmService: PNMService, private router: Router, private route: ActivatedRoute, private snack: MatSnackBar) {
	  this.uploads = pnmService.uploads;
  }

  ngOnInit() {
	  this.route.params.subscribe(params => {
	      this.access = params.access;
		  this.pnmService.getPNMs().subscribe((data: any[]) => {
		      this.rushees = data;
	      });
	  });
  }
  
  editPNM(id) {
	  this.router.navigate(['/editpnm', id, this.access]);
  }
  
  commentPNM(id) {
	  this.router.navigate(['/pnm', id, this.access]);
  }
  
  checkoutPNM(id) {
	  this.pnmService.checkoutPNM(id).subscribe(() => {
		  this.snack.open('Successfully checked out!', null, { duration: 3000 });
	  });
  }
  
  checkinPNM(id) {
	  this.pnmService.checkinPNM(id).subscribe(() => {
		  this.snack.open('Successfully checked in!', null, { duration: 3000 });
	  });
  }
  
}
