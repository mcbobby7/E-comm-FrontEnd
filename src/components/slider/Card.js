import React from 'react';
import {StyleCard} from './Style'
import Loader from './loader'
import Product from '../Product'

function Card ({propertyProp, sucess}){
    return(
        <StyleCard>
            <Product key={propertyProp._id} product={propertyProp} />
        </StyleCard>
    )
}

export default Card