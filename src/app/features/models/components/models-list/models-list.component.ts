import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ModelsApiService } from '../../services/modelsApi.service';
import { ModelListItemDto } from '../../models/model-list-item-dto';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-models-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './models-list.component.html',
  styleUrl: './models-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModelsListComponent implements OnInit, OnChanges {
  @Input() brandId: number | null = null;
  @Input() searchBrandName: string | null = null;

  public list!: ModelListItemDto[];
  // get filteredList(): ModelListItemDto[] {
  //   return this.list.filter((item) => item.brandId === this.brandId);
  // }

  constructor(
    private modelsApiService: ModelsApiService,
    private change: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // Component ilk yerleştirildiğinde tetiklenir.
    this.getList();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Her state değiştiğinde tetiklenir.
    if (changes['brandId'] && changes['brandId'].currentValue !== changes['brandId'].previousValue)
      this.getList();
    if(changes['searchBrandName'] && changes['searchBrandName'].currentValue !== changes['searchBrandName'].previousValue)
      this.getList();
  }

  private getList() {
    this.modelsApiService.getList(this.brandId, this.searchBrandName)
    .subscribe((response) => {
      this.list = response;
      this.change.markForCheck();
    });
  }
}
