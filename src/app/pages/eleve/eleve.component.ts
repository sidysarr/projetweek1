import { Component, OnInit,ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogClasseComponent } from 'src/app/components/dialog-classe/dialog-classe.component';
import { ApiService } from 'src/app/services/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DialogEcoleComponent } from 'src/app/components/dialog-ecole/dialog-ecole.component';

@Component({
  selector: 'app-eleve',
  templateUrl: './eleve.component.html',
  styleUrls: ['./eleve.component.scss']
})
export class EleveComponent implements OnInit {

  title = "Gestion des eleves";
  displayedColumns: string[] = ['id', 'nomEleve','prenomEleve', 'dateNais', 'lieuNais', 'sexe', 'classe','action'];
  dataSource!: MatTableDataSource<any>;
 

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private dialog : MatDialog,private api : ApiService) { }

  ngOnInit(): void {
    this.getAllEleve();
  }
  
  
  getAllEleve(){
    this.api.getEleve()
    .subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error:()=>{
        alert('Erreur')
      }
       
    })
  }

  editEleve(row : any){
    this.dialog.open(DialogEcoleComponent,{
      width: '30%',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val==='modifier'){
        this.getAllEleve();
      }
    })
  }

  deleteEleve(id : number){
    this.api.deleteEleve(id)
    .subscribe({
      next:(res)=>{
       alert("Eleve supprimée avec succees")
       this.getAllEleve();
      },
      error:()=>{
        alert('Erreur')
      }
       
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  openDialog() {
    this.dialog.open(DialogEcoleComponent, {
     width : '30%'
    }).afterClosed().subscribe(val=>{
      if(val==='enregistrer'){
        this.getAllEleve();
      }
    })
  }
   

}
