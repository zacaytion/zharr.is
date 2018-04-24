import React from 'react'
import styled from 'react-emotion'
import Link from '../Link'

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: space-around;
`
const Img = styled.img`
  max-height: 15em;
`

const Book = styled.div`
  text-align: center;
`

export default ({ inProgress, bookEdges }) => {
  const bookList = bookEdges.map(({ node }) => {
    const { cover, title, author } = node.frontmatter
    const path = node.fields.slug
    return {
      cover: cover.publicURL,
      path,
      title,
      author,
  }})

  return (
    <Flex>
      {bookList.map(book => (
        inProgress ? (
          <Book>
            <Img src={book.cover} alt={book.title} />
            <p>{book.title}<br />{book.author}</p>
          </Book>
        ): (
          <Book>
            <Img src={book.cover} alt={book.title} />
            <Link to={book.path} key={book.title}>
              <p>{book.title}<br />{book.author}</p>
            </Link>
          </Book>
        )
       ))}
    </Flex>
  )
}
