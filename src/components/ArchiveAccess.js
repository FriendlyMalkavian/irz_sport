import React, { Component } from 'react'
import { CardGroup, Container } from 'react-bootstrap'
import CardInfo from '../components/vault/CardInfo'
import CardTemplate from '../components/modules/CardTemplate';

export default class ArchiveAccess extends Component {
    render() {
        const {id} = this.props;
        const yearId = id; // Пример года
        const eventIds = Object.keys(CardInfo[yearId]);
        const groupedKeys = [];
        for (let i = 0; i < eventIds.length; i += 3) {
            groupedKeys.push(eventIds.slice(i, i + 3));
        }

        return (
            <Container>
                <h2 className='text-center m-4'>Архив Соревнований</h2>
                {groupedKeys.map((group, index) => (
                    <CardGroup key={index} className='card-group m-4'>
                        {group.map(eventId => {
                            // Доступ к данным с использованием годового ID и ID события
                            const cardData = CardInfo[yearId][eventId];
                            return (
                                <CardTemplate key={eventId} data={cardData} />
                            );
                        })}
                    </CardGroup>
                ))}
            </Container>
        );
    }
}