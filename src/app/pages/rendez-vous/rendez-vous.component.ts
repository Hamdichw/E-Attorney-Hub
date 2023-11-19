import { Component, OnInit } from '@angular/core';
import { setOptions, MbscEventcalendarView, MbscCalendarEvent , localeFr, Notifications } from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';

setOptions({
    locale: localeFr,
    theme: 'windows',
    themeVariant: 'light',
    /* clickToCreate: false,
    dragToCreate: true,
    dragToMove: true,
    dragToResize: false,
    eventDelete: false */
    
});
@Component({
  selector: 'rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.css']
})
export class RendezVousComponent implements OnInit {
  constructor(private http: HttpClient,) {}
  ;
 
  myEvents: MbscCalendarEvent[] = [{"start":"2023-11-13T08:00:00.000Z","end":"2023-11-16T17:00:00.000Z","title":"Business of Software Conference","color":"#ff6d42"},{"start":"2023-11-18T12:00:00.000Z","end":"2023-11-19T20:00:00.000Z","title":"Friends binge marathon","color":"#7bde83"},{"start":"2023-11-25T12:00:00.000Z","end":"2023-11-26T20:00:00.000Z","title":"Friends binge marathon","color":"#7bde83"},{"start":"2023-11-12T08:00:00.000Z","end":"2023-11-12T09:00:00.000Z","title":"Product team mtg.","color":"#913aa7"},{"start":"2023-11-12T10:00:00.000Z","end":"2023-11-12T11:00:00.000Z","title":"Green box to post office","color":"#6e7f29"},{"start":"2023-11-12T13:00:00.000Z","end":"2023-11-12T14:00:00.000Z","title":"Lunch @ Butcher's","color":"#bb0000"},{"start":"2023-11-12T15:00:00.000Z","end":"2023-11-12T16:00:00.000Z","title":"Status Update Meeting","color":"#00aabb"},{"start":"2023-11-12T09:00:00.000Z","end":"2023-11-12T10:00:00.000Z","title":"Board meeting","color":"#cfc014"},{"start":"2023-11-12T19:00:00.000Z","end":"2023-11-12T21:00:00.000Z","title":"Pizza Night","color":"#d7be0d"},{"start":"2023-11-12T17:00:00.000Z","end":"2023-11-12T18:00:00.000Z","title":"Clever Conference","color":"#a71111"},{"start":"2023-11-11T07:45:00.000Z","end":"2023-11-11T09:00:00.000Z","title":"Quick mtg. with Martin","color":"#de3d83"},{"start":"2023-11-08T08:30:00.000Z","end":"2023-11-08T09:30:00.000Z","title":"Product team mtg.","color":"#f67944"},{"start":"2023-11-08T10:00:00.000Z","end":"2023-11-08T10:45:00.000Z","title":"Stakeholder mtg.","color":"#a144f6"},{"recurring":{"repeat":"yearly","month":11,"day":14},"allDay":true,"title":"Dexter BD","color":"#37bbe4"},{"recurring":{"repeat":"yearly","month":11,"day":25},"allDay":true,"title":"Luke BD","color":"#37bbe4"},{"recurring":{"repeat":"weekly","weekDays":"WE"},"allDay":true,"title":"Employment (Semi-weekly)","color":"#228c73"},{"start":"2023-11-09T23:00:00.000Z","end":"2023-11-14T23:00:00.000Z","allDay":true,"title":"Sam OFF","color":"#ca4747"},{"start":"2023-11-17T23:00:00.000Z","end":"2023-11-28T23:00:00.000Z","allDay":true,"title":"Europe tour","color":"#56ca70"},{"start":"2023-02-06T23:00:00.000Z","end":"2023-02-24T23:00:00.000Z","allDay":true,"title":"Dean OFF","color":"#99ff33"},{"start":"2023-03-04T23:00:00.000Z","end":"2023-03-13T23:00:00.000Z","allDay":true,"title":"Mike OFF","color":"#e7b300"},{"start":"2023-05-06T22:00:00.000Z","end":"2023-05-15T22:00:00.000Z","allDay":true,"title":"John OFF","color":"#669900"},{"start":"2023-05-31T22:00:00.000Z","end":"2023-06-10T22:00:00.000Z","allDay":true,"title":"Carol OFF","color":"#6699ff"},{"start":"2023-07-01T22:00:00.000Z","end":"2023-07-16T22:00:00.000Z","allDay":true,"title":"Jason OFF","color":"#cc9900"},{"start":"2023-08-05T22:00:00.000Z","end":"2023-08-13T22:00:00.000Z","allDay":true,"title":"Ashley OFF","color":"#339966"},{"start":"2023-09-09T22:00:00.000Z","end":"2023-09-19T22:00:00.000Z","allDay":true,"title":"Marisol OFF","color":"#8701a9"},{"start":"2023-09-30T22:00:00.000Z","end":"2023-10-11T22:00:00.000Z","allDay":true,"title":"Sharon OFF","color":"#cc6699"},{"recurring":{"repeat":"yearly","month":12,"day":25},"allDay":true,"title":"Christmas Day","color":"#ff0066"},{"recurring":{"repeat":"yearly","month":1,"day":1},"allDay":true,"title":"New Year's day","color":"#99ccff"},{"recurring":{"repeat":"yearly","month":4,"day":1},"allDay":true,"title":"April Fool's Day","color":"#ff6666"},{"recurring":{"repeat":"yearly","month":11,"day":2},"allDay":true,"title":"File Form 720 for the third quarter","color":"#147ea6"},{"recurring":{"repeat":"yearly","month":11,"day":2},"allDay":true,"title":"File Form 730 and pay tax on wagers accepted during September","color":"#a73a4e"},{"recurring":{"repeat":"yearly","month":11,"day":2},"allDay":true,"title":"File Form 2290 and pay the tax for vehicles first used during September","color":"#218e0d"},{"recurring":{"repeat":"yearly","month":11,"day":2},"allDay":true,"title":"File Form 941 for the third quarter","color":"#a67914"},{"recurring":{"repeat":"yearly","month":11,"day":2},"allDay":true,"title":"Deposit FUTA owed through Sep if more than $500","color":"#3c0707"},{"recurring":{"repeat":"yearly","month":11,"day":30},"allDay":true,"title":"Deposit payroll tax for payments on Nov 21-24 if the semiweekly deposit rule applies","color":"#14a618"},{"recurring":{"repeat":"yearly","month":11,"day":30},"allDay":true,"title":"File Form 730 and pay tax on wagers accepted during October","color":"#722ac1"},{"recurring":{"repeat":"yearly","month":11,"day":30},"allDay":true,"title":"File Form 2290 and pay the tax for vehicles first used during October","color":"#256069"}];
  view = 'day';
  calView: MbscEventcalendarView = {
      /* calendar: { type: 'month' }, */
      agenda: { type: 'day' }
  };
  
  ngOnInit(): void {
     /*  this.http.jsonp < MbscCalendarEvent[] > ('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((resp) => {
          this.myEvents = resp;
      }); */
  }

  changeView(): void {
      setTimeout(() => {
          switch (this.view) {
              case 'month':
                  this.calView = {
                      calendar: { type: 'month' },
                      agenda: { type: 'month' }
                  };
                  break;
              case 'week':
                  this.calView = {
                      calendar: { type: 'week' },
                      agenda: { type: 'week' }
                  };
                  break;
              case 'day':
                  this.calView = {
                      agenda: { type: 'day' }
                  };
                  break;
          }
      });
  };

}