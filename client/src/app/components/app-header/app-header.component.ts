import { Component, OnInit, ElementRef } from '@angular/core';
import { User } from '../../_models/index';
import { UserService } from '../../_services/index';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent implements OnInit {
  currentUser: User;
  users: User[] = [];

 constructor(private el: ElementRef) { 
 this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
 }

  //wait for the component to render completely
  ngOnInit(): void {
    var nativeElement: HTMLElement = this.el.nativeElement,
    parentElement: HTMLElement = nativeElement.parentElement;
    // move all children out of the element
    while (nativeElement.firstChild) {
      parentElement.insertBefore(nativeElement.firstChild, nativeElement);
    }
    // remove the empty element(the host)
    parentElement.removeChild(nativeElement);
  }
}
