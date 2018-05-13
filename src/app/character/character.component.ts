
import { Component, OnInit ,OnDestroy  } from '@angular/core';
import { FetchApiService } from '../fetch-api.service';

import { Observable } from 'rxjs';
import {ActivatedRoute,Router} from "@angular/router";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit,OnDestroy {

  currentData:any;

  constructor(private _route:ActivatedRoute,private router:Router,private ApiService:FetchApiService ) { 
    console.log("view individual character component constructor is called");
  }

  ngOnInit() {
    console.log("individual character ngOnInit is called");
    let id= this._route.snapshot.paramMap.get('characternumber');
    this.currentData= this.ApiService.getSingleCharacter(id).subscribe(
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
