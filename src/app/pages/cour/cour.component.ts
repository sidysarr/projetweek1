import { Component, OnInit,ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DialogEcoleComponent } from 'src/app/components/dialog-ecole/dialog-ecole.component';
import { DialogCourComponent } from 'src/app/components/dialog-cour/dialog-cour.component';

@Component({
  selector: 'app-cour',
  templateUrl: './cour.component.html',
  styleUrls: ['./cour.component.scss']
})
export class CourComponent implements OnInit {

  title = "Gestion des Cours";
  displayedColumns: string[] = ['id', 'nomCours','volumeHoraire', 'classe','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private dialog : MatDialog,private api : ApiService) { }

  ngOnInit(): void {
    this.getAllCours();
  }
  
 
  
  getAllCours(){
    this.api.getCours()
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

  editCours(row : any){
    this.dialog.open(DialogCourComponent,{
      width: '30%',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val==='modifier'){
        this.getAllCours();
      }
    })
  }

  deleteCours(id : number){
    this.api.deleteCours(id)
    .subscribe({
      next:(res)=>{
       alert("Cours supprimée avec succees")
       this.getAllCours();
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
    this.dialog.open(DialogCourComponent, {
     width : '30%'
    }).afterClosed().subscribe(val=>{
      if(val==='enregistrer'){
        this.getAllCours();
      }
    })
  }
   
}
