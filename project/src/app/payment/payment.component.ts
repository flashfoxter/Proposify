import { Component, OnInit, AfterViewInit, OnDestroy, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PaymentService } from '../payment.service';
import { NgForm } from '@angular/forms';
declare var stripe: any;
declare var elements: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements AfterViewInit, OnDestroy{
  [x: string]: any;

  @ViewChild('cardInfo') cardInfo: ElementRef;

  card: any;
  cardHandler = this.onChange.bind(this);
  error: string;

  ngAfterViewInit() {
    this.card = elements.create('card');
    this.card.mount(this.cardInfo.nativeElement);

    this.card.addEventListener('change', this.cardHandler);
  }

  ngOnDestroy() {
    this.card.removeEventListener('change', this.cardHandler);
    this.card.destroy();
  }

  onChange({ error }) {
    if (error) {
      this.error = error.message;
    } else {
      this.error = null;
    }
    this.cd.detectChanges();
  }

  async onSubmit(form: NgForm) {
    const { token, error } = await stripe.createToken(this.card);

    if (error) {
      console.log('Something is wrong:', error);
    } else {
      //this.router.navigate(['/custom-form'])
      console.log('Success!', token);
      this.pay.payed = true;
      this.router.navigate(['/proposal',this.param1])
      // ...send the token to the your backend to process the charge
    }
  }

  onClick(Fullname, mobil, mail, amont ,dat) {
    this.pay.addUser(Fullname, mobil, mail, amont ,dat);
  }
  
  today: Date;
   fname =localStorage.getItem('key');
   lname =localStorage.getItem('key1');
   emal =localStorage.getItem('key2');
   mob =localStorage.getItem('key3');

  constructor(private router:Router,private pay:PaymentService,private cd: ChangeDetectorRef,private route: ActivatedRoute) {
    this.today =new Date();
   }
   param1: string;
  ngOnInit() {
    this.param1 = this.route.snapshot.paramMap.get("id")
  }

}
