import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {

  constructor() { }
option = {
slidesPerView: 1.4,
// centeredSlides: true,
 loop: true,
spaceBetween: 10
//autoplay: true
}

personal = [
  {img: '../../../../assets/musculacao.jpg', name: 'MUSCULAÇÃO' },
  {img: '../../../../assets/Powerlifting.jpg', name: 'POWERLIFTING' },
  {img: '../../../../assets/crossfit.jpg', name: 'CROSS FITNESS' },
  {img: '../../../../assets/artesMarciais.jpg', name: 'ARTES MARCIAIS' },
  {img: '../../../../assets/fitDance.jpg', name: 'FIT DANCE' },
  {img: '../../../../assets/yoga.jpg', name: 'YOGA' },
]

programs = [
  {img: '../../../../assets/musculacao.jpg', name: 'MUSCULAÇÃO' },
  {img: '../../../../assets/Powerlifting.jpg', name: 'POWERLIFTING' },
  {img: '../../../../assets/artesMarciais.jpg', name: 'ARTES MARCIAIS' },
]

 contents = [
  {img: '../../../../assets/diet.jpg', name: 'DICAS DE EMAGRECIMENTO' },
  {img: '../../../../assets/bcaa.jpg', name: 'GUIA DE SUPLEMENTAÇÃO' },
  {img: '../../../../assets/5htp.jpg', name: 'BENEFÍCIOS DO 5-HTP' },
]


  ngOnInit() {}

}
