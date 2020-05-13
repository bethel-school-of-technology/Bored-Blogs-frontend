import { TestBed } from '@angular/core/testing';

import { PostCommentService } from './post-comment.service';

describe('PostCommentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostCommentService = TestBed.get(PostCommentService);
    expect(service).toBeTruthy();
  });
});
