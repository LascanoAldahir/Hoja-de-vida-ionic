import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  items: any[] = [];

  constructor() {}

  ngOnInit() {
    this.initializeItems();
  }

  initializeItems() {
    for (let i = 0; i < 20; i++) {
      this.items.push(`Item ${i}`);
    }
  }

  loadData(event: any) {
    setTimeout(() => {
      console.log('Done');

      for (let i = this.items.length; i < this.items.length + 10; i++) {
        this.items.push(`Item ${i}`);
      }

      event.target.complete();

      // Lógica para determinar si se han cargado todos los datos
      // y deshabilitar el infinite scroll
      if (this.items.length == 50) {
        event.target.disabled = true;
      }
    }, 500);
  }
}
