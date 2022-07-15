import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {

  constructor(private http:HttpClient) { }
  getTestimonials(){
    return this.http.get("http://localhost:3000/testimonials");
  }
}
