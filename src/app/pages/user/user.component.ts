import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html',
    styleUrls: ["./user.style.css"],
})

export class UserComponent implements OnInit{
    defaultImage: string | ArrayBuffer | null = 'assets/img/default-avatar.png';

    ngOnInit(){
    }
    handleFileInput(event: any): void {
        const file = event.target.files[0];
        const reader = new FileReader();
    
        reader.onload = () => {
          // 'reader.result' contains the base64 representation of the file
          this.defaultImage = reader.result;
          // 'defaultImage' is your variable where you want to store the base64 string
        };
    
        reader.readAsDataURL(file);
      }
}
