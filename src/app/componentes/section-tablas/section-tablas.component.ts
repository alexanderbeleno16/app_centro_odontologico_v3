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
        // con_paciId: ['', [Validators.required]],
        // con_odonId: ['', [Validators.required]],
        con_select_paciente: ['', [Validators.required]],
        con_select_odontologo: ['', [Validators.required]]
      })

      this.formtratamiento=this._builder.group({
        trata_tipo: ['', [Validators.required]],
        trata_descri: ['', [Validators.required]],
        trata_precio: ['', [Validators.required]],
        tra_select_consulta: ['', [Validators.required]],
        tra_select_paciente: ['', [Validators.required]],
        tra_select_odontologo: ['', [Validators.required]]
      })

      this.formFactura=this._builder.group({
        // fac_paciId: ['', [Validators.required]],
        // fac_odoid: ['', [Validators.required]],
        fac_select_consulta: ['', [Validators.required]],
        fac_select_paciente: ['', [Validators.required]],
        fac_select_odontologo: ['', [Validators.required]]
      })
    }
    /*  --------- OBJETOS --------- */
    lista_paciente:any; tOdontologo: any; tConsulta: any; tFactura: any; tTrataminto: any;
    nuevopas={
      paciDoc: null,
      paciNombres: null,
      paciApellido: null,
      paciEdad: null,
      paciTelefono: null,
      paciDireccion: null,
      paciCorreo: null
    }

    nuevoodo={
      odonDoc: null,
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
      paciDoc: value.paciId,
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
      odonDoc: value.odon_id,
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
      odonId: value.con_select_odontologo,
      paciId: value.con_select_paciente
    }
    console.log(this.nuevocon);
    
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
      /* paciId: value.trata_paciId,
      odonId: value.trata_odonId,
      conId: value.trata_conId */
      paciId: value.tra_select_paciente,
      odonId: value.tra_select_odontologo,
      conId: value.tra_select_consulta
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
      paciId: value.fac_select_paciente,
      odonId: value.fac_select_odontologo,
      conId: value.fac_select_consulta
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
    this.id_editar = paci_edit['id'];
    this.formPaci.setValue({
      paciId: paci_edit['cc'],
      paci_nombre: paci_edit['nombre'],
      paci_apellido: paci_edit['apellido'],
      paci_edad: paci_edit['edad'],
      paci_direccion: paci_edit['direccion'],
      paci_telefono: paci_edit['telefono'],
      paci_correo: paci_edit['correo']
    });
  }

  seleccionarOdon(paci_edit:any){
    this.id_editar = paci_edit['id'];
    this.formOdon.setValue({
      odon_id: paci_edit['cc'],
      odon_nombre: paci_edit['nombre'],
      odon_apellido: paci_edit['apellido'],
      odon_edad: paci_edit['edad'],
      odon_direccion: paci_edit['direccion'],
      odon_telefono: paci_edit['telefono'],
      odon_correo: paci_edit['correo']
    });
  }

  seleccionarFac(fac_edit:any){
    this.id_editar = fac_edit['id'];
    this.formFactura.setValue({
      tra_select_paciente: fac_edit['idPaciente'],
      tra_select_odontologo: fac_edit['idOdontologo'],
      tra_select_consulta: fac_edit['idConsulta']
    });
  }

  seleccionarCon(con_edit:any){
    this.id_editar = con_edit['id'];
    this.formConsulta.setValue({
      con_fecha: con_edit['fecha'],
      con_descripcion: con_edit['descripcion'],
      con_select_odontologo: '',
      con_select_paciente: ''
      // con_paciId_o: con_edit['paciId'],
      // con_odonId_o: con_edit['odonId']
      
    });
  }

  seleccionarTra(tra_edit:any){
    this.id_editar = tra_edit['id'];
    this.formtratamiento.setValue({
      trata_tipo: tra_edit['tipoTratamiento'],
      tra_select_paciente: tra_edit['idPaciente'],
      trata_descri: tra_edit['descripcion'],
      tra_select_odontologo: tra_edit['idOdontologo'],
      tra_select_consulta: tra_edit['idConsulta'],
      trata_precio: tra_edit['precio']
    });
  }

  /* ------------------------ METODOS MODIFICAR ------------------------ */

  modificaPac(value:any){

    this.nuevopas={
      paciDoc: value.paciId,
      paciNombres: value.paci_nombre,
      paciApellido: value.paci_apellido,
      paciEdad: value.paci_edad,
      paciDireccion: value.paci_direccion,
      paciTelefono: value.paci_telefono,
      paciCorreo: value.paci_correo
    }
    console.log(this.id_editar);
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
      odonDoc: value.odon_id,
      odoNombres: value.odon_nombre,
      odoApellido: value.odon_apellido,
      odoEdad: value.odon_edad,
      odoDireccion: value.odon_direccion,
      odoTelefono: value.odon_telefono,
      odoCorreo: value.odon_correo
    }
    
    this.odonService.updateOdo(this.id_editar,this.nuevoodo).subscribe(datos => {
      console.log(datos)
      alert("contacto actualizado")
      this.formOdon.reset()
      this.llamarOdo();
    });
  }

  modificaCon(value:any){

    this.nuevocon={
      conFecha: value.con_fecha,
      conDescri: value.con_descripcion,
      paciId: value.con_select_paciente,
      odonId: value.con_select_odontologo
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
      paciId: value.tra_select_paciente,
      odonId: value.tra_select_odontologo,
      conId: value.tra_select_consulta
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
      paciId: value.fac_select_paciente,
      odonId: value.fac_select_odontologo,
      conId: value.fac_select_consulta
    }

    this.facturaService.updateFac(this.id_editar,this.nuevofac).subscribe(datos => {
      console.log(datos)
      alert("consulta agregada")
      this.formFactura.reset()
      this.llamarFac();
    });
  }

  llamaTodo(){
    this.llamarPaci()
    this.llamarOdo()
    this.llamarCon()
    this.llamarTrata()
    this.llamarFac()
  }

  /*------------ METODO ELIMINAR -------------*/ 

  eliminarPac(id:number){
    if(window.confirm("¿Está seguro que desea eliminar el registro con ID:"+id+"?")){
      this.pacienteService.eliminarPac(id).subscribe(datos =>{
        console.log(datos)
        alert("¡¡Contacto ELIMINADO!!")
        this.formPaci.reset()
        this.llamaTodo()
      }) 
    }
  }

  eliminarOdon(id:number){
    if(window.confirm("¿Está seguro que desea eliminar el registro con ID:"+id+"?")){
      this.odonService.eliminarOdo(id).subscribe(datos =>{
        console.log(datos)
        alert("¡¡Contacto ELIMINADO!!")
        this.formOdon.reset()
        this.llamaTodo()
      }) 
    }
  }

  eliminarCon(id:number){
    if(window.confirm("¿Está seguro que desea eliminar el registro con ID:"+id+"?")){
      this.consultaService.eliminarCon(id).subscribe(datos =>{
        console.log(datos)
        alert("¡¡Contacto ELIMINADO!!")
        this.formConsulta.reset()
        this.llamaTodo()
      }) 
    }
  }


  eliminarFac(id:number){
    if(window.confirm("¿Está seguro que desea eliminar el registro con ID:"+id+"?")){
      this.facturaService.eliminarFac(id).subscribe(datos =>{
        console.log(datos)
        alert("¡¡Contacto ELIMINADO!!")
        this.formFactura.reset()
        this.llamaTodo()
      }) 
    }
  }

  eliminarTra(id:number){
    if(window.confirm("¿Está seguro que desea eliminar el registro con ID:"+id+"?")){
      this.tratamientoService.eliminarTra(id).subscribe(datos =>{
        console.log(datos)
        alert("¡¡Contacto ELIMINADO!!")
        this.formtratamiento.reset()
        this.llamaTodo()
      }) 
    }
  }

}
