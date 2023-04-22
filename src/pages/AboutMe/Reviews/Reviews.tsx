import { Card, CardContent, TextareaAutosize, TextField } from '@mui/material'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { addReview } from 'redux/reviewsReducer'
import './Reviews.scss'

type Props = {}

type Review = {
  name: string
  text: string
}

const Reviews = (props: Props) => {
  const arrReviews = useAppSelector((state) => state.reviews)
  const dispatch = useAppDispatch()

  const [newReview, setNewReview] = useState<Review>({
    name: '',
    text: '',
  })

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewReview((prevState) => ({
      ...prevState,
      name: e.target.value,
    }))
  }

  const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewReview((prevState) => ({
      ...prevState,
      text: e.target.value,
    }))
  }

  const sendReview = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (newReview.name === '' || newReview.text === '') {
      alert('All fields are required!')
    } else {
      dispatch(addReview(newReview))

      setNewReview({
        name: '',
        text: '',
      })
    }
  }

  return (
    <section className="reviews">
      <div className="reviews-content">
        <h2 className="reviews-title">Reviews</h2>
        {arrReviews.map(({ name, text }, i) => (
          <Card variant="outlined" key={i} sx={{ margin: '30px 0' }}>
            <CardContent>
              <div className="reviews-name">{name}:</div>
              <div className="reviews-text">{text}</div>
            </CardContent>
          </Card>
        ))}
        <form onSubmit={sendReview}>
          <h2 className="reviews-title">Relinquo feedback</h2>
          <div>
            <TextField
              className="reviews-contact"
              label="Your name"
              value={newReview.name}
              onChange={handleName}
            />
          </div>
          <br />
          <div>
            <TextareaAutosize
              className="reviews-message"
              minRows={7}
              placeholder="Your message"
              value={newReview.text}
              onChange={handleText}
            />
          </div>
          <button className="viverra-button" type="submit">
            SEND
          </button>
        </form>
      </div>
    </section>
  )
}

export default Reviews
