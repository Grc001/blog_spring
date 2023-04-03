import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-create-article-page',
  templateUrl: './admin-create-article-page.component.html',
  styleUrls: ['./admin-create-article-page.component.css'],
})
export class AdminCreateArticlePageComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      title: 'title',
      content: 'content',
      slug: 'slug',
    });
  }

  onSubmit() {}
}
