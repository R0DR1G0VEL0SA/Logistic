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
      title: 'Mis Documentos',
      icon: 'assets/icon/doc.svg',
      url: '/menu/second'
    },
    {
      title: 'Servicios Disponibles',
      icon: 'assets/icon/disponible.svg',
      url: '/menu/first'
    },
    {
      title: 'Info Vehículo',
      icon: 'assets/icon/camion.svg',
      url: '/menu/second'
    },
    {
      title: 'Info Trailer',
      icon: 'assets/icon/remolque.svg',
      url: '/menu/second'
    },
    {
      title: 'Historial Viajes',
      icon: 'assets/icon/diagrama.svg',
      url: '/menu/second'
    },
    {
      title: 'Soporte',
      icon: 'assets/icon/call.svg',
      url: '/menu/second'
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
