import React, { useState } from 'react';
import RelatedProduct from './RelatedProduct.jsx';
import { Container, Row, Col, CardDeck, CardGroup, Carousel } from 'react-bootstrap';

const RelatedProductsList = (props) => {

  if (props.relatedProducts.length > 0) {
    var col = 0;
    return (
        <div className="d-flex flex-nowrap">
          <div className="d-flex flex-row">
            {props.relatedProducts.map(product => {
              col += 1;
              return (
                <RelatedProduct col={col} product={product} key={product.id} selectedProduct={props.selectedProduct} onClick={props.onClick}/>
              );
            })}
          </div>
        </div>
    )
  } else {
    return null;
  }
};

export default RelatedProductsList;

/*
        {props.relatedProducts.map(product => {
          return (
            <Carousel.Item>
              <RelatedProduct product={product} key={product.id} selectedProduct={props.selectedProduct} onClick={props.onClick}/>
            </Carousel.Item>
          );
        })}
*/

/*
       <Carousel.Item>
            <RelatedProduct product={props.relatedProducts[0]} key={props.relatedProducts[0].id} selectedProduct={props.selectedProduct} onClick={props.onClick}/>
          </Carousel.Item>
          <Carousel.Item>
            <RelatedProduct product={props.relatedProducts[1]} key={props.relatedProducts[1].id} selectedProduct={props.selectedProduct} onClick={props.onClick}/>
          </Carousel.Item>
          <Carousel.Item>
            <RelatedProduct product={props.relatedProducts[2]} key={props.relatedProducts[2].id} selectedProduct={props.selectedProduct} onClick={props.onClick}/>
          </Carousel.Item>
          <Carousel.Item>
            <RelatedProduct product={props.relatedProducts[3]} key={props.relatedProducts[3].id} selectedProduct={props.selectedProduct} onClick={props.onClick}/>
          </Carousel.Item>
*/