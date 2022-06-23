import { Component, OnInit,ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogClasseComponent } from 'src/app/components/dialog-classe/dialog-classe.component';
import { ApiService } from 'src/app/services/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.scss']
})
export class ClasseComponent implements OnInit {
  title = "Gestion des classe";
  displayedColumns: string[] = ['id', 'nomClasse', 'niveau', 'capacite','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private dialog : MatDialog,private api : ApiService) { }

  ngOnInit(): void {
    this.getAllClasse();
  }
  
 
  
  getAllClasse(){
    this.api.getClasse()
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

  editClasse(row : any){
    this.dialog.open(DialogClasseComponent,{
      width: '30%',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val==='modifier'){
        this.getAllClasse();
      }
    })
  }

  deleteClasse(id : number){
    this.api.deleteClasse(id)
    .subscribe({
      next:(res)=>{
       alert("Classe supprimée avec succees")
       this.getAllClasse();
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
    this.dialog.open(DialogClasseComponent, {
     width : '30%'
    }).afterClosed().subscribe(val=>{
      if(val==='enregistrer'){
        this.getAllClasse();
      }
    })
  }
   
}
