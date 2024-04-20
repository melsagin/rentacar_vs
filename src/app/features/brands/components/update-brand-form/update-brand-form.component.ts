import { BrandsApiService } from './../../services/brandsApi.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UpdateBrandRequest } from '../../models/update-brand-request';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-brand-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './update-brand-form.component.html',
  styleUrl: './update-brand-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateBrandFormComponent implements OnInit{

  id: string | null = null

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');//burası tam olarak ne yapıyor?
  }

  form: FormGroup = this.fb.group({
    name: [
      '',
      [Validators.required],
    ],
  });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,//Bu ne işe yarıyor?
    private brandsApiService: BrandsApiService
  ) {}

  updateBrand(){
    const request: UpdateBrandRequest = {
      name: this.form.value.name,
    }
    this.brandsApiService.updateBrand(request, this.id).subscribe({
      next: (response) => {
        console.info('Response:', response);
      },
      error: (error) => {
        console.error('Error:', error);
      },
      complete: () => {
        console.info('Brand updated successfully');
        this.form.reset();
      },
    })
  }

  onFormSubmit(){
    if(this.form.invalid){
      return;
    }
    this.updateBrand();
  }

}
