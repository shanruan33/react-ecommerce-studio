import React, { Component } from 'react';
import Title from './Title';
import { FaThLarge, FaAward, FaCoffee, FaCalendarAlt } from 'react-icons/fa'

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaThLarge />,
                title: "Various options",
                info: "Sed et lacus quis enim mattis nonummy"

            },
            {
                icon: <FaAward />,
                title: "Professional teachers",
                info: "Sed et lacus quis enim mattis nonummy"

            },
            {
                icon: <FaCalendarAlt />,
                title: "Classes everyday",
                info: "Sed et lacus quis enim mattis nonummy"

            },
            {
                icon: <FaCoffee />,
                title: "Free drinks",
                info: "Sed et lacus quis enim mattis nonummy"

            },
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title='our advantages' />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
