import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit, OnDestroy  {
featureUpdate: {id: number, val: string}
paramsSubscription: Subscription
@Output() public childEvent = new EventEmitter();
fireEventForFeatures(){
  this.childEvent.emit("emit the child class event for features")
  }
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.featureUpdate={
      id: this.route.snapshot.params['id'],
      val: this.route.snapshot.params['val']
    };
    this.paramsSubscription =  this.route.params
        .subscribe(
          (params:Params) => {
            this.featureUpdate.id = params['id'];
            this.featureUpdate.val = params['val'];
          }
        )
  }
  ngOnDestroy(){
    this.paramsSubscription.unsubscribe();
  };

}
