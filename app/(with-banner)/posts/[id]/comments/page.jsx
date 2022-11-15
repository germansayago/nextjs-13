import Image from 'next/image'

/* eslint-disable-next-line  */
const fetchComments = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  // throw new Error('Error al cargar los comentarios')

  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 1 * 60
    }
  }).then((res) => res.json())
}

/* eslint-disable-next-line  */
export default async function PostPage({ params }) {
  const { id } = params
  const comments = await fetchComments(id)
  return (
    <ul style={{ background: '#666', fontSize: '12px' }}>
      {comments.map((comment) => (
        <li key={comment.id}>
          <Image
            src={`https://avatars.dicebear.com/api/pixel-art-neutral/${comment.email}.svg`}
            alt={comment.name}
            width='50'
            height='50'
          />
          <h4>{comment.name}</h4>
          <small>{comment.body}</small>
        </li>
      ))}
    </ul>
  )
}
