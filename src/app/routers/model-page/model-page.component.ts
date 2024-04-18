import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from '../../shared/layouts/main-layout/main-layout.component';
import { ModelsListComponent } from '../../features/models/components/models-list/models-list.component';
import { BrandsListComponent } from '../../features/models/components/brands-list/brands-list.component';

@Component({
  selector: 'app-model-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MainLayoutComponent,
    ModelsListComponent,
    BrandsListComponent,
  ],
  templateUrl: './model-page.component.html',
  styleUrl: './model-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModelPageComponent { }

