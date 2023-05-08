import { Component } from '@angular/core';
import { CoffeService } from 'src/app/servicios/coffe.service';

@Component({
  selector: 'app-coffe',
  templateUrl: './coffe.component.html',
  styleUrls: ['./coffe.component.css']
})
export class CoffeComponent {
  constructor(private servicio:CoffeService){}
  dataCoffe: any;
  ngOnInit(){
  this.servicio.getCoffe().subscribe(coffe =>{
    this.dataCoffe=coffe
  })
  }
}
