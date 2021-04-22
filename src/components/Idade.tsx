function Idade(props: any) {
    return (
        <div className="col-sm-8">
            {new Date(Date.now().valueOf() - props.Nascimento.valueOf()).getFullYear() - 1970}
        </div>
    );
}

export default Idade;
