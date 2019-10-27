import { Component, OnInit } from '@angular/core';
import { Item } from '../model/item';
import { constructor } from 'q';
import { GatoService } from '../services/gato.service';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  public list:Array<Item>;
  constructor(private service:GatoService) { 
  }

  ngOnInit() {
    this.service.getConfig().subscribe((data: Item[]) => this.list = data);
  } 
}
