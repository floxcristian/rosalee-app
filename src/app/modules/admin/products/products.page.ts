import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';
import { PRODUCTS } from './data/products';
import { IProduct } from './data/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  products: IProduct[] = PRODUCTS;
  showSearchbar!: boolean;
  segment = 'all';
  queryText = '';
  constructor(
    public modalCtrl: ModalController,
    public routerOutlet: IonRouterOutlet
  ) {}

  ngOnInit() {}

  async presentFilter() {
    const modal = await this.modalCtrl.create({
      component: ProductFilterComponent,
      presentingElement: this.routerOutlet.nativeEl,
      componentProps: {
        /*excludedTracks: this.excludeTracks*/
      },
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) {
      //this.excludeTracks = data;
      //this.updateSchedule();
    }
  }
}
