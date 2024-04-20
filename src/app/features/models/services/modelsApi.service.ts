import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelListItemDto } from '../models/model-list-item-dto';
import { PostModelRequest } from '../models/post-model-request';
import { PostModelResponse } from '../models/post-model-response';
import { UpdateModelRequest } from '../models/update-model-request';
import { UpdateModelResponse } from '../models/update-model-response';

@Injectable({
  providedIn: 'root',
})
export class ModelsApiService {
  constructor(private http: HttpClient) {}

  getList(
    brandId: number | null = null,
    searchBrandName: string | null = null
  ): Observable<ModelListItemDto[]> {
    const requestQueryParams: any = {
      // brandId: brandId
    };
    if (brandId !== null) requestQueryParams.brandId = brandId; //burda name_like veya yukarıdaki brandId gibi ifadeler benim
    if (searchBrandName) requestQueryParams.name_like = searchBrandName; //backendimdeki path nasıl tanımlandıysa oradan gelir.
    return this.http.get<ModelListItemDto[]>('http://localhost:3000/models', {
      params: requestQueryParams, // ?brandId=1&name_like=land
    });
        // .subscribe(
    //   (httpResponse) => {
    //               return httpResponse;
    //             }
    //   );
  }
  // subscribe(next: (value: Object) => void) {
  //   // wait for the response
  //   // when the response is ready, call next
  //   const response = {}
  //   next(response);
  // }

  postModel(model: PostModelRequest): Observable<PostModelResponse> {
    return this.http.post<PostModelResponse>(
      'http://localhost:3000/models',
      model
    );
  }

  updateModel(model: UpdateModelRequest, id: string | null){
    return this.http.put<UpdateModelResponse>(
      'http://localhost:3000/models'+id,
      model
    );
  }
}
