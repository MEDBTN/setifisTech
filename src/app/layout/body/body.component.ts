import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  constructor(private scroller: ViewportScroller) {}

  ngOnInit(): void {
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }

  isNavbarCollapsed = true;

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  scrollTo(elementId: string) {
    this.scroller.scrollToAnchor(elementId);
    this.toggleNavbar();
  }
  getStarted(elementId: string) {
    this.scroller.scrollToAnchor(elementId);
  }
}
