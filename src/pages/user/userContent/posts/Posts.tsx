import React, { FC } from 'react';
import FlexBox from '../../../../components/flexBox/FlexBox';
import AlbumItemFiller from '../../../../components/albumItemFiller/AlbumItemFiller';
import AlbumItem from '../../../../components/albumItem/AlbumItem';
import c from './posts.module.css'
import { IPost } from './../../../../models/IPost';
import SectionWrapper from './../../../../components/sectionWrapper/SectionWrapper';
import PostItemFiller from './../../../../components/postItemFiller/PostItemFiller';
import PostItem from './../../../../components/postItem/PostItem';
import Pagination from './../../../../components/pagination/Pagination';

interface PostsSectionProps {
    postsError: string;
    currentPosts: IPost[],
    itemsPerScreen: number;
    currentPage: number;
    totalPaginationItems: number;
    setCurrentPageFunc: (num:number) => void;
}

const Posts: FC<PostsSectionProps> = (props) => {
    return (
        <SectionWrapper>
            {
                props.postsError.length > 0
                    ? <h1>{props.postsError}</h1>
                    : <h1>Список постов (раскрываются по клику)</h1>
            }
            {
                props.currentPosts.length
                    ?
                    <FlexBox flexWrap='wrap'>
                        {props.currentPosts.map(post => <PostItem key={post.id} post={post} />)}
                    </FlexBox>
                    :
                    <FlexBox flexWrap='wrap'>
                        {[...Array(props.itemsPerScreen)].map(() => <PostItemFiller />)}
                    </FlexBox>
            }
            <Pagination currentPage={props.currentPage} totalPages={props.totalPaginationItems} setCurrentPage={props.setCurrentPageFunc} />
        </SectionWrapper>
    );
};

export default Posts;