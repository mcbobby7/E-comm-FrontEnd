import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded' style={{width: "300px"}}>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' style={{height: "200px"}} />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div' style={{height: "50px"}}>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
      </Card.Body>

      <Card.Text as='div'>
        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
      </Card.Text>

      <Card.Text as='h3'>
        <span>&#8358;</span>
        {product.price}
      </Card.Text>
    </Card>
  )
}

export default Product