import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from'@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { DialogEcoleComponent } from '../dialog-ecole/dialog-ecole.component';

@Component({
  selector: 'app-dialog-cour',
  templateUrl: './dialog-cour.component.html',
  styleUrls: ['./dialog-cour.component.scss']
})
export class DialogCourComponent implements OnInit {

  

  allClasse: any[] = [];
  coursForm !: FormGroup;
  actionBtn : string = "Enregistrer" ;
  titleDialog : string = "Ajouter Cours";
  
  constructor(private formBuilder : FormBuilder,
     private api : ApiService,
     @Inject(MAT_DIALOG_DATA) public editData : any,
     private dialogRef : MatDialogRef<DialogEcoleComponent>) { }

  ngOnInit(): void {
   this.getAllClasse();
    this.coursForm = this.formBuilder.group({
      nomCours : ['',Validators.required],   
      volumeHoraire : ['',Validators.required],
      classe : ['',Validators.required]
    });

    if(this.editData){
      this.actionBtn = "Modifier";
      
      this.coursForm.controls['nomCours'].setValue(this.editData.nomCours);
      this.coursForm.controls['volumeHoraire'].setValue(this.editData.volumeHoraire);   
      this.coursForm.controls['classe'].setValue(this.editData.classe);

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
  addCours(){
    if(!this.editData){
      
    if(this.coursForm.valid){
      this.api.postCours(this.coursForm.value)
      .subscribe({
        next:(res)=>{
          alert('Cours ajouter avec succes');
          this.coursForm.reset();
          this.dialogRef.close('enregistrer');
        },
        error:()=>{
          alert('Erreur')
        }
        
      })
    }
      
    }else{
      this.updateCours();
    }

  }

  updateCours(){
    this.api.putCours(this.coursForm.value,this.editData.id)
    .subscribe({
     next:(res)=>{
       alert('Cours modifier avec succes');
       this.coursForm.reset();
       this.dialogRef.close('modifier');
       
     },
     error:()=>{
       alert('Erreur');
     }
     
   })
 }


}
