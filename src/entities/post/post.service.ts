// post.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post, PostDocument } from './post.schema';

@Injectable()
export class PostService {
  constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) {}

  async findAll(): Promise<Post[]> {
    return this.postModel.find().exec();
  }

  async findById(id: string): Promise<Post | null> {
    return this.postModel.findById(id).exec();
  }

  async create(createPostDto: any): Promise<Post> {
    const createdPost = new this.postModel(createPostDto);
    return createdPost.save();
  }

  async update(id: string, updatePostDto: any): Promise<Post | null> {
    return this.postModel
      .findByIdAndUpdate(id, updatePostDto, { new: true })
      .exec();
  }

  async delete(id: string): Promise<Post | null> {
    return this.postModel.findByIdAndDelete(id).exec();
  }
}
