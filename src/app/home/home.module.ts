import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ServiceViewsComponent } from './components/service-views/service-views.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
]
@NgModule({
    declarations: [
        HomeComponent,
        CarouselComponent,
        ServiceViewsComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ]
})
export class HomeModule { }

