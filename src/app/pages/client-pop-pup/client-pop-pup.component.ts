import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import {Subscription} from 'rxjs';
import {DialogBelonging} from '@costlydeveloper/ngx-awesome-popup';
import { client } from 'app/models/client';
import { ToastEvokeService } from '@costlydeveloper/ngx-awesome-popup';
@Component({
  selector: 'client-pop-pup',
  templateUrl: './client-pop-pup.component.html',
})

export class ClientPopPupComponent implements OnInit, OnDestroy {
    
  private subscriptions: Subscription = new Subscription();
  client : client={ name: '', accusation: '', address: '', phone: '' };  
  constructor(@Inject('dialogBelonging') public dialogBelonging: DialogBelonging,private toastEvokeService: ToastEvokeService) {}

  ngOnInit(): void {
      this.client={ name: '', accusation: '', address: '', phone: '' };
      console.log(this.dialogBelonging.customData);
      this.client=this.dialogBelonging.customData;
      this.subscriptions.add(
          this.dialogBelonging.eventsController.onButtonClick$.subscribe((_Button) => {
              if (_Button.ID === 'edit') {
                  this.toastEvokeService.info('Keep up the good work! !⚖️🧑‍⚖️​', 'client has been successfully updated to the List!✔️').subscribe();
                  this.dialogBelonging.eventsController.close();
              } else if (_Button.ID === 'submit') {
                if(this.client.name!=""){
                  this.toastEvokeService.success('Confirmation received!⚖️🧑‍⚖️​', 'client has been successfully added to the List! ✅').subscribe();
                }
                this.dialogBelonging.eventsController.close(this.client);
              }
              else if (_Button.ID === 'cancel') {
                  this.dialogBelonging.eventsController.close();
              }
          })
      );
      setTimeout(() => {
          this.dialogBelonging.eventsController.closeLoader();
      }, 1000);
  }
  
  ngOnDestroy(): void {
      this.subscriptions.unsubscribe();
  }
}

