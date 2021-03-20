import React from 'react'

const CommentList = ({ comments }) => {
    
    const renderedComments = comments.map(c => {
        let content

        if (c.status === 'approved') {
            content = c.content
        }
        if (c.status === 'pending') {
            content = '! Comment being moderated'
        }
        if (c.status === 'rejected') {
            content = '! Comment rejected'
        }

        return <li key={c.id}>{content}</li>
    })

    return (
        <ul>
            { renderedComments }
        </ul>
    )
}

export default CommentList
