import { Component, OnInit } from '@angular/core';
import { MusicListService, Lists, Item } from 'src/app/services/music-list.service';
import { NgForm} from '@angular/forms';
import { UserProfileService } from '../../services/user-profile.service';
import { ReportIssuesService } from 'src/app/services/report-issues.service';

@Component({
  selector: 'app-configurations',
  templateUrl: './configurations.component.html',
  styleUrls: ['./configurations.component.css']
})
export class ConfigurationsComponent implements OnInit {
  myLists: Lists[];
  listSelected: Lists;
  listName = 'New list name';
  listDescription = 'New list description';
  optionDrop = false;
  listMessage = 'Do it!';
  // ** Error
  error = false;
  title = '';
  message = '';
  color = '';
  // ********
  // ** User Form
  report = {
    title2: null,
    message2: null
  };
  // ********
  constructor(
    private _listService: MusicListService, public _userService: UserProfileService, private _reportService: ReportIssuesService
  ) {
    this.myLists = _listService.getLists();
   }

  ngOnInit() {
  }
  changeInputList() {
    const selector = (<HTMLInputElement>document.getElementById('selectList')).value;
    // this.listSelected = this._listService.getList(selector[selector.selectedIndex].value);
    this.listSelected = this._listService.getList(selector);
    this.listName = this.listSelected.name;
    this.listDescription = this.listSelected.description;
  }

  optionChanged() {
    this.optionDrop = !this.optionDrop;
    if (this.optionDrop) {
      this.listMessage = 'Drop it!';
    } else {
      this.listMessage = 'Do it!';
    }
  }

  listChanged() {
    if (this.optionDrop) {
        this._listService.removeList(this.listSelected);
        this.myLists = this._listService.getLists();
        this.showError('OK, the list has been removed.', 'success');
    } else {
      // Cazar la lista y los input y modificar los datos
      const name = (<HTMLInputElement>document.getElementById('listName')).value;
      const description = (<HTMLInputElement>document.getElementById('listDescription')).value;
      if (name != null && name !== '') {
        if (this._listService.checkNameList(name)) {
          this.showError('Sorry, the name list already exist.', 'warning');
        } else {
          this._listService.changeList(this.listSelected, name, description);
          this.myLists = this._listService.getLists();
          (<HTMLInputElement>document.getElementById('listName')).value = '';
          (<HTMLInputElement>document.getElementById('listDescription')).value = '';
          this.showError('Perfect, name details has been changed.', 'success');
        }

      } else {
        this.showError('Remember, name list is required.', 'warning');
      }

    }
  }

  showError(message: string, color: string) {
    this.message = message;
    this.color = color;
    this.error = true;
    setTimeout(() => {
      this.error = false;
    }, 5000);
  }

// USER FORM
  saveForm(forma: NgForm) {
    if (forma.valid) {
      this._reportService.addReport(this.report.title2, this.report.message2)
        .then(() => {
          this.showError('Thanks, your report has been submited.', 'success');
          forma.resetForm();
        })
        .catch((err) => {
          this.showError(err , 'danger');
        });
    } else {
      this.showError('Invalid form.', 'warning');
    }
  }
  // ***************

}
