import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss'],
})
export class ProductFilterComponent implements OnInit {
  constructor(public modalCtrl: ModalController) {}

  ngOnInit() {}

  selectAll(aa: boolean) {}

  closeModal() {
    this.modalCtrl.dismiss();
  }

  applyFilters() {}
}
