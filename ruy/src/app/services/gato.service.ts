import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GatoService {

  constructor(private http:HttpClient) { }

  url = "assets/gatos.json";

  getConfig() {
    return this.http.get(this.url);
  }
}
