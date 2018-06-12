import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../services/title.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-title-list',
  templateUrl: './title-list.component.html',
  styleUrls: ['./title-list.component.css']
})
export class TitleListComponent implements OnInit {
  titleList$;

  constructor(
    private titleService: TitleService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.titleList$ = this.titleService.getAll();
  }

  delete(event, title) {
    const response = confirm('Are you sure you want to delete ' + title.title_en + ' ?');
    if (response ) {
      this.titleService.delete(title);
      this.toastr.success(title.title_en + ' deleted successufully!', 'Title Editor');
    }
    return;
  }
}
