import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {
  items = [
  { image: '/assets/img/1.jpg', title: 'Hotel Vista Mar', description: 'Hermoso hotel frente al mar', route: '/detalle/1' },
  { image: '/assets/img/1.jpg', title: 'Restaurante La Costa', description: 'Delicias del mar y buena vista', route: '/detalle/2' },
  { image: '/assets/img/1.jpg', title: 'Aventura Extrema', description: 'Tour en canopy por la selva', route: '/detalle/3' },
  { image: '/assets/img/1.jpg', title: 'Carro 4x4', description: 'Ideal para explorar Costa Rica', route: '/detalle/4' },
  { image: '/assets/img/1.jpg', title: 'Spa y Relax', description: 'Un descanso que mereces', route: '/detalle/5' },
  { image: '/assets/img/1.jpg', title: 'Tour Volcán Arenal', description: 'Experiencia única cerca del volcán', route: '/detalle/6' },
  { image: '/assets/img/1.jpg', title: 'Café Tico', description: 'Disfruta el mejor café local', route: '/detalle/7' },
  { image: '/assets/img/1.jpg', title: 'Isla del Coco', description: 'Explora la biodiversidad marina', route: '/detalle/8' },
  { image: '/assets/img/1.jpg', title: 'Catarata La Fortuna', description: 'Maravilla natural para visitar', route: '/detalle/9' },
  { image: '/assets/img/1.jpg', title: 'Parque Manuel Antonio', description: 'Playas y selva en un solo lugar', route: '/detalle/10' },
  { image: '/assets/img/1.jpg', title: 'Surf Playa Tamarindo', description: 'Ideal para surfistas de todos niveles', route: '/detalle/11' },
  { image: '/assets/img/1.jpg', title: 'Reserva Monteverde', description: 'Bosque nuboso con fauna espectacular', route: '/detalle/12' },
  { image: '/assets/img/1.jpg', title: 'Golf Costa Rica', description: 'Campos de golf con vistas increíbles', route: '/detalle/13' },
  { image: '/assets/img/1.jpg', title: 'Yoga y Bienestar', description: 'Encuentra paz y relajación', route: '/detalle/14' },
  { image: '/assets/img/1.jpg', title: 'Aventura en Río Pacuare', description: 'Rafting y deportes acuáticos', route: '/detalle/15' },
  { image: '/assets/img/1.jpg', title: 'Mercado Central', description: 'Cultura y sabores típicos', route: '/detalle/16' },
  { image: '/assets/img/1.jpg', title: 'Isla Tortuga', description: 'Escapada paradisíaca de un día', route: '/detalle/17' },
  { image: '/assets/img/1.jpg', title: 'Tour de Café', description: 'Aprende todo sobre el café tico', route: '/detalle/18' },
  { image: '/assets/img/1.jpg', title: 'Parapente en Playa Hermosa', description: 'Vuela y disfruta vistas increíbles', route: '/detalle/19' },
  { image: '/assets/img/1.jpg', title: 'Museo Nacional', description: 'Historia y cultura costarricense', route: '/detalle/20' },
];


  currentOffset = 0;
  autoplayInterval: any;
  visibleItems = 4; // cambia con el tamaño de pantalla
  scrollStep = 100 / this.visibleItems;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.autoplayInterval = setInterval(() => {
      this.next();
    }, 5000);
  }

  ngOnDestroy(): void {
    clearInterval(this.autoplayInterval);
  }

  next(): void {
    const maxOffset = (this.items.length - this.visibleItems) * this.scrollStep;
    if (this.currentOffset >= maxOffset) {
      this.currentOffset = 0;
    } else {
      this.currentOffset += this.scrollStep;
    }
  }

  prev(): void {
    if (this.currentOffset <= 0) {
      this.currentOffset = (this.items.length - this.visibleItems) * this.scrollStep;
    } else {
      this.currentOffset -= this.scrollStep;
    }
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
