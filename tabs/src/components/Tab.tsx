import React from 'react';

interface TabProps {
    index:number;
    label: string;
    content: string;
    isSelected:boolean;
}

const Tab:React.FC<TabProps> = props => {
    const [tabState, setTabState] = React.useState({
        ...props,
    })
    const Selected = () => {
        setTabState ({
            ...tabState,
            isSelected: false ? true : true
        })
    }

        return (
            <div>
                <div onClick = {Selected}
                style={{
                    borderRadius: 5,
                    marginRight: 2,
                    border: "1px solid black",
                    width: 200,
                    backgroundColor:tabState.isSelected ? "black" : "white",
                    color: tabState.isSelected ? "white" : "black"
                    }}>
                    {tabState.label} 
                </div>
                <div>
                    {tabState.content}
                </div>
            </div>
        )

}
export default Tab;