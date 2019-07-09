import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class PNMService {
  uri = 'http://betterox.ddns.net:4000/';
  uploads = 'http://betterox.ddns.net:4000/uploads/';
  constructor(private http: HttpClient) { }
  
  getPNMs() {
	  return this.http.get(this.uri + 'pnms');
  }
  
  getPNM(id) {
	  return this.http.get(this.uri + 'pnms/' + id);
  }
  
  addPNM(name, year, email, phone) {
	  console.log('adding pnm');
	  let pnmPost = new FormData();
	  pnmPost.append('name', name);
	  pnmPost.append('year', year);
	  if (email) pnmPost.append('email', email); //not required, but add it if it exists
	  pnmPost.append('phone', phone);
	  return this.http.post(this.uri + 'pnms/add', pnmPost);
  }
  
  editPNM(id, name, year, email, phone, stat, pic) {
	  console.log('editing pnm');
	  let pnmPost = new FormData();
	  if (name) pnmPost.append('name', name);
	  if (year) pnmPost.append('year', year);
	  if (email) pnmPost.append('email', email);
	  if (stat) pnmPost.append('stat', stat);
	  if (pic) pnmPost.append('pic', pic);
	  return this.http.post(this.uri + 'pnms/edit/' + id, pnmPost);
  }
  
  commentPNM(id, commenter, comment, rating) {
	  console.log('adding pnm comment');
	  let pnmPost = new FormData();
	  pnmPost.append('owner', commenter);
	  pnmPost.append('comm', comment);
	  pnmPost.append('rating', rating);
	  return this.http.post(this.uri + 'pnms/comment/' + id, pnmPost);
  }
  
  checkoutPNM(id) {
	  console.log('checking out PNM');
	  let pnmPost = new FormData();
	  return this.http.post(this.uri + 'pnms/checkout/' + id, pnmPost);
  }
  
  checkinPNM(id) {
	  console.log('checking in PNM');
	  let pnmPost = new FormData();
	  return this.http.post(this.uri + 'pnms/checkin/' + id, pnmPost);
  }
  
  isPresent(checkin, checkout) {
	  let mostRecentIn = new Date(checkin);
	  if (!checkout)
		  return 'Yes';
	  else
	  {
		  let mostRecentOut = new Date(checkout);
		  return ((mostRecentOut.getTime() - mostRecentIn.getTime() > 0) ? 'No' : 'Yes');
	  }
  }
  
  
}
