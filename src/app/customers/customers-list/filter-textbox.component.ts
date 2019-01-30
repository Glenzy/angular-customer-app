import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector:'app-filter-textbox',
    template: `
        Filter: <input type="text" [(ngModel)]="filter" /> 
    `
})

export class FilterTextboxComponent implements OnInit {
    private _filter:string;
    @Input() get filter(){
        return this._filter;
    }
    set filter(value:string){
            this._filter = value;
            this.changed.emit(this.filter);
    }

    @Output() changed: EventEmitter<string> = new EventEmitter<string>();


    constructor(){}

    ngOnInit(){
    }
}

