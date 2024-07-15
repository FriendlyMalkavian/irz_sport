import React from 'react'
import { Button, Card, CardBody, CardImg, CardText, CardTitle} from 'react-bootstrap'

function CardTemplate({data}) {
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
export default CardTemplate