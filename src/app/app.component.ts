import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inventario', url: '/products', icon: 'bag-handle' },
    { title: 'Clientas', url: '/customers', icon: 'people' },
    { title: 'Calendario', url: '/schedule', icon: 'calendar' },
    { title: 'Mensajes', url: '/folder/favorites', icon: 'mail' },
    { title: 'Configuración', url: '/folder/archived', icon: 'settings' },
    /*{ title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },*/
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
