import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  amount = '0';
  dot = false;
  constructor(
    public toastController: ToastController
  ) {}
  numberClick(value: string){
    if(this.amount.length < 10){
      if( this.amount === '0'){
        if(value === '.'){
          this.amount = this.amount + value;
        } else{
            this.amount = value;
            // if( value === '<') {
            //   this.amount = this.amount;
            // } else {
            //   this.amount = this.amount + value;
            // }
        }
      } else if( value === '<') {
        this.amount = this.amount.substring(0,this.amount.length -1);
      } else {
        if(!this.amount.includes('.')){
          this.amount = this.amount + value;
        } else {
          if(this.amount.includes('.') && value === '.'){
            this.amount = this.amount;
          } else {
            this.amount = this.amount + value;
          }
        }
      }
    } else {
      if(this.amount.length === 10 && value === '<') {
        this.amount = this.amount.substring(0,this.amount.length -1);
      } else{
        this.presentToastWithOptions('Can not add more than this');
      }
    }
  }
  async presentToastWithOptions(message : string) {
    const toast = await this.toastController.create({
      // header: 'Toast header',
      message: message,
      duration: 1000,
      position: 'bottom'
    });
    toast.present();
  }

}
