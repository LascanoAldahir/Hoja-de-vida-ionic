import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  items: string[] = [];
  itemsPerLoad = 10; // Número de elementos a cargar por scroll

  constructor() {}

  ngOnInit() {
    this.initializeItems();
  }

  initializeItems() {
    for (let i = 0; i < this.itemsPerLoad; i++) {
      this.items.push(`Item ${i}`);
    }
  }

  loadData(event: any) {
    setTimeout(() => {
      const currentLength = this.items.length;
      for (let i = currentLength; i < currentLength + this.itemsPerLoad; i++) {
        this.items.push(`Item ${i}`);
      }
      event.target.complete();
    }, 500);
  }
}
