import React, {Component} from 'react'
import { Button, Card, CardBody, CardGroup, CardImg, CardText, CardTitle, Container } from 'react-bootstrap'
import sport1Img from "../../assets/sport1.jpg"



export default class Archive2020 extends Component {
    render(){
        return(
            <Container>
                <h2 className='text-center m-4'> Текущие Соревнования</h2>
                <CardGroup className='m-4'>
                    <Card className='m-4 ' >
                        <CardImg 
                            variant='top'
                            src={sport1Img}
                        />
                        <CardBody>
                            <CardTitle>Велопробег Май 2020</CardTitle>
                            <CardText>
                                Как описать Велопробег я не знаю :)
                            </CardText>
                        <Button variant='primary' href ="/actual/1">Посмотреть результаты</Button>
                        </CardBody>
                    </Card>
                    <Card className='m-4'>
                        <CardImg 
                            variant='top'
                            src={sport1Img}
                        />
                        <CardBody>
                            <CardTitle>Велопробег Май 2020</CardTitle>
                            <CardText>
                                Как описать Велопробег я не знаю :)
                            </CardText>
                        <Button variant='primary' href ="/actual/2">Посмотреть результаты</Button>
                        </CardBody>
                    </Card>
                    <Card className='m-4'>
                        <CardImg 
                            variant='top'
                            src={sport1Img}
                        />
                        <CardBody>
                            <CardTitle>Велопробег Май 2020</CardTitle>
                            <CardText>
                                Как описать Велопробег я не знаю :)
                            </CardText>
                        <Button variant='primary' href ="/actual/3">Посмотреть результаты</Button>
                        </CardBody>
                    </Card>
                </CardGroup>
                <CardGroup className='m-4'>
                    <Card className='m-4'>
                        <CardImg 
                            variant='top'
                            src={sport1Img}
                        />
                        <CardBody>
                            <CardTitle>Велопробег Май 2020</CardTitle>
                            <CardText>
                                Как описать Велопробег я не знаю :)
                            </CardText>
                        <Button variant='primary' href ="/actual/4">Посмотреть результаты</Button>
                        </CardBody>
                    </Card>
                    <Card className='m-4'>
                        <CardImg 
                            variant='top'
                            src={sport1Img}
                        />
                        <CardBody>
                            <CardTitle>Велопробег Май 2020</CardTitle>
                            <CardText>
                                Как описать Велопробег я не знаю :)
                            </CardText>
                        <Button variant='primary' href ="/actual/5">Посмотреть результаты</Button>
                        </CardBody>
                    </Card>
                    <Card className='m-4'>
                        <CardImg 
                            variant='top'
                            src={sport1Img}
                        />
                        <CardBody>
                            <CardTitle>Велопробег Май 2020</CardTitle>
                            <CardText>
                                Как описать Велопробег я не знаю :)
                            </CardText>
                        <Button variant='primary' href ="/actual/6">Посмотреть результаты</Button>
                        </CardBody>
                    </Card>
                </CardGroup>
            </Container>
        )
    }
}