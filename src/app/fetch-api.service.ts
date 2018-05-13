import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


import { HttpClient, HttpErrorResponse } from '@angular/common/http';
//import observable related codes
import {observable} from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FetchApiService {
  public AllBooks;
  public AllCharacters;
  public current;
  public BaseUrl = "https://www.anapioficeandfire.com/api/";


  constructor(private http: Http) {
    console.log("http service was called");
  }
  //method to get all books
  public getAllBooks(): any {
    let myResponse = this.http.get(this.BaseUrl + 'books').pipe(map( (response)=> response.json()));
    return myResponse;
  }

  //method to get single books
  public getSingleBooks(currentBookNumber): any {
    let myResponse = this.http.get(this.BaseUrl+'books/'+currentBookNumber).pipe(map( (response)=> response.json()));
     return myResponse;
  }

  public getAllCharacters():any{
     let myResponse= this.http.get(this.BaseUrl + 'characters').pipe(map( (response)=> response.json()));
     return myResponse;
  }

  public getAllHouses():any{
    let myResponse= this.http.get(this.BaseUrl + 'houses').pipe(map( (response)=> response.json()));
    return myResponse;
 }

 public getSingleCharacter(currentCharacterNumber): any {
  let myResponse = this.http.get(this.BaseUrl+'characters/'+currentCharacterNumber).pipe(map( (response)=> response.json()));
   return myResponse;
}
public getSingleHouse(currentHouseNumber): any {
  let myResponse = this.http.get(this.BaseUrl+'houses/'+currentHouseNumber).pipe(map( (response)=> response.json()));
   return myResponse;
}

}