function Skill(props: any) {
    return (
        <div className="col-md-6">
            <div className="progress-container progress-primary"><span className="progress-badge">{props.Nome}</span>
                <div className="progress">
                    <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10"
                        data-aos-duration="2000" role="progressbar" style={{ width: props.Valor + "%" }}></div>
                    <span className="progress-value">{props.Valor}%</span>
                </div>
            </div>
        </div>
    );
}

export default Skill;
