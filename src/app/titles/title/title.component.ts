import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '../../models/title.model';
import { TitleService } from '../../services/title.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  id;
  title$ = {};
  title: Title = {
    title_en: '',
    title_jp: '',
    title_sc: '',
    title_tc: ''
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private titleService: TitleService,
    private toastr: ToastrService) {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.title$ = this.titleService.get(this.id);
    }
  }

  ngOnInit() {
  }
  onSubmit(title) {
    const newId = this.titleService.getNewId();

    if (this.id) {
      this.titleService.update(this.id, title);
      this.toastr.success(title.title_en + ' updated successufully!', 'Title Editor');
      this.router.navigate(['/titles']);
    } else {
      this.titleService.add(newId, title);
      this.toastr.success(title.title_en + ' created Successufully', 'Title Editor');
      this.router.navigate(['/titles']);
    }
  }

  cancel() {
    this.title.title_en = '';
    this.title.title_jp = '';
    this.title.title_sc = '';
    this.title.title_tc = '';
    this.router.navigate(['/titles']);
  }
}
