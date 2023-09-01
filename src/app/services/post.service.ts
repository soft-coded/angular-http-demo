import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Post } from '../post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'https://jsonplaceholder.typicode.com';

  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  getAllPosts() {
    return this.http.get<Post[]>(`${this.baseUrl}/posts`);
  }

  deletePostById(id: number) {
    console.log('deletePostById', id);
    return this.http.delete(`${this.baseUrl}/posts/${id}`);
  }

  addPost(post: Post) {
    let body = JSON.stringify(post);
    return this.http.post(`${this.baseUrl}/posts`, body, {
      headers: this.httpHeaders,
    });
  }

  updatePost(post: Post) {
    let body = JSON.stringify(post);
    return this.http.put(`${this.baseUrl}/posts/${post.id}`, body, {
      headers: this.httpHeaders,
    });
  }
}
