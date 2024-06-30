import React, { Component } from 'react'
import { Button, Card, CardBody, CardGroup, CardImg, CardText, CardTitle, Container } from 'react-bootstrap'
import sport2Img from "../assets/sport2.jpg"

export default class Archive extends Component {
    render() {
        return (
            <Container>
                <h2 className='text-center m-4'> Текущие Соревнования</h2>
                <CardGroup className='m-4'>
                    <Card className='m-4 ' >
                        <CardImg
                            variant='top'
                            src={sport2Img}
                        />
                        <CardBody>
                            <CardTitle>2023</CardTitle>
                            <CardText>
                                Архив за 2023 год
                            </CardText>
                            <Button variant='primary' href="/archive/2023">Посмотреть архив</Button>
                        </CardBody>
                    </Card>
                    <Card className='m-4'>
                        <CardImg
                            variant='top'
                            src={sport2Img}
                        />
                        <CardBody>
                            <CardTitle>2022</CardTitle>
                            <CardText>
                                Архив за 2022 год
                            </CardText>
                            <Button variant='primary' href="/archive/2022">Посмотреть архив</Button>
                        </CardBody>
                    </Card>
                    <Card className='m-4'>
                        <CardImg
                            variant='top'
                            src={sport2Img}
                        />
                        <CardBody>
                            <CardTitle>2021</CardTitle>
                            <CardText>
                                Архив за 2021 год
                            </CardText>
                            <Button variant='primary' href="/archive/2021">Посмотреть архив</Button>
                        </CardBody>
                    </Card>
                </CardGroup>
                <CardGroup className='m-4'>
                    <Card className='m-4'>
                        <CardImg
                            variant='top'
                            src={sport2Img}
                        />
                        <CardBody>
                            <CardTitle>2020</CardTitle>
                            <CardText>
                                Архив за 2020 год
                            </CardText>
                            <Button variant='primary' href="/archive/2020">Посмотреть архив</Button>
                        </CardBody>
                    </Card>
                    <Card className='m-4'>
                        <CardImg
                            variant='top'
                            src={sport2Img}
                        />
                        <CardBody>
                            <CardTitle>2019</CardTitle>
                            <CardText>
                                Архив за 2019 год
                            </CardText>
                            <Button variant='primary' href="/archive/2019">Посмотреть архив</Button>
                        </CardBody>
                    </Card>
                    <Card className='m-4'>
                        <CardImg
                            variant='top'
                            src={sport2Img}
                        />
                        <CardBody>
                            <CardTitle>2018</CardTitle>
                            <CardText>
                                Архив за 2018 год
                            </CardText>
                            <Button variant='primary' href="/archive/2018">Посмотреть архив</Button>
                        </CardBody>
                    </Card>
                </CardGroup>
            </Container>
        )
    }
}