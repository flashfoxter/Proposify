import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup , Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../login.service';
import { ProposalService } from '../proposal.service';

@Component({
  selector: 'app-propform1',
  templateUrl: './propform1.component.html',
  styleUrls: ['./propform1.component.css']
})
export class Propform1Component implements OnInit {

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

  angForm:FormGroup;
  name =localStorage.getItem('key');

  constructor(private route: ActivatedRoute,private fb:FormBuilder, public logn:LoginService, private prop:ProposalService,private router:Router) {
    this.createForm();
   }

   createForm() {
    this.angForm = this.fb.group({
      Client_name:['',[Validators.required, Validators.pattern('[a-zA-Z ]+')]],
      Client_address:['', Validators.required],
      Client_country:['', Validators.required],
      Client_state:['', Validators.required],
      Client_city :['', Validators.required],
      Client_mob1:['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      Client_mob2:['', [Validators.required, Validators.pattern('[0-9]{10}')]],
    });
  }

  onClick(Client_name,Client_address,Client_country,Client_state,Client_city ,Client_mob1,Client_mob2) {
    this.prop.addUser1(Client_name,Client_address,Client_country,Client_state,Client_city ,Client_mob1,Client_mob2);
    this.router.navigate(['/proposalcompanydetail',this.param1])
    localStorage.setItem('cname',Client_name);
    localStorage.setItem('cadd',Client_address);
    localStorage.setItem('ccoun',Client_country);
    localStorage.setItem('cstat',Client_state);
    localStorage.setItem('ccity',Client_city);
    localStorage.setItem('cmob1',Client_mob1);
    localStorage.setItem('cmob2',Client_mob2);
  }

  logout(){
    this.logn.logged = false;
    this.logn.logged = false;
    this.logn.username ='';
    localStorage.removeItem('key');
    localStorage.removeItem('id');
    localStorage.removeItem('key');
    localStorage.removeItem('key1');
    localStorage.removeItem('key2');
    localStorage.removeItem('key3');
    localStorage.removeItem('cname');
    localStorage.removeItem('cadd');
    localStorage.removeItem('ccoun');
    localStorage.removeItem('cstat');
    localStorage.removeItem('ccity');
    localStorage.removeItem('cmob1');
    localStorage.removeItem('cmob2');
    localStorage.removeItem('comname');
    localStorage.removeItem('comemail');
    localStorage.removeItem('comadd');
    localStorage.removeItem('comcont');
    localStorage.removeItem('comstat');
    localStorage.removeItem('comcity');
    localStorage.removeItem('comdate');
    localStorage.removeItem('rname');
    localStorage.removeItem('dob');
    localStorage.removeItem('age');
    localStorage.removeItem('rmob');
    localStorage.removeItem('eid');
    localStorage.removeItem('radd');
    localStorage.removeItem('rcount');
    localStorage.removeItem('rstat');
    localStorage.removeItem('rcity');
    localStorage.removeItem('tensch');
    localStorage.removeItem('tenper');
    localStorage.removeItem('tenpass');
    localStorage.removeItem('twlsch');
    localStorage.removeItem('twlper');
    localStorage.removeItem('twlpass');
    localStorage.removeItem('gcoll');
    localStorage.removeItem('gstr');
    localStorage.removeItem('gper');
    localStorage.removeItem('gpass');
    localStorage.removeItem('pgcoll');
    localStorage.removeItem('pgstr');
    localStorage.removeItem('pgper');
    localStorage.removeItem('pgpass');
    localStorage.removeItem('comnam');
    localStorage.removeItem('jobpro');
    localStorage.removeItem('exper');
    localStorage.removeItem('sdate');
    localStorage.removeItem('edate');
    localStorage.removeItem('achiv');
    localStorage.removeItem('skil');
    localStorage.removeItem('lang');
    localStorage.removeItem('hobb');
  }
  param1: string;
  ngOnInit() {
    this.param1 = this.route.snapshot.paramMap.get("id")
  }
}
