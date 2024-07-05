import React from 'react';
import TableTemplate from './modules/TableTemplate';
import SportInfo from './vault/SportInfo';
import CarouselBox from './CarouselBox'

function Sport(props) {

        const {id} = props;
        const data = SportInfo[id];
        return (
            <>
                <div>
                    <p>
                        <p>
                            
                        </p>
                    </p>
                </div>
                <TableTemplate data={data}>
                </TableTemplate>
               <CarouselBox photoInfo={`set${id}`}/> 
            </>
        )
    }
export default Sport