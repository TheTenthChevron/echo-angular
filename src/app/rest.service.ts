import { Injectable } from '@angular/core';
import { Address } from './address';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  REST_API_SERVER = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  readAddresses(): Observable<Address[]> {
    return this.httpClient.get<Address[]>(`${this.REST_API_SERVER}/addresses`);
  }

  createAddress(address: Address): Observable<Address> {
    return this.httpClient.post<Address>(`${this.REST_API_SERVER}/addresses`, address);
  }

  updateAddress(address: Address) {
    return this.httpClient.put<Address>(`${this.REST_API_SERVER}/addresses/${address.addressId}`, address);
  }

  deleteAddress(address: Address) {
    return this.httpClient.delete<Address>(`${this.REST_API_SERVER}/addresses/${address.addressId}`);
  }

}



