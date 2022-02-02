import { Component, Input, Output, EventEmitter } from "@angular/core"

@Component({
    selector: 'event-thumbnail',
    template: `
        <div class="well hoverwell thumbnail">
            <h2>{{event?.name}}</h2>
            <div>Date: {{event?.date}}</div>
            <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">
                Time: {{event?.time}}
                <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
                <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
                <span *ngSwitchDefault>(Normal Start)</span>
            </div>
            <div>Price: \${{event?.price}}</div>
            <!-- div *ngIf="event?.location" -->
            <div [hidden]="!event?.location">
                <span>Location: {{event?.location?.address}}</span>
                <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
            </div>
            <div [hidden]="!event?.onlineUrl">
                Online URL: {{event?.onlineUrl}}
            <button class="btn btn-primary" (click)="handleClickMe()"> Click me!</button>
        </div>
    `,
    styles:[`
        
        .thumbnail { min-height: 255px; }
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb;}
    `]
})
export class EventThumbnailComponent{
    @Input() event:any 
    @Output() eventClick = new EventEmitter<string>()
    
    getStartTimeClass(){
        if(this.event && this.event.time === '8:00 am')
            return['green', 'bold']
        return []
        // for this function you'd need to add the green and bold in the styles array and use [ngClass]= 
        //.green { color: #003300 !important; }
        //.bold { font-weight: bold; }
    }
    getStartTimeStyle(){
        if(this.event && this.event.time === '8:00 am')
            return{color: '#003300', 'font-weight': 'bold'}
        return {}
    }
    handleClickMe() {
        this.eventClick.emit(this.event.name)
    }

    logFoo(){
        console.log('foo')
    }

}