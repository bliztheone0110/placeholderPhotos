import React, { FC, useState } from 'react';
import { IPost } from './../../../../models/IPost';
import Posts from './Posts';

interface PostsSectionProps {
    postsError: string;
    posts: IPost[]
    itemsPerScreen: number;
}

const PostsContainer: FC<PostsSectionProps> = (props) => {
    const [currentPage, setCurrentPage] = useState(1)
    const totalPaginationItems = Math.ceil(props.posts.length / props.itemsPerScreen)
    let currentPosts = props.posts.slice(
        0 + props.itemsPerScreen * (currentPage - 1),
        props.itemsPerScreen * (currentPage)
    )

    const setCurrentPageFunc = (num: number): void => {
        setCurrentPage(num)
    }

    return (
        <Posts
            postsError={props.postsError}
            currentPosts={currentPosts}
            totalPaginationItems={totalPaginationItems}
            currentPage={currentPage}
            setCurrentPageFunc={setCurrentPageFunc}
            itemsPerScreen={10}
        />
    );
};

export default PostsContainer;