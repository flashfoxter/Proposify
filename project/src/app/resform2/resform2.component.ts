import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup , Validators } from '@angular/forms';
import { ResumeService } from '../resume.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-resform2',
  templateUrl: './resform2.component.html',
  styleUrls: ['./resform2.component.css']
})
export class Resform2Component implements OnInit {

  angForm:FormGroup;
  name =localStorage.getItem('key');
  email=localStorage.getItem('eid');
  constructor(private route: ActivatedRoute,private fb:FormBuilder, public logn:LoginService, private resum:ResumeService,private router:Router) {
    this.createForm();
   }

   createForm() {
    this.angForm = this.fb.group({
      Email:[''],
      tenth_school:['', Validators.required],
      tenth_per:['', Validators.required],
      tenth_Passingyear:['', Validators.required],
      twelth_school :['', Validators.required],
      twelth_per:['', Validators.required],
      twelth_Passingyear:['', Validators.required],
      Graduation_Collage:['', Validators.required],
      Graduation_Stream:['', Validators.required],
      Graduation_per:['', Validators.required],
      Graduation_Passingyear:['', Validators.required],
      PG_collage:[' '],
      PG_Stream:[' '],
      PG_per:[' '],
      PG_Passingyear:[' '],
    });
  }

  onClick(Email,tenth_school,tenth_per,tenth_Passingyear,twelth_school,twelth_per,twelth_Passingyear,Graduation_Collage,Graduation_Stream,Graduation_per,Graduation_Passingyear,PG_collage,PG_Stream,PG_per,PG_Passingyear) {
    this.resum.addUser2(Email,tenth_school,tenth_per,tenth_Passingyear,twelth_school,twelth_per,twelth_Passingyear,Graduation_Collage,Graduation_Stream,Graduation_per,Graduation_Passingyear,PG_collage,PG_Stream,PG_per,PG_Passingyear);
    this.router.navigate(['/resumejobdetail',this.param1])
    localStorage.setItem('tensch',tenth_school);
    localStorage.setItem('tenper',tenth_per);
    localStorage.setItem('tenpass',tenth_Passingyear);
    localStorage.setItem('twlsch',twelth_school);
    localStorage.setItem('twlper',twelth_per);
    localStorage.setItem('twlpass',twelth_Passingyear);
    localStorage.setItem('gcoll',Graduation_Collage);
    localStorage.setItem('gstr',Graduation_Stream);
    localStorage.setItem('gper',Graduation_per);
    localStorage.setItem('gpass',Graduation_Passingyear);
    localStorage.setItem('pgcoll',PG_collage);
    localStorage.setItem('pgstr',PG_Stream);
    localStorage.setItem('pgper',PG_per);
    localStorage.setItem('pgpass',PG_Passingyear);
  }
  param1: string;
  ngOnInit() {
    this.param1 = this.route.snapshot.paramMap.get("id")
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

}
