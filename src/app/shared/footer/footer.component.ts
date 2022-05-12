import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GrupoService } from 'src/app/core/services/grupo.service';
import { ModalService } from 'src/app/core/services/modal.service';
import { TalksService } from 'src/app/core/services/talks.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  grupoForm: any;
  public types:string;
  grupos: any;
  tareaForm: any;
 

  constructor(
    private fb: FormBuilder,
    private modalService: ModalService,
    private group: GrupoService,
    private talk: TalksService
  ) { }

  ngOnInit() {

    this.grupoForm = this.fb.group({
      name   : ['',[Validators.required]],
    });

    this.tareaForm = this.fb.group({
      name          : ['', [Validators.required]],
      description   : ['.', [Validators.required]]
    });

    
  }

 
  onGrupo(types: string) {
    console.log("entro aqui");
    if (types == 'crear') {
      this.onCrearGrupo();
    } else if (types == 'editar') {
      this.onUpdateGrupo();
    }
  }


  onTalks(types: string) {
    console.log("entro aqui");
    if (types == 'crear') {
      this.onCrearTalk();
    } else if (types == 'editar') {
      this.onUpdateTalk();
    }
  }
  

  onCrearGrupo(){

    console.log("creando lista");
    this.group.onCreateGrupo(this.grupoForm.value).subscribe(
      data => {
        if (data.success) {
          this.Toast.fire({ icon: 'success', title: '' + data.success });
          this.closeModal('nueva_tarea');
        } else {
          this.Toast.fire({ icon: 'error', title: 'Error, ' + data.error });
        }
        this.grupoForm.controls['name'].reset();
        console.log("return de sms", data);

      }
    )
    console.log("form crear", this.grupoForm.value);
  }

  onCrearTalk(){

    console.log("creando tarea");
    this.talk.onCreateTalks(this.tareaForm.value).subscribe(
      data => {
        if (data.success) {
          this.Toast.fire({ icon: 'success', title: '' + data.success });
          this.closeModal('nueva_tarea');
        } else {
          this.Toast.fire({ icon: 'error', title: 'Error, ' + data.error });
        }
        this.tareaForm.controls['name'].reset();
        console.log("return de sms", data);

      }
    )
    console.log("form crear", this.tareaForm.value);
  }

  onUpdateGrupo(){

    console.log("actualizando lista");
    console.log("form editar", this.grupoForm.value);
  }

  onUpdateTalk(){

    console.log("actualizando lista");
    console.log("form editar", this.grupoForm.value);
  }


  openModal(id: string, type:string) {

    this.types = type;
    if (type == 'editar') {

        this.grupoForm = this.fb.group({
          name   : ['daad', Validators.required],
        });  
      
    } else {
      this.grupoForm = this.fb.group({
        name   : ['', Validators.required],
      });
    }
    this.modalService.open(id);
  }

  openModal2(id: string, type:string) {

    this.types = type;
    if (type == 'editar') {

      this.tareaForm = this.fb.group({
        name          : ['', Validators.required],
        description   : [' ', Validators.required]
      }); 
      
    } else {
      
      this.tareaForm = this.fb.group({
        name          : ['', Validators.required],
        description   : ['.', Validators.required]
      });

    }
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
}



  // Alertas 
  public Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

}
