import { Component} from '@angular/core';
import { FetchApiService } from '../fetch-api.service';
import { Observable } from 'rxjs';
import {ActivatedRoute,Router} from "@angular/router";
import {  OnInit ,OnDestroy } from '@angular/core';
import {SortPipe} from '../sort.pipe';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  public view;
  public allcharactersdata:any=[];
  public allbookdata:any=[];
  public allhousesdata:any=[];
  public allData:any=[];
  constructor(private Apiservice: FetchApiService) {
    console.log("view individual data component constructor is called");
  }
  ngOnInit() {
    console.log("home -component ngonint is called");
     this.allbookdata = this.Apiservice.getAllBooks().subscribe(
      (data) => {
        console.log("logging data");
        this.allData =  this.allData.concat(data);
        this.allbookdata=data;
        console.log(this.allData);
      },
      error => {
        console.log("error");
      }
    );

    this.allcharactersdata = this.Apiservice.getAllCharacters().subscribe(
      (data) => {
        console.log("logging data");
        this.allData = this.allData.concat(data);
        this.allcharactersdata=data;
        console.log(this.allData);
      },
      error => {
        console.log("error");
      }
    );

    this.allhousesdata = this.Apiservice.getAllHouses().subscribe(
      (data) => {
        console.log("logging data");
        this.allData = this.allData.concat(data);
        console.log(this.allData);
        this.allhousesdata=data;
      },
      error => {
        console.log("error");
      }
    );
    
  }
 ngOnDestroy(){
  console.log("home -component ngonDestroy is called");
  }

}