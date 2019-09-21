import React from 'react'
import PropTypes from 'prop-types'
import Post from './Post'

const PostList = props => (
    <div style={{ marginTop: '24px' }}>
        {props.posts.map((post, i) => {
            return (
                <Post
                    post={post}
                    key={i}
                    onRemove={props.removeUpdate}
                    updatesPostInfos={props.updatesPostInfos}
                />
            )
        })}
    </div>
)

PostList.propTypes = {
    posts: PropTypes.array.isRequired,
    removeUpdate: PropTypes.func.isRequired,
    updatesPostInfos: PropTypes.func,
}
export default PostList
