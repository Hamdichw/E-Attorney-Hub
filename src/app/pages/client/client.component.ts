import { Component, OnInit } from "@angular/core";
import {
  DialogLayoutDisplay,
  DialogInitializer,
  ButtonLayoutDisplay,
  ButtonMaker,
} from "@costlydeveloper/ngx-awesome-popup";
import { ClientPopPupComponent } from "../client-pop-pup/client-pop-pup.component";
import { client } from "app/models/client";
@Component({
  selector: "client",
  templateUrl: "./client.component.html",
})
export class ClientComponent implements OnInit {
  client: client = { name: "", accusation: "", address: "", phone: "" };
  Clients: client[] = [
    {
      name: "John Doe",
      accusation: "E8tessab",
      address: "123 Main St",
      phone: "555-555-5555",
    },
    {
      name: "zgi ",
      accusation: "ta7ayl",
      address: "456 Elm St",
      phone: "444-444-4444",
    },
    {
      name: "Peter Jones",
      accusation: "9atl rou7 bary2a",
      address: "789 Oak St",
      phone: "333-333-3333",
    },
  ];

  searchTerm: string = '';

  constructor() {}

  ngOnInit() {}

  filterClients() {
    if(this.searchTerm !=""){
      return this.Clients.filter(client => client.name.toLowerCase().includes(this.searchTerm.toLowerCase())).slice(0, 4);
    }
  }
  dialog(type: String, c: client) {
    const dialogPopup = new DialogInitializer(ClientPopPupComponent);
    dialogPopup.setConfig({
      width: "550px",
      layoutType: DialogLayoutDisplay.NONE,
    });
    if (type == "submit") {
      dialogPopup.setCustomData(c);
      dialogPopup.setButtons([
        new ButtonMaker("Cancel", "cancel", ButtonLayoutDisplay.SECONDARY),
        new ButtonMaker("submit", "submit", ButtonLayoutDisplay.SUCCESS),
      ]);
      console.log(dialogPopup);
    } else if (type == "edit") {
      dialogPopup.setCustomData(c);
      dialogPopup.setButtons([
        new ButtonMaker("Cancel", "cancel", ButtonLayoutDisplay.SECONDARY),
        new ButtonMaker("edit", "edit", ButtonLayoutDisplay.WARNING),
      ]);
    }
    dialogPopup.openDialog$().subscribe((resp) => {
      console.log("dialog response: ", resp.payload);
      if (type == "submit" && resp.payload.name != "") {
        let clonedObject = JSON.parse(JSON.stringify(resp.payload));
        resp.payload.name = "";
        resp.payload.accusation = "";
        resp.payload.address = "";
        resp.payload.phone = "";
        this.Clients.push(clonedObject);
      }
    });
  }
}
