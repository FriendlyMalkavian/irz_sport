import React from 'react'

import Table from 'react-bootstrap/Table';

function TableTemplate({data}) {

        return (
            <>
                <Table className='d-flex justify-content-center' bordered="True" striped="columns">
                    <tbody>
                        <tr>
                            <th>#</th>
                            {data.headings.map((heading, index) => (
                                <th key={index}>{heading}</th>
                            ))}
                        </tr>
                        {data.rows.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                <td>{rowIndex + 1}</td>
                                {row.map((cell, cellIndex) => (
                                    <td key={cellIndex}>{cell}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </>
        )
    }
export default TableTemplate