import { CommonModule } from '@angular/common';
import { Component,ElementRef, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  posts: Post[] = [];

  constructor(public postService: PostService, private elRef: ElementRef) {}

  ngOnInit(): void {
    // Retrieve posts from localStorage when the component initializes
    const storedPosts = localStorage.getItem('posts');
    if (storedPosts) {
      this.posts = JSON.parse(storedPosts);
    } else {
      this.fetchPosts(); // Fetch posts if not found in localStorage
    }
  }

  fetchPosts(): void {
    this.postService.getAll().subscribe((data: Post[]) => {
      this.posts = data;
      console.log(this.posts);
      // Store posts in localStorage
      localStorage.setItem('posts', JSON.stringify(this.posts));
    });
  }

  deletePost(id: number): void {
    this.postService.delete(id).subscribe(res => {
      this.posts = this.posts.filter(item => item.id !== id);
      localStorage.setItem('posts', JSON.stringify(this.posts)); // Update localStorage after deletion
      alert('Post deleted successfully');
    });
  }

  scrollToBottom() {
    this.elRef.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }

  



}
