import React, {Component} from 'react'

import Table from 'react-bootstrap/Table';

export default class Sport3 extends Component {
    render() {
        return (
            <>
                <div>
                    <p>
                        <p>
                            
                        </p>
                    </p>
                </div>
                <Table className='d-flex justify-content-center' bordered="True" striped="columns">
                    <tbody>
                        <tr>
                            <th>#</th>
                            {Array.from({ length: 12 }).map((_, index) => (
                                <th key={index}>Table heading</th>
                            ))}
                        </tr>
                        <tr>
                            <td>1</td>
                            {Array.from({ length: 12 }).map((_, index) => (
                                <td key={index}>Table cell {index}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>2</td>
                            {Array.from({ length: 12 }).map((_, index) => (
                                <td key={index}>Table cell {index}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>3</td>
                            {Array.from({ length: 12 }).map((_, index) => (
                                <td key={index}>Table cell {index}</td>
                            ))}
                        </tr>
                    </tbody>
                </Table>
            </>
        )
    }
}