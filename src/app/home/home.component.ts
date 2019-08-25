import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  constructor(private router:Router, private route: ActivatedRoute) { }
  loadContact(){
    //some actions performed
    this.router.navigate(['/contact'],{relativeTo:this.route});
  }
  ngOnInit() {
  }

}
