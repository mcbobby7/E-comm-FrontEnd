import React, { useEffect } from 'react'
// import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Meta from '../components/Meta'
import { listProducts } from '../actions/productActions'
import ImageSlider from '../components/slider/slider'
import LoadingList from "../components/slider/loadingList"



const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  // const { loading, error, products, page, pages } = productList
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <>
      <Meta />
     <>
      <h1>Latest Products</h1>
      {loading ? (
        <LoadingList />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <ImageSlider properties={products} />
      )}
      </>
      <>
      <h1>Featured Products</h1>
      {loading ? (
        <LoadingList />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <ImageSlider properties={products} />
      )}
      </>
      <>
      <h1>MosTop selling items</h1>
      {loading ? (
        <LoadingList />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <ImageSlider properties={products} />
      )}
      </>
      <>
      <h1>Eletronics</h1>
      {loading ? (
        <LoadingList />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <ImageSlider properties={products} />
      )}
      </>
      <>
      <h1>Wears</h1>
      {loading ? (
        <LoadingList />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <ImageSlider properties={products} />
      )}
      </>
    </>
  )
}

export default HomeScreen
