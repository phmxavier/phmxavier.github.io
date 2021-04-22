function ItemPortfolio(props: any) {
    return (
        <div className="col-md-6">
            <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <a href={props.Href}>
                    <figure className="cc-effect"><img src={props.Thumb} alt={props.Name} />
                        <figcaption>
                            <div className="h4">{props.Name}</div>
                            <p>{props.Hint}</p>
                            <p>{props.Description}</p>
                        </figcaption>
                    </figure>
                </a>
            </div>
        </div>
    );
}
export default ItemPortfolio;