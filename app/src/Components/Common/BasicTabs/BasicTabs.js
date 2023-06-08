import * as React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      // sx={{display: 'inline-block'}}
      style={{display: 'flex', maxHeight: '85%'}}
      {...other}
    >
      {value === index && (
        <Box sx={{marginLeft: 'auto', marginRight: 'auto'}} id='box-graph'>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const BasicTabs = (props) => {
  const {tabData, tabHeading, tabValue, setTabValue} = props

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  useEffect(() => {    
    setTabValue(0);
  },[tabHeading])

  return (
    <Box sx={{ height: '90%', display: 'block' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', }}>
        <Tabs 
          value={tabValue} 
          onChange={handleChange} 
          aria-label="basic tabs example"
          variant="scrollable"
          scrollButtons="auto"
          >
          { tabData.map((tab, index) => (
            <Tab key={index} label={tab.label} {...a11yProps(index)} wrapped />  
          ))}          
        </Tabs>
      </Box>
      { tabData.map((tab, index) => (
        <TabPanel key={index} value={tabValue} index={index}>
          {tab.component}
        </TabPanel>
      ))}      
    </Box>
  );
}

export default BasicTabs;