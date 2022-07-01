import {Component, Input, OnInit} from '@angular/core';
import {Vocab} from "../models/vocab";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DataService} from "../services/data.service";
import {convertVocab, partOfSpeechItems} from "../interfaces";

@Component({
  selector: 'app-edit-vocab-modal',
  templateUrl: './edit-vocab-modal.component.html',
  styleUrls: ['./edit-vocab-modal.component.css']
})
export class EditVocabModalComponent implements OnInit {

  closeResult = '';

  @Input()
  currVocab: any;

  buttons: {
    value: string,
    selected: boolean
  }[] | undefined;

  constructor(private modalService: NgbModal, private dataService: DataService) {}

  ngOnInit() {
    this.buttons = partOfSpeechItems.map((item) => {
      if (this.currVocab.partOfSpeech === item)
        return {value: item, selected: true}
      else {
        return {value: item, selected: false}
      }
    });
  }

  open(content: object) {

    this.modalService.open(content, {ariaLabelledBy: 'Add new vocab'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      console.log("result", this.closeResult);
      // - TODO : don't handle updates if user dismissed instead of click on save, maybe show a snackbar
      /*this.dataService.editVocab(this.currVocab).subscribe((res: any) => {
        const converted = convertVocab(res);
        // this.allVocabs.push(converted);
      });*/
    }, (reason) => {
      this.closeResult = `Dismissed ${EditVocabModalComponent.getDismissReason(reason)}`;
      console.log("reason", this.closeResult);
    });
  }

  selectItem(item: { value: string, selected: boolean }) {
    this.buttons?.forEach((item) => {
      if(item.selected) {
        item.selected = false;
      }
    });
    // restrict user to select none of them
    if(item.selected) {
      return;
    }
    item.selected = true;
    this.currVocab.partOfSpeech = item.value;
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
