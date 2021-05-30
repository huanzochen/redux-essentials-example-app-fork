import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { PostAuthor } from './PostAuthor'
import { TimeAgo } from './TimeAgo'
import { ReactionButtons } from './ReactionButtons'

export const SinglePostPage = ({ match }) => {
    const { postId } = match.params

    const post = useSelector(state => 
        state.posts.find(post => post.id === postId)
        )

    if(!post) {
        return(
            <section>
                <h2>Post not found!</h2>
            </section>
        )
    }

    return (
        <section>
            <article className="post">
                <h2>{post.title}</h2>
                <p className="post-content">{post.content}</p>
                <PostAuthor userId={post.user}></PostAuthor>
                <TimeAgo timestamp={post.date}></TimeAgo>
                <ReactionButtons post={post}></ReactionButtons>
                <Link to={`/editPost/${post.id}`} className="button">
                    EditPost
                </Link>
            </article>
        </section>
    )
}