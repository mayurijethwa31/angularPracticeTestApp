import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
@Input() public parentDataaa;
@Output() public childEvent = new EventEmitter();
fireEvent(){
  this.childEvent.emit("emit the child class event")
}
  constructor() { }

  ngOnInit() {
  }

}
