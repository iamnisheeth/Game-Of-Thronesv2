
import { Component, OnInit ,OnDestroy } from '@angular/core';
import { FetchApiService } from '../fetch-api.service';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import {ActivatedRoute,Router} from "@angular/router";

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {

  currentData:any;

  constructor(private _route:ActivatedRoute,private router:Router,private ApiService:FetchApiService ) { 
    console.log("view individual data component constructor is called");
  }

  ngOnInit() {
    console.log("individual view ngOnInit is called");
    let id= this._route.snapshot.paramMap.get('housenumber');
    this.currentData= this.ApiService.getSingleHouse(id).subscribe(
      (data) => {
        console.log("logging data");
        this.currentData = data;
        console.log(this.currentData);
      },
      error => {
        console.log("error");
      }
    );
    

  }

  ngOnDestroy(){
    console.log("view -component ngonDestroy is called");
  }

}
