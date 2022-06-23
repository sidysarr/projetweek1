import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from'@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dialog-cour',
  templateUrl: './dialog-cour.component.html',
  styleUrls: ['./dialog-cour.component.scss']
})
export class DialogCourComponent implements OnInit {

  allClasse: any[] = [];
  eleveForm !: FormGroup;
  actionBtn : string = "Enregistrer" ;
  titleDialog : string = "Ajouter Eleve";
  
  constructor(private formBuilder : FormBuilder,
     private api : ApiService,
     @Inject(MAT_DIALOG_DATA) public editData : any,
     private dialogRef : MatDialogRef<DialogCourComponent>) { }

  ngOnInit(): void {
   this.getAllClasse();
    this.eleveForm = this.formBuilder.group({
      nomEleve : ['',Validators.required],   
      prenomEleve : ['',Validators.required],
      dateNais : ['',Validators.required],
      lieuNais : ['',Validators.required],   
      sexe : ['',Validators.required],
      classe : ['',Validators.required]
    });

    if(this.editData){
      this.actionBtn = "Modifier";
      
      this.eleveForm.controls['nomEleve'].setValue(this.editData.nomEleve);
      this.eleveForm.controls['prenomEleve'].setValue(this.editData.prenomEleve);   
      this.eleveForm.controls['dateNais'].setValue(this.editData.dateNais);
      
      this.eleveForm.controls['lieuNais'].setValue(this.editData.lieuNais);
      this.eleveForm.controls['sexe'].setValue(this.editData.sexe);   
      this.eleveForm.controls['classe'].setValue(this.editData.classe);

    }
  }
  getAllClasse(){
    this.api.getClasse()
    .subscribe({
      next:(res)=>{
        this.allClasse =res;
      },
      error:()=>{
        alert('Erreur')
      }
       
    })
  }
  addEleve(){
    if(!this.editData){
      
    if(this.eleveForm.valid){
      this.api.postEleve(this.eleveForm.value)
      .subscribe({
        next:(res)=>{
          alert('Eleve ajouter avec succes');
          this.eleveForm.reset();
          this.dialogRef.close('enregistrer');
        },
        error:()=>{
          alert('Erreur')
        }
        
      })
    }
      
    }else{
      this.updateEleve();
    }

  }

  updateEleve(){
    this.api.putEleve(this.eleveForm.value,this.editData.id)
    .subscribe({
     next:(res)=>{
       alert('Eleve modifier avec succes');
       this.eleveForm.reset();
       this.dialogRef.close('modifier');
       
     },
     error:()=>{
       alert('Erreur');
     }
     
   })
 }


}
