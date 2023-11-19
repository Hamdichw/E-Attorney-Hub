import { Component, OnInit } from '@angular/core';
import {
  DialogLayoutDisplay,
  DialogInitializer,
  ButtonLayoutDisplay,
  ButtonMaker
} from '@costlydeveloper/ngx-awesome-popup';
import { transaction } from 'app/models/transaction';
import { TransactionsPopPupComponent } from '../transactions-pop-pup/transactions-pop-pup.component';
@Component({
  selector: 'transactions',
  templateUrl: './transactions.component.html'
})
export class TransactionsComponent implements OnInit {
  transaction : transaction={ ammount: '', type: '',date : ""};  
  transactions :transaction[] = [
    { ammount: '12548', type: 'Income',date : "2023-12-01"},
    { ammount: '14282', type: 'Outcome',date : "2023-10-01"},
    { ammount: '47178258', type: 'Income',date : "2023-11-01"},
  ];
  constructor(){
  }
  ngOnInit() {
    
  }
  dialog(type:String, t:transaction) {
    const dialogPopup = new DialogInitializer(TransactionsPopPupComponent);
    dialogPopup.setConfig({
      width: '550px',
      layoutType: DialogLayoutDisplay.NONE 
    });
    if(type =='submit'){
      dialogPopup.setCustomData(t);
      dialogPopup.setButtons([
        new ButtonMaker('Cancel', 'cancel', ButtonLayoutDisplay.SECONDARY),
        new ButtonMaker('submit', 'submit', ButtonLayoutDisplay.SUCCESS),
        
      ]);
      console.log(dialogPopup);
      
    }else if(type =='edit'){
      dialogPopup.setCustomData(t);
      dialogPopup.setButtons([
        new ButtonMaker('Cancel', 'cancel', ButtonLayoutDisplay.SECONDARY),
        new ButtonMaker('edit', 'edit', ButtonLayoutDisplay.WARNING)
      ]);}
    dialogPopup.openDialog$().subscribe(resp => {
      console.log('dialog response: ', resp.payload);
      if(type =='submit' && resp.payload.ammount != "" && resp.payload.type !=""){
        let clonedObject = JSON.parse(JSON.stringify(resp.payload));
        resp.payload.ammount="";
        resp.payload.type="";
        resp.payload.date="";
        this.transactions.push(clonedObject)
        
      }
    });
  }
}
