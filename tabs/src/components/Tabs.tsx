import React, {useState} from 'react';
import { TabProps} from '../App';

interface TabAttr {
    index:number;
    tabState: TabProps[];
    setTabState: Function;
}

const Tabs:React.FC<TabAttr> = ({tabState, setTabState}) => {
    const [newTabState, setNewTabState] = useState<TabProps>({
        tabName:"",
        tabContent:"",
        isTabSelected: false
    })
    const handleClick = () => {
        if(newTabState){
            setTabState({
                ...tabState,
                tabName: 
                
            })

        }
    }
        return (
            <button onClick={handleClick}
            value = {}
            style={{
                borderRadius: 5,
                marginRight: 2,
                border: "1px solid black",
                width: 200,
                backgroundColor:newTabState.isTabSelected ? "black" : "white",
                color: newTabState.isTabSelected ? "white" : "black"
                }}>
                {newTabState.tabName}}
            </button>
        )

}
export default Tabs;