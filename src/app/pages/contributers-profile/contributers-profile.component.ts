import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { Contributor } from 'src/app/models/contributor';
import { ContributorService } from 'src/app/services/contributor.service';
import { PostDataService } from 'src/app/services/post-data.service';

@Component({
  selector: 'app-contributers-profile',
  templateUrl: './contributers-profile.component.html',
  styleUrls: ['./contributers-profile.component.scss']
})
export class ContributersProfileComponent implements OnInit {

  constructor(private contribtorService:ContributorService,private postService:PostDataService) { }
  //TODO: create a contributor service and move this to there
  contributor:Contributor

  posts :Post[]
  ngOnInit() {
    var id = 1;//id will need to take the url parameter
    this.getContrib(id);
    this.getPostByAuthorID(id);
  }

  getContrib(authorId:number){
    this.contribtorService.getContributor(authorId).subscribe(
      contributor => {
        this.contributor = contributor
      }
    )    
  }

  getPostByAuthorID(authorId:number){
    this.postService.getPosts().subscribe(
      allPosts => {
        this.posts = allPosts.filter(p => p.authorId == authorId);
      }
    )
  }

  //the selector is a flag that htmls things can switch their visibilty
  selector = 1;
  setSelector(value: number) {
    this.selector = value;
  }
}
