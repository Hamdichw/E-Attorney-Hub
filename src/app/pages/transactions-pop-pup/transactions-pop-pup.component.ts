import { Component, OnInit, OnDestroy, Inject } from "@angular/core";
import { Subscription } from "rxjs";
import { DialogBelonging } from "@costlydeveloper/ngx-awesome-popup";
import { ToastEvokeService } from "@costlydeveloper/ngx-awesome-popup";
import { transaction } from "app/models/transaction";
@Component({
  selector: "transactions-pop-pup",
  templateUrl: "./transactions-pop-pup.component.html",

})
export class TransactionsPopPupComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription = new Subscription();
  transaction: transaction = { ammount: "", type: "", date: "" };
  constructor(
    @Inject("dialogBelonging") public dialogBelonging: DialogBelonging,
    private toastEvokeService: ToastEvokeService
  ) {}

  ngOnInit(): void {
    this.transaction = { ammount: "", type: "", date: "" };
    console.log(this.dialogBelonging.customData);
    this.transaction = this.dialogBelonging.customData;
    this.subscriptions.add(
      this.dialogBelonging.eventsController.onButtonClick$.subscribe(
        (_Button) => {
          if (_Button.ID === "edit") {
            this.toastEvokeService
              .info(
                "Keep up the good work! !⚖️🧑‍⚖️​",
                "client has been successfully updated to the List!✔️"
              )
              .subscribe();
            this.dialogBelonging.eventsController.close();
          } else if (_Button.ID === "submit") {
            if (this.transaction.ammount != "") {
              if (this.transaction.type == "Income") {
                this.toastEvokeService
                  .success(
                    "Confirmation received!💸​💰​​​",
                    "Income recorded successfully! 🤑✅"
                  )
                  .subscribe();
              } else if (this.transaction.type == "Outcome") {
                this.toastEvokeService
                  .danger(
                    "Confirmation received!💸​💰​",
                    "Outcome recorded successfully!🥲​🚨​"
                  )
                  .subscribe();
              }
            }
            this.dialogBelonging.eventsController.close(this.transaction);
          } else if (_Button.ID === "cancel") {
            this.dialogBelonging.eventsController.close();
          }
        }
      )
    );
    setTimeout(() => {
      this.dialogBelonging.eventsController.closeLoader();
    }, 1000);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
