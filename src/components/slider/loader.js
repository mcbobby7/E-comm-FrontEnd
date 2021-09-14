import React from 'react';
import {Skeleton} from './Style'

function Loader (){
    return(
        <Skeleton>
        <div class="skeleton">
            <div class="skeleton-img"></div>
            <div class="skeleton-text">
              <h2 class="skeleton-title"></h2>
              <a href="#" class="skeleton-link" style={{width: "150px"}}></a>
              <a href="#" class="skeleton-link"></a>

            </div>
        </div>
        </Skeleton>
    )
}

export default Loader