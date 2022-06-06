import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {partOfSpeechItems} from "../interfaces"
import {Vocab} from "../models/vocab";

@Component({
  selector: 'app-new-vocab-modal',
  templateUrl: './new-vocab-modal.component.html',
  styleUrls: ['./new-vocab-modal.component.css']
})
export class NewVocabModalComponent {

  closeResult = '';
  newVocab: Vocab;
  partOfSpeechItems: string [];

  constructor(private modalService: NgbModal) {
    this.partOfSpeechItems = partOfSpeechItems;
    this.newVocab = new Vocab(undefined, '', '', 'Noun');
  }

  open(content: object) {

    this.modalService.open(content, {ariaLabelledBy: 'Add new vocab'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      console.log("result", this.closeResult);
    }, (reason) => {
      this.closeResult = `Dismissed ${NewVocabModalComponent.getDismissReason(reason)}`;
      console.log("reason", this.closeResult);
    });
  }

  private static getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
