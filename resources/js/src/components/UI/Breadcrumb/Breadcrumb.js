import React from 'react';
import { NavLink } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Container } from 'reactstrap';

import WithPoint from '../WithPoint/WithPoint';

const breadcrumb = ({ items, main }) => {
    let itemsComponent = null;

    if (items) itemsComponent = items.map((item, i) => (
        <BreadcrumbItem key={i}><NavLink className="text-white text-300 text-montserrat-alt" to={item.to}>{item.content}</NavLink></BreadcrumbItem>
    ));

    return (
        <div className="container-fluid bg-transparent position-absolute" style={{ top: 0, opacity: .44 }}>
            <div className="px-5 pt-2">
                <WithPoint color="green" size="sm">
                    <Breadcrumb listClassName="bg-transparent rounded-0 m-0 p-0">
                        <BreadcrumbItem><NavLink className="text-700 text-white" to="/">Home</NavLink></BreadcrumbItem>
                        {itemsComponent}
                        <BreadcrumbItem className="text-white text-300 text-montserrat-alt" active>{main}</BreadcrumbItem>
                    </Breadcrumb>
                </WithPoint>
            </div>
        </div>
    );
};

export default breadcrumb;