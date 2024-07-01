import React, {Component} from 'react'
import { CardGroup, Container } from 'react-bootstrap'
import CardTemplate from '../components/modules/CardTemplate'
import CardInfo from '../components/vault/CardInfo'
import '../App.css'


export default class Actual extends Component {
    render() {
        const cardKeys = Object.keys(CardInfo[2024]);
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
                            <CardTemplate className="card-template" key={id} data={CardInfo[2024][id]} />
                        ))}
                    </CardGroup>
                ))}
            </Container>
        );
    }
}