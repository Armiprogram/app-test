import { Component } from '@angular/core';
import { PersonalService } from 'src/app/servicios/personal.service';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent {
constructor(private servicio:PersonalService){}
guardarPersonal(nombre:string,edad:number,ciudad:string){
  
}
}
