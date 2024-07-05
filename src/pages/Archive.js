import React from 'react'
import { CardGroup, Container } from 'react-bootstrap'
import ArchiveInfo from '../components/vault/ArchiveInfo'
import CardTemplate from '../components/modules/CardTemplate';

function Archive() {
    const cardKeys = Object.keys(ArchiveInfo);
    const groupedKeys = [];
    for (let i = 0; i < cardKeys.length; i += 3) {
        groupedKeys.push(cardKeys.slice(i, i + 3));
    }

    return (
        <Container>
            <h2 className='text-center m-4'>Текущие Соревнования</h2>
            {groupedKeys.map((group, index) => (
                <CardGroup key={index} className='card-group m-4'>
                    {group.map((id) => (
                        <CardTemplate className="card-template" key={id} data={ArchiveInfo[id]} />
                    ))}
                </CardGroup>
            ))}
        </Container>
    );

}
export default Archive