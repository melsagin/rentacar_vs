import { BrandsApiService } from './../../services/brandsApi.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BrandListItemDto } from '../brands/brand-list-item-dto';

@Component({
  selector: 'app-brands-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './brands-list.component.html',
  styleUrl: './brands-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandsListComponent implements OnInit {
  public list!: BrandListItemDto[];

  constructor(
    private BrandsApiService: BrandsApiService,
    private change: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.BrandsApiService.getList().subscribe((response) => {
      this.list = response;
      this.change.markForCheck();
    });
  }
}
