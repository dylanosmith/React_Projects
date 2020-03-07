import React, {useState} from 'react';
import './App.css';
import Tabs from './components/Tabs';

export interface TabProps {
  tabName:string;
  tabContent: string;
  isTabSelected:boolean;
}

function App() {
  const [tabState, setTabState] = useState<TabProps[]>([
    {tabName: "Tab1", tabContent:"Content for Tab1", isTabSelected: true},
    {tabName: "Tab2", tabContent:"Content for Tab2", isTabSelected: false},
    {tabName: "Tab3", tabContent:"Content for Tab3", isTabSelected: false}

  ])

  return (
    <div className="App">
      <div id="tab_bar">
        {tabState.map((tab, i)=> (
            <Tabs key={i} tabState={tab.tabState} setTabState = {setTabState} />
          ))}
      </div>
    </div>
  );
}

export default App;
