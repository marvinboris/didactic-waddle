import React from 'react';
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col } from 'reactstrap';

const newsCard = ({ src, title, subtitle, children, link, md, lg }) => {
    const date = new Date(subtitle);
    const monthsArray = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

    return (
        <Col md={md} lg={lg} className="pb-3">
            <Card>
                <CardImg top width="100%" src={src} alt="News card cap" />
                <CardBody>
                    <CardTitle className="h6 text-info">{title}</CardTitle>
                    <CardSubtitle className="text-danger mb-3">Publié le {date.getDate()} {monthsArray[date.getMonth()]} {date.getFullYear()}</CardSubtitle>
                    <CardText className="small" dangerouslySetInnerHTML={{ __html: children }} />
                </CardBody>
            </Card>
        </Col>
    );
};

export default newsCard;