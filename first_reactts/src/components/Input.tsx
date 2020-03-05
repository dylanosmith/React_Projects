import React from 'react';

interface Input {
    filter: string;
    setFilter: (value:string)=>any;
}
const Input : React.FC <Input> = ({ filter, setFilter }) => 
(
    <input value = {filter} onChange = {e => setFilter(e.target.value)} />
)

export default Input;