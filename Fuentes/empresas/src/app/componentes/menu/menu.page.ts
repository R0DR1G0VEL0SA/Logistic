import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: 'Notificaciones de Carga',
      icon: 'assets/icon/disponible.svg',
      url: '/menu/first'
    },
    {
      title: 'Configuraciones',
      icon: 'assets/icon/ajustes.svg',
      url: '/menu/second'
    },
    {
      title: 'Mis Vehículos',
      icon: 'assets/icon/camion.svg',
      url: '/menu/third'
    },
    {
      title: 'Mis Trailers',
      icon: 'assets/icon/remolque.svg',
      url: '/menu/fourth'
    },
    {
      title: 'Historial de Viajes',
      icon: 'assets/icon/diagrama.svg',
      url: '/menu/fifth'
    },
    {
      title: 'Soporte Técnico',
      icon: 'assets/icon/call.svg',
      url: '/menu/sixth'
    },
    {
      title: 'Compartir',
      icon: 'assets/icon/social.svg'
    }
  ];
  selectedPath = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
  }

  ngOnInit() {
  }

}
