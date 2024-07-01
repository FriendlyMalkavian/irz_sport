import React, {Component} from 'react'
import { Button, Card, CardBody, CardImg, CardText, CardTitle} from 'react-bootstrap'

export default class CardTemplate extends Component {
    render(){
        const { data } = this.props;
        return(
            <Card className='m-4 ' >
                        <CardImg 
                            variant='top'
                            src={data.img}
                        />
                        <CardBody>
                            <CardTitle>{data.title} {data.year}</CardTitle>
                            <CardText>
                                {data.description}
                            </CardText>
                        <Button variant='primary' href ={`/${data.link}`}>Посмотреть результаты</Button>
                        </CardBody>
                    </Card>
        )
    }
}