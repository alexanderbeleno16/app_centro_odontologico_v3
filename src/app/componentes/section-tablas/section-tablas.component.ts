import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'src/app/servicios/paciente.service';
import { OdontologoService } from 'src/app/servicios/odontologo.service';
import { ConsultaService } from 'src/app/servicios/consulta.service';
import { TratamientoService } from 'src/app/servicios/tratamiento.service';
import { FacturaService } from 'src/app/servicios/factura.service';

@Component({
  selector: 'app-section-tablas',
  templateUrl: './section-tablas.component.html',
  styleUrls: ['./section-tablas.component.css']
})
export class SectionTablasComponent implements OnInit {

  tPaciente: any; tOdontologo: any; tConsulta: any; tFactura: any; tTrataminto: any;

  constructor(private pacienteService: PacienteService, private odonService: OdontologoService,
    private consultaService: ConsultaService, private tratamientoService: TratamientoService,
    private facturaService: FacturaService) { }

  ngOnInit() {
    this.pacienteService.retornarPas()
      .subscribe(result => this.tPaciente = result)

      this.odonService.retornarOdo()
      .subscribe(result => this.tOdontologo = result)

      this.consultaService.retornarCon()
      .subscribe(result => this.tConsulta = result)

      this.tratamientoService.retornarTra()
      .subscribe(result => this.tTrataminto = result)

      this.facturaService.retornarFac()
      .subscribe(result => this.tFactura = result)
  }

}
