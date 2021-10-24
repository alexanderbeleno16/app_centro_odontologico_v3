import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'src/app/servicios/paciente.service';
import { OdontologoService } from 'src/app/servicios/odontologo.service';
import { ConsultaService } from 'src/app/servicios/consulta.service';
import { TratamientoService } from 'src/app/servicios/tratamiento.service';
import { FacturaService } from 'src/app/servicios/factura.service';
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-section-tablas',
  templateUrl: './section-tablas.component.html',
  styleUrls: ['./section-tablas.component.css']
})
export class SectionTablasComponent implements OnInit {

  /*--------- VARIABLES DE TIPO FORMGROUP ---------*/ 
  formPaci:FormGroup
  formOdon:FormGroup; 
  formConsulta:FormGroup; 
  formtratamiento:FormGroup; 
  formFactura:FormGroup; 
  id_editar:number=0;
  
  constructor(private _builder:FormBuilder, private pacienteService: PacienteService, private odonService: OdontologoService,
    private consultaService: ConsultaService, private tratamientoService: TratamientoService,
    private facturaService: FacturaService) 
    {
      this.formPaci=this._builder.group({
        paciId:['',[Validators.required]],
        paci_nombre: ['', [Validators.required]],
        paci_apellido: ['', [Validators.required]],
        paci_edad: ['', [Validators.required]],
        paci_telefono: ['', [Validators.required]],
        paci_direccion: ['', [Validators.required]],
        paci_correo: ['', [Validators.required]]
      })
      
      this.formOdon=this._builder.group({
        odon_id:['',[Validators.required]],
        odon_nombre: ['', [Validators.required]],
        odon_apellido: ['', [Validators.required]],
        odon_edad: ['', [Validators.required]],
        odon_telefono: ['', [Validators.required]],
        odon_direccion: ['', [Validators.required]],
        odon_correo: ['', [Validators.required]]
      })

      this.formConsulta=this._builder.group({
        con_fecha: ['', [Validators.required]],
        con_descripcion: ['', [Validators.required]],
        con_paciId: ['', [Validators.required]],
        con_odonId: ['', [Validators.required]]
      })

      this.formtratamiento=this._builder.group({
        trata_tipo: ['', [Validators.required]],
        trata_descri: ['', [Validators.required]],
        trata_precio: ['', [Validators.required]],
        trata_paciId: ['', [Validators.required]],
        trata_odonId: ['', [Validators.required]],
        trata_conId: ['', [Validators.required]]
      })

      this.formFactura=this._builder.group({
        fac_paciId: ['', [Validators.required]],
        fac_odoid: ['', [Validators.required]],
        fac_conId: ['', [Validators.required]]
      })
    }
    /*  --------- OBJETOS --------- */
    lista_paciente:any; tOdontologo: any; tConsulta: any; tFactura: any; tTrataminto: any;
    nuevopas={
      paciId: null,
      paciNombres: null,
      paciApellido: null,
      paciEdad: null,
      paciTelefono: null,
      paciDireccion: null,
      paciCorreo: null
    }

    nuevoodo={
      odonId: null,
      odoNombres: null,
      odoApellido: null,
      odoEdad: null,
      odoTelefono: null,
      odoDireccion: null,
      odoCorreo: null
    }

    nuevocon={
      conFecha: null,
      conDescri: null,
      paciId: null,
      odonId: null
    }

    nuevofac={
      paciId: null,
      odonId: null,
      conId: null
    }

    nuevotrata={
      tipoTrata: null,
      trataDescri: null,
      trataPrecio: null,
      paciId: null,
      odonId: null,
      conId: null
    }


  /* ngOnInit*/ 
  ngOnInit() {
    this.llamarPaci();
    this.llamarOdo();
    this.llamarCon();
    this.llamarTrata();
    this.llamarFac();
  }

  /* ------------------------ METODOS GET ------------------------ */
  llamarPaci(){
    this.pacienteService.retornarPas().subscribe(result => this.lista_paciente = result);
  }

  llamarOdo(){
    this.odonService.retornarOdo().subscribe(result => this.tOdontologo = result);
  }

  llamarCon(){
    this.consultaService.retornarCon().subscribe(result => this.tConsulta = result);
  }

  llamarTrata(){
    this.tratamientoService.retornarTra().subscribe(result => this.tTrataminto = result);
  }

  llamarFac(){
    this.facturaService.retornarFac().subscribe(result => this.tFactura = result);
  }
 

  /* ------------------------ METODOS INSERT ------------------------ */

  insertaPac(value:any){

    this.nuevopas={
      paciId: value.paciId,
      paciNombres: value.paci_nombre,
      paciApellido: value.paci_apellido,
      paciEdad: value.paci_edad,
      paciDireccion: value.paci_direccion,
      paciTelefono: value.paci_telefono,
      paciCorreo: value.paci_correo
    }
    
    this.pacienteService.insertaPac(this.nuevopas).subscribe(datos => {
      console.log(datos)
      alert("contacto agregado")
      this.formPaci.reset()
      this.llamarPaci();
    });
  }

  insertaOdo(value:any){

    this.nuevoodo={
      odonId: value.odon_id,
      odoNombres: value.odon_nombre,
      odoApellido: value.odon_apellido,
      odoEdad: value.odon_edad,
      odoDireccion: value.odon_direccion,
      odoTelefono: value.odon_telefono,
      odoCorreo: value.odon_correo
    }
    
    this.odonService.insertaOdo(this.nuevoodo).subscribe(datos => {
      console.log(datos)
      alert("contacto agregado")
      this.formOdon.reset()
      this.llamarOdo();
    });
  }

  insertaCon(value:any){

    this.nuevocon={
      conFecha: value.con_fecha,
      conDescri: value.con_descripcion,
      odonId: value.con_odonId,
      paciId: value.con_paciId
    }
    
    this.consultaService.insertaCon(this.nuevocon).subscribe(datos => {
      console.log(datos)
      alert("consulta agregada")
      this.formConsulta.reset()
      this.llamarCon();
    });
  }

  insertaTrara(value:any){
    this.nuevotrata={
      tipoTrata: value.trata_tipo,
      trataDescri: value.trata_descri,
      trataPrecio: value.trata_precio,
      paciId: value.trata_paciId,
      odonId: value.trata_odonId,
      conId: value.trata_conId
    }


    this.tratamientoService.insertaTra(this.nuevotrata).subscribe(datos => {
      console.log(datos)
      alert("consulta agregada")
      this.formtratamiento.reset()
      this.llamarTrata();
    });
  }

  insertaFac(value:any){
    
    this.nuevofac={
      paciId: value.fac_paciId,
      odonId: value.fac_odoid,
      conId: value.fac_conId
    }

    this.facturaService.insertaFac(this.nuevofac).subscribe(datos => {
      console.log(datos)
      alert("consulta agregada")
      this.formFactura.reset()
      this.facturaService.retornarFac()
      this.llamarFac();
    });
  }

  /* ------------------------ METODOS SELECIONAR ------------------------ */
   seleccionarPac(paci_edit:any){
    this.id_editar = paci_edit['CC'];
    this.formPaci.setValue({
      paciId: paci_edit['CC'],
      paci_nombre: paci_edit['Nombre'],
      paci_apellido: paci_edit['Apellido'],
      paci_edad: paci_edit['Edad'],
      paci_direccion: paci_edit['direccion'],
      paci_telefono: paci_edit['telefono'],
      paci_correo: paci_edit['correo']
    });
  }

  seleccionarOdon(paci_edit:any){
    this.id_editar = paci_edit['CC'];
    this.formOdon.setValue({
      odon_id: paci_edit['CC'],
      odon_nombre: paci_edit['Nombre'],
      odon_apellido: paci_edit['Apellido'],
      odon_edad: paci_edit['Edad'],
      odon_direccion: paci_edit['direccion'],
      odon_telefono: paci_edit['telefono'],
      odon_correo: paci_edit['correo']
    });
  }

  seleccionarFac(fac_edit:any){
    this.id_editar = fac_edit['ID'];
    this.formFactura.setValue({
      fac_paciId: fac_edit['PacienteId'],
      fac_odoid: fac_edit['OdontologoID'],
      fac_conId: fac_edit['ConsultaID']
    });
  }

  seleccionarCon(con_edit:any){
    this.id_editar = con_edit['ID'];
    this.formConsulta.setValue({
      con_fecha: con_edit['Fecha'],
      con_descripcion: con_edit['Descripcion'],
      con_odonId: con_edit['IdOdontologo'],
      con_paciId: con_edit['IdPaciente']
    });
  }

  seleccionarTra(tra_edit:any){
    this.id_editar = tra_edit['ID'];
    this.formtratamiento.setValue({
      trata_tipo: tra_edit['tipoTratamiento'],
      trata_paciId: tra_edit['IdPaciente'],
      trata_descri: tra_edit['Descripcion'],
      trata_odonId: tra_edit['IdOdontologo'],
      trata_conId: tra_edit['ConsultaID'],
      trata_precio: tra_edit['Precio']
    });
  }

  /* ------------------------ METODOS MODIFICAR ------------------------ */

  modificaPac(value:any){

    this.nuevopas={
      paciId: value.paciId,
      paciNombres: value.paci_nombre,
      paciApellido: value.paci_apellido,
      paciEdad: value.paci_edad,
      paciDireccion: value.paci_direccion,
      paciTelefono: value.paci_telefono,
      paciCorreo: value.paci_correo
    }
    
    this.pacienteService.updatePac(this.id_editar, this.nuevopas).subscribe(datos => {
      console.log(datos)
      alert("contacto actualizado")
      this.formPaci.reset()
      /* this.pacienteService.retornarPas() */
      this.llamarPaci();
    });
  }

  modificaOdo(value:any){

    this.nuevoodo={
      odonId: value.odon_id,
      odoNombres: value.odon_nombre,
      odoApellido: value.odon_apellido,
      odoEdad: value.odon_edad,
      odoDireccion: value.odon_direccion,
      odoTelefono: value.odon_telefono,
      odoCorreo: value.odon_correo
    }
    
    this.odonService.updateOdo(this.id_editar,this.nuevoodo).subscribe(datos => {
      console.log(datos)
      alert("contacto agregado")
      this.formOdon.reset()
      this.llamarOdo();
    });
  }

  modificaCon(value:any){

    this.nuevocon={
      conFecha: value.con_fecha,
      conDescri: value.con_descripcion,
      paciId: value.con_paciId,
      odonId: value.con_odonId
    }
    
    this.consultaService.updateCon(this.id_editar,this.nuevocon).subscribe(datos => {
      console.log(datos)
      alert("consulta agregada")
      this.formConsulta.reset()
      this.llamarCon();
    });
  }

  modificaTra(value:any){
    this.nuevotrata={
      tipoTrata: value.trata_tipo,
      trataDescri: value.trata_descri,
      trataPrecio: value.trata_precio,
      paciId: value.trata_paciId,
      odonId: value.trata_odonId,
      conId: value.trata_conId
    }


    this.tratamientoService.updateTra(this.id_editar,this.nuevotrata).subscribe(datos => {
      console.log(datos)
      alert("consulta agregada")
      this.formtratamiento.reset()
      this.llamarTrata();
    });
  }

  modificaFac(value:any){
    
    this.nuevofac={
      paciId: value.fac_paciId,
      odonId: value.fac_odoid,
      conId: value.fac_conId
    }

    this.facturaService.updateFac(this.id_editar,this.nuevofac).subscribe(datos => {
      console.log(datos)
      alert("consulta agregada")
      this.formFactura.reset()
      this.llamarFac();
    });
  }

  /*------------ METODO ELIMINAR -------------*/ 

  eliminarPac(id:number){
    if(window.confirm("¿Está seguro que desea eliminar el registro con ID:"+id+"?")){
      this.pacienteService.eliminarPac(id).subscribe(datos =>{
        console.log(datos)
        alert("¡¡Contacto ELIMINADO!!")
        this.formPaci.reset()
        this.llamarPaci()
      }) 
    }
  }

  eliminarOdon(id:number){
    if(window.confirm("¿Está seguro que desea eliminar el registro con ID:"+id+"?")){
      this.odonService.eliminarOdo(id).subscribe(datos =>{
        console.log(datos)
        alert("¡¡Contacto ELIMINADO!!")
        this.formOdon.reset()
        this.llamarOdo()
      }) 
    }
  }

  eliminarCon(id:number){
    if(window.confirm("¿Está seguro que desea eliminar el registro con ID:"+id+"?")){
      this.consultaService.eliminarCon(id).subscribe(datos =>{
        console.log(datos)
        alert("¡¡Contacto ELIMINADO!!")
        this.formConsulta.reset()
        this.llamarCon()
      }) 
    }
  }


  eliminarFac(id:number){
    if(window.confirm("¿Está seguro que desea eliminar el registro con ID:"+id+"?")){
      this.facturaService.eliminarFac(id).subscribe(datos =>{
        console.log(datos)
        alert("¡¡Contacto ELIMINADO!!")
        this.formFactura.reset()
        this.llamarFac()
      }) 
    }
  }

  eliminarTra(id:number){
    if(window.confirm("¿Está seguro que desea eliminar el registro con ID:"+id+"?")){
      this.tratamientoService.eliminarTra(id).subscribe(datos =>{
        console.log(datos)
        alert("¡¡Contacto ELIMINADO!!")
        this.formtratamiento.reset()
        this.llamarTrata()
      }) 
    }
  }

}
