import React from 'react';

// function Idade(props: { Nascimento: Date }) {
function Idade(props: any) {
    return (
        <span>
            {new Date(Date.now().valueOf() - props.Nascimento.valueOf()).getFullYear() - 1970}
        </span>
    );
}

export default Idade;
