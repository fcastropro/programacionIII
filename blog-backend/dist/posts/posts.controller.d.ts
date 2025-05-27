import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Post as PostEntity } from './post.entity';
import { Pagination } from 'nestjs-typeorm-paginate';
import { SuccessResponseDto } from 'src/common/dto/response.dto';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    create(createPostDto: CreatePostDto): Promise<SuccessResponseDto<PostEntity>>;
    findAll(page?: number, limit?: number): Promise<SuccessResponseDto<Pagination<PostEntity>>>;
    findOne(id: string): Promise<SuccessResponseDto<PostEntity>>;
    remove(id: string): Promise<SuccessResponseDto<string>>;
}
