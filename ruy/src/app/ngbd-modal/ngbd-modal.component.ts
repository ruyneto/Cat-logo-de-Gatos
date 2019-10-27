import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Item } from '../model/item';
import { GatoService } from '../services/gato.service';

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './ngbd-modal.component.html'
})
export class NgbdModalContent {
  public id:string;
  public item:Item;
  constructor(public activeModal: NgbActiveModal,private service:GatoService) {
    service.getConfig().subscribe((data: Item[]) => {

    this.item = data.filter(object => object.id==this.id)[0];
    });

  }
}

@Component({
  selector: 'ngbd-modal-component',
  templateUrl: './modal-component.html'
})
export class NgbdModalComponent {
  @Input() id:string;
  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.id = this.id;
  }
}