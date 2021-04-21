import React from 'react';

function Experience(props: any) {
    return (
        <div className="card">
            <div className="row">
                <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
                    <div className="card-body cc-experience-header">
                        <p>{props.experiencia.periodo}</p>
                        <div className="h5">{props.experiencia.empresa}</div>
                    </div>
                </div>
                <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                    <div className="card-body">
                        <div className="h5">{props.experiencia.cargo}</div>
                        {props.experiencia.descricao.map((desc: any, i: any) => {
                            return <p>{desc}</p>
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;