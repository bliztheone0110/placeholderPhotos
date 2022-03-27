import React, { FC } from 'react';
import { IPost } from './../../../../models/IPost';
import PostItemFiller from '../../../../components/userItems/postItemFiller/PostItemFiller';
import PostItem from '../../../../components/userItems/postItem/PostItem';
import Pagination from './../../../../components/pagination/Pagination';
import UserSectionWrapper from './../../../../components/containers/userSectionWrapper/UserSectionWrapper';
import FlexBox from './../../../../components/containers/flexBox/FlexBox';

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
        <UserSectionWrapper>
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
        </UserSectionWrapper>
    );
};

export default Posts;