import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {faArrowAltCircleDown,faDisplay,faArrowRight,faPencilRuler,faBullhorn,faQuoteLeft,faQuoteRight} from '@fortawesome/free-solid-svg-icons';
import {faTwitter,faFacebookF,faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { TestimonialService } from '../testimonial.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
    trigger('fadeIn',[
      state('void',style({opacity:0})),
      transition(':enter',[
        animate(2000)
      ])]),
      trigger('fadeSlide', [
        transition(':enter', [style({ opacity: 0, transform: 'translateX(-250px)' }),
        animate(
          3000,
          style({ opacity: 1, transform: 'translateX(0)' })
        )])]),
        trigger('flyInOut', [
          state('in', style({ transform: 'translateX(0)' })),
          transition('void => *', [
            style({ transform: 'translateX(-100%)' }),
            animate(2000)
          ]),
          transition('* => void', [
            animate(2000, style({ transform: 'translateX(100%)' }))
          ])
        ])
  ]
})
export class HomeComponent implements OnInit {
  faArrowAltCircleDown=faArrowAltCircleDown;
  faArrowRight=faArrowRight;
  faDisplay=faDisplay;
  faPencilRuler=faPencilRuler;
  faBullhorn=faBullhorn;
  faQuoteLeft=faQuoteLeft;
  faQuoteRight=faQuoteRight;
  faTwitter  = faTwitter ;
  faFacebookF = faFacebookF;
  faLinkedin = faLinkedin;
  testimonials=[{
    Message:'',
    clientName:'',
    clientPosition:'',
    Date:'',
    ImageUrl:''
  }];
  imageWidth:number=50;
  imageHeight:number=50;
  constructor(private testimonialService:TestimonialService) { }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    nav:false,
    dots: true,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 1
      },
      760: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
    
  }
  ngOnInit(): void {
    this.testimonialService.getTestimonials().subscribe((data)=>{
      this.testimonials=JSON.parse(JSON.stringify(data));
    })
  }

}
