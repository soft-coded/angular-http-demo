import { Component } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  // Add post service dependency - DI
  constructor(private postService: PostService) {}

  // store response getting from service getAllPosts()
  posts: Post[] = [];

  ngOnInit() {
    this.fetchAllPosts();
  }

  fetchAllPosts() {
    this.postService.getAllPosts().subscribe({
      next: (res) => (this.posts = res),
      error: (error) => console.log(error),
      complete: () => console.log('Completed!!!'),
    });
  }

  onDelete(id: number) {
    this.postService.deletePostById(id).subscribe({
      next: () => this.fetchAllPosts(),
      error: (error) => console.log(error),
    });
  }
}
