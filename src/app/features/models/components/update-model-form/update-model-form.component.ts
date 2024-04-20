import { ModelsApiService } from './../../services/modelsApi.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UpdateModelRequest } from '../../models/update-model-request';

@Component({
  selector: 'app-update-model-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './update-model-form.component.html',
  styleUrl: './update-model-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateModelFormComponent implements OnInit{

  id: string | null = null

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  form: FormGroup = this.fb.group({
    name: [
      '',
      [Validators.required]
    ],
    brandId: [
      '',
      [Validators.required]
    ],
    modelYear: [
      '',
      [Validators.required]
    ],
    imageUrl: [
      '',
      [Validators.required]
    ],
    dailyPrice: [
      '',
      [Validators.required]
    ],
  })

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private modelsApiService: ModelsApiService
  ){}

  updateModel(){
    const request: UpdateModelRequest = {
      name: this.form.value.name,
      brandId: this.form.value.brandId,
      modelYear: this.form.value.modelYear,
      imageUrl: this.form.value.imageUrl,
      dailyPrice: this.form.value.dailyPrice
    };
    this.modelsApiService.updateModel(request, this.id).subscribe({
      next: (response) => {
        console.info('Response:', response);
      },
      error: (error) => {
        console.error('Error:', error);
      },
      complete: () => {
        console.info('Model created successfully');
        this.form.reset();
      },
    });
  }

  onFormSubmit() {
    if(this.form.invalid){
      return;
    }
    this.updateModel();
  }

}
