import { Component, OnInit } from '@angular/core';
import { ApiService } from "./script/api.service";
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

declare var Razorpay: any;
@Component({
  selector: 'app-about-will',
  templateUrl: './about-will.component.html',
  styleUrls: ['./about-will.component.scss']
})
export class AboutWillComponent implements OnInit {
amount : any;
  test: any;
  options: {
    description: string; image: string; currency: string; // your 3 letter currency code
    key: string; // your Key Id from Razorpay dashboard
    amount: number; // Payment amount in smallest denomiation e.g. cents for USD
    name: string; prefill: { email: string; contact: number; name: string; }; theme: { color: string; }; modal: { ondismiss: () => void; };
  };
  amountToPay: any;
  userEmail='any';
  planName: string ;
  planNoOfFileSize ='any';
  planFileSize='any';
  noOfUsers='any';
  couponUsed='any';

  // planname = new FormGroup({
  //   platinum: new FormControl('', Validators.required),
  //   diamond: new FormControl('', Validators.required),
  // });
  constructor( private apiService: ApiService,
    private http: HttpClient,) { 
  
  }

  ngOnInit(): void {

  }

  Diamond(){
    this.planName = 'Diamond';
    this.amount = 1999;
    console.log(this.planName , this.amount);
  }
  Platinium(){
    this.planName = 'Platinum';
    this.amount = 999;
    console.log(this.planName , this.amount)
  }
  async payWithRazorpay(amount) {
    if(typeof(amount) != 'string' ){
      this.amountToPay = this.amount;
    }else{
       this.amountToPay = this.amount.replace(',', '');
    }
     this.options = {
      description: "Credits towards consultation",
      image: "https://i.imgur.com/3g7nmJC.png",
      currency: "INR", // your 3 letter currency code
      key: "rzp_live_ei7V7LomsZkK05", // your Key Id from Razorpay dashboard
      amount: this.amountToPay * 100, // Payment amount in smallest denomiation e.g. cents for USD
      name: "Razorpay",
      prefill: {
        email:  "duritysample@gmail.com",
        contact: 8692979117,
        name: "Razorpay",
      },
      theme: {
        color: "#F37254",
      },
      modal: {
        ondismiss: function () {
          alert("dismissed");
        },
      },
    };

    var successCallback =  (payment_id) => {
      alert("Payment Successful");
      this.updateUserCurrentPlanApiCall(this.planName,this.amount,payment_id,this.planNoOfFileSize, this.planFileSize, this.noOfUsers, this.couponUsed);

    };

    var cancelCallback = function (error) {
      alert(error.description + " (Error " + error.code + ")");
    };

    await Razorpay.open(this.options,successCallback,cancelCallback);
    
  }
  
updateUserCurrentPlanApiCall(planName, amount, payment_id,planNoOfFile, planFileSize, noOfUsers, couponUsed) {
  if(couponUsed == undefined || couponUsed == null || couponUsed == ''){
   var couponCodeUsedByUser = '';
  }else{
    couponCodeUsedByUser = couponUsed;
  }
  let userChangedPlanDetails: any = {
    email: this.userEmail,
    planName: planName,
    amountPaid: amount,
    couponCode: couponUsed,
    paymentId: payment_id,
    planNoOfFile: planNoOfFile,
    planFileSize: planFileSize,
    noOfUsers: noOfUsers,
    actualAmount: "",
    offerAmount: "",
    couponUsed: "",
  };
  this.http
    .post("user/upgradePlanAndPayment", {
      userCurrentPlanDetails: userChangedPlanDetails,
    })
    .subscribe(async (data) => {
      return data;
    });
}
}
