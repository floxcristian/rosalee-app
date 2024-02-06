import { Component, OnInit } from '@angular/core';
import {
  AlertController,
  IonRouterOutlet,
  ModalController,
} from '@ionic/angular';
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
    public routerOutlet: IonRouterOutlet,
    private readonly alertCtrl: AlertController
  ) //private readonly barcodeScanner: BarcodeScanner,
  {}

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

  /**
   * Abre alerta para eliminar el producto.
   * @param product
   */
  async openDeleteProductAlert(product: any): Promise<void> {
    const alert = await this.alertCtrl.create({
      cssClass: 'delete-alert',
      header: 'Tu producto se eliminará',
      subHeader:
        'Puedes sacarlo definitivamente de tu inventario o mantenerlo.',
      buttons: [
        {
          text: 'MANTENER',
          role: 'cancel',
        },
        {
          text: 'ELIMINAR',
          cssClass: 'alert-button-confirm',
          handler: () => {},
        },
      ],
      /*buttons: [
        {
          text: 'MANTENER',
          role: 'cancel',
          handler: () => {
            console.log('product: ', product);
            if (product.quantity !== product.ProductCart.cantidad)
              product.ProductCart.cantidad = product.quantity;
          },
        },
        ,
        {
          text: 'ELIMINAR',
          handler: () => {},
        },
      ],*/
    });
    await alert.present();
  }

  scanBarcode() {}
}
