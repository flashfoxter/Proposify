import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { ResumeService } from '../resume.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resform4',
  templateUrl: './resform4.component.html',
  styleUrls: ['./resform4.component.css']
})
export class Resform4Component implements OnInit {

  countryList: Array<any> = [
    { name: 'Bangladesh', state: ['Barisal','Chittagong','Dhaka','Khulna','Mymensingh','Rajshahi','Rangpur','Sylhet'] },
    { name: 'India', state: ['Andhra Pradesh', 'Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh','Jammu and Kashmir','Jharkhand','Karnataka','	Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','	Uttar Pradesh','Uttarakhand','West Bengal'] },
    { name: 'USA', state: ['Alaska','Arizona','California','Colorado','Florida','Georgia','Indiana','Mississippi','New Jersey','New Mexico','New York','Washington'] },
    { name: 'Sri Lanka', state: ['Ampara','Colombo','Galle','Kurunegala','Mullativu','Ratnapura','Hambantota'] },
  ];
  state: Array<any>;
  changeCountry(count) {
    this.state = this.countryList.find(con => con.name == count).state;
  }
  
  name =localStorage.getItem('key');
  email=localStorage.getItem('eid');
  angForm:FormGroup;
  constructor(private fb:FormBuilder, public logn:LoginService,private resum:ResumeService,private router:Router) {
    this.createForm();
   }

   createForm() {
    this.angForm = this.fb.group({
      Name:['', [Validators.required, Validators.pattern('[a-zA-Z ]+')]],
      DOB:['', Validators.required],
      Age:['', Validators.required],
      Mobile_no:['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      Email:['', [Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}')]],
      Address:['', Validators.required],
      Country:['', Validators.required],
      State:['', Validators.required],
      City:['', Validators.required],
    });
  }

  onClick(Name,DOB,Age,Mobile_no,Email,Address,Country,State,City) {
    console.log(Name,DOB,Age,Mobile_no,Email,Address,Country,State,City);
    this.resum.addUser1(Name,DOB,Age,Mobile_no,Email,Address,Country,State,City);
    this.router.navigate(['/Resumeeducationaldetail']) 
    localStorage.setItem('rname',Name);
    localStorage.setItem('dob',DOB);
    localStorage.setItem('age',Age);
    localStorage.setItem('rmob',Mobile_no); 
    localStorage.setItem('eid',Email);
    localStorage.setItem('radd',Address);
    localStorage.setItem('rcount',Country);
    localStorage.setItem('rstat',State);
    localStorage.setItem('rcity',City);
  }
  
  ngOnInit() {
  }

  logout(){
    this.logn.logged = false;
    this.logn.logged = false;
    this.logn.username ='';
    localStorage.removeItem('key');
  }
}