import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {
  server_address:string='api';
  constructor(private http:HttpClient) { }
  getTestimonials(){
    return this.http.get(`${this.server_address}/testimonials`);
  }
}
