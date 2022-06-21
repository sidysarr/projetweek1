import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from'@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';



@Component({
  selector: 'app-dialog-classe',
  templateUrl: './dialog-classe.component.html',
  styleUrls: ['./dialog-classe.component.scss']
})
export class DialogClasseComponent implements OnInit {

  classForm !: FormGroup;
  actionBtn : string = "Enregistrer" ;
  titleDialog : string = "Ajouter Classe";
  constructor(private formBuilder : FormBuilder,
     private api : ApiService,
     @Inject(MAT_DIALOG_DATA) public editData : any,
     private dialogRef : MatDialogRef<DialogClasseComponent>) { }

  ngOnInit(): void {
    this.classForm = this.formBuilder.group({
      nomClasse : ['',Validators.required],   
      niveau : ['',Validators.required],
      capacite : ['',Validators.required]
    });

    if(this.editData){
      this.actionBtn = "Modifier";
      
      this.classForm.controls['nomClasse'].setValue(this.editData.nomClasse);
      this.classForm.controls['niveau'].setValue(this.editData.niveau);   
      this.classForm.controls['capacite'].setValue(this.editData.capacite);

    }
  }
  addClasse(){
    if(!this.editData){
      
    if(this.classForm.valid){
      this.api.postClassse(this.classForm.value)
      .subscribe({
        next:(res)=>{
          alert('Classe ajouter avec succes');
          this.classForm.reset();
          this.dialogRef.close('enregistrer');
        },
        error:()=>{
          alert('Erreur')
        }
        
      })
    }
      
    }else{
      this.updateClasse();
    }

  }

  updateClasse(){
    this.api.putClasse(this.classForm.value,this.editData.id)
    .subscribe({
     next:(res)=>{
       alert('Classe modifier avec succes');
       this.classForm.reset();
       this.dialogRef.close('modifier');
       
     },
     error:()=>{
       alert('Erreur');
     }
     
   })
 }
  
}
