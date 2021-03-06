import {Component, Input, OnInit} from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {convertVocab, partOfSpeechItems} from "../interfaces"
import {Vocab} from "../models/vocab";
import {DataService} from "../services/data.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-new-vocab-modal',
  templateUrl: './new-vocab-modal.component.html',
  styleUrls: ['./new-vocab-modal.component.css']
})
export class NewVocabModalComponent implements OnInit {

  closeResult = '';

  //@ts-ignore
  newVocab: Vocab;

  newVocabForm: FormGroup = new FormGroup({
    word: new FormControl(null, [Validators.required]),
    translation: new FormControl(null, [Validators.required]),
  });

  @Input()
  allVocabs: any;

  buttons: {
    value: string,
    selected: boolean
  }[] | undefined;

  constructor(private modalService: NgbModal, private dataService: DataService) {}

  ngOnInit() {
    this.buttons = partOfSpeechItems.map((item) => {
      return {value: item, selected: false}
    });
    this.resetNewVocab();
    this.newVocabForm.valueChanges.subscribe(data => this.onFormValueChange(data));
  }

  resetNewVocab() {
    this.newVocab = new Vocab(undefined, "", "", null);
  }

  open(content: object) {

    this.modalService.open(content, {ariaLabelledBy: 'Add new vocab'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      if(result === 'Save click') {
        this.dataService.newVocab(this.newVocab).subscribe((res: any) => {
          const converted = convertVocab(res);
          this.allVocabs.push(converted);
          this.resetNewVocab();
        });
      }
    }, (reason) => {
      this.closeResult = `Dismissed ${NewVocabModalComponent.getDismissReason(reason)}`;
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

  private onFormValueChange(data: { word: string; translation: string; }) {
    this.newVocab.word = data.word
    this.newVocab.translation = data.translation

    // or
    /* for (const key in this.studentForm.controls) {
      const control = this.studentForm.get(key);
      this.selectedStudent[key] = control.value
    } */
  }

  checkBeforeSave(modal: NgbModalRef) {
    if (!this.newVocabForm.valid || !this.newVocab.partOfSpeech) {
      // TODO: show snackbar to user
      return;
    }
    modal.close('Save click');
  }

}
