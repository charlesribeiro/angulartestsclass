import { Component, input } from '@angular/core';
import { Post } from '../models/post';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss'
})
export class PostCardComponent {
  post = input.required<Post>();
}
