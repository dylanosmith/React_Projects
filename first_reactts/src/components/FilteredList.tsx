import React from 'react';

interface FilteredList {
    filter: string;
    items : string[];
}
 
const FilteredList : React.FC <FilteredList> = ({ filter, items }) => (
    <div>
        {items.map((item, i) => {
            const start:number = item.indexOf(filter);
            const end:number = start + filter.length; 
            console.log(item);
 
            return (
                <p key={i}>
                    {item.slice(0, start)}
                    <em>{item.slice(start, end)}</em>
                    {item.slice(end)}
                </p>
            );
    }
)
 }
    </div>
)
export default FilteredList;