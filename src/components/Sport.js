import React, { Component } from 'react';
import TableTemplate from './modules/TableTemplate';
import SportInfo from './vault/SportInfo';

export default class Sport extends Component {
    render() {
        const { id} = this.props;
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
            </>
        )
    }
}