import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-layout-two2',
  templateUrl: './layout-two2.component.html',
  styleUrls: ['./layout-two2.component.scss']
})

export class LayoutTwo2Component implements OnInit {

  constructor(private modalService: NgbModal) { }
  currentSection = 'home';

  heading: string = "Let's Find The Best Plan For your Project.";

  ngOnInit(): void {
  }
  /**
   * Window scroll method
   */
  // tslint:disable-next-line: typedef
  windowScroll() {
    const navbar = document.getElementById('navbar');
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      if (navbar !== null) {
        navbar.classList.add('nav-sticky');
      }
    }
    else {
      if (navbar !== null) {
        navbar.classList.remove('nav-sticky');
      }
    }
  }

  /**
   * Open modal
   * @param content content
   */
  openModal(content: any) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
  }

  /**
   * Section changed method
   * @param sectionId specify the current sectionID
   */
  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  /**
   * Toggle navbar
   */
  toggleMenu() {
    const nav = document.getElementById('navbarNav');
    if (nav !== null) {
      nav.classList.toggle('show');
    }
  }

}
