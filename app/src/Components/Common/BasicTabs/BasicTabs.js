import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs 
          value={value} 
          onChange={handleChange} 
          aria-label="basic tabs example"
          variant="scrollable"
          scrollButtons="auto"
          >
          <Tab label="Hospitalization Rate" {...a11yProps(0)} wrapped />
          <Tab label="Affordability" {...a11yProps(1)} wrapped />
          <Tab label="Pollution Levels" {...a11yProps(2)} wrapped />
          <Tab label="Livability factors" {...a11yProps(3)} wrapped />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Hospitalization Rate
      </TabPanel>
      <TabPanel value={value} index={1}>
        Affordability
      </TabPanel>
      <TabPanel value={value} index={2}>
        Pollution Levels
      </TabPanel>
      <TabPanel value={value} index={3}>
        Livability factors
      </TabPanel>
    </Box>
  );
}