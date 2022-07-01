import {Component, Input} from '@angular/core';
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
  buttons: {
    value: string,
    selected: boolean
  }[];

  constructor(private modalService: NgbModal) {
    this.buttons = partOfSpeechItems.map((item) => {
      return {value: item, selected: false}
    });
    this.newVocab = new Vocab(undefined, "", "", null);
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

  selectItem(item: { value: string, selected: boolean }) {
    this.buttons.forEach((item) => {
      if(item.selected) {
        item.selected = false;
      }
    });
    // can't select none
    if(item.selected) {
      return;
    }
    item.selected = true;
    this.newVocab.partOfSpeech = partOfSpeechItems.indexOf(item.value);
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
