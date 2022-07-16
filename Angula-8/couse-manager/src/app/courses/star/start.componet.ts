import { Component, OnChanges, Input} from "@angular/core";

@Component({
    selector: "app-star",
    templateUrl:"./star.componet.html",
    styleUrls:["./start.componet.css"]

})
export class StartComponet implements OnChanges {

    @Input()
    rating: number = 0;

    starWidth: number;

    ngOnChanges(): void {
        this.starWidth = this.rating * 74 /5;

    }
}