import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  items: string[] = [];
  maxItems = 50; // Número máximo de elementos a cargar
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
      if (currentLength < this.maxItems) {
        for (let i = currentLength; i < currentLength + this.itemsPerLoad; i++) {
          this.items.push(`Item ${i}`);
        }
      }
      event.target.complete();

      // Deshabilitar el infinite scroll si se ha alcanzado el máximo de elementos
      if (this.items.length >= this.maxItems) {
        event.target.disabled = true;
      }
    }, 500);
  }
}
