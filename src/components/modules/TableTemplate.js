import React from 'react';
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';

function TableTemplate({ data }) {
    return (
        <>
            <Container className="responsive-container">
                <Table className='table-responsive' bordered striped>
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
            </Container>
        </>
    );
}

export default TableTemplate;