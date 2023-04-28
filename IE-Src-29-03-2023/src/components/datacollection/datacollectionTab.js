import React from "react";
import { Grid, Card } from "@mui/material";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import Dropdownselect from '../page/dropdownselect';
// import IOTDeviceTable from "./Table-IOT_devices";
// import Device from "./devices/device";
// import EnhancedTable from '../page/Table';
import DeviceCategory from "./DeviceCategory";
import "./devices/device.css";
import DeviceLogs from "./devices/devicelogs";
import DeviceSpeedometer from "./devices/device-speedometer";
import DeviceStats from "./devices/device-stats";
import OverviewTablepage from "../overview/Overviewtablepage";
import DatacollectionTablepage from "./datacollectiontablepage";

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other} >
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

function DatacollectionTab() {

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <div className='config-tab'>
                        {/* <Dropdownselect /> */}
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className='tabs-configuration'>
                            <Tab label="Overview" {...a11yProps(0)} />
                            <Tab label="Gateway Data" {...a11yProps(1)} />
                            <Tab label="IOT Device Data" {...a11yProps(2)} />
                            <Tab label="Telementry Data" {...a11yProps(3)} />
                            <Tab label="Device Logs" {...a11yProps(4)} />
                        </Tabs>
                        <TabPanel value={value} index={0}>
                            <DeviceCategory />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            {/* <Device /> */}
                            {/* <EnhancedTable /> */}
                            <OverviewTablepage/>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            {/* <Device /> */}
                            {/* <EnhancedTable /> */}
                            {/* <IOTDeviceTable/> */}
                            <DatacollectionTablepage/>
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                        <Card className='card-configuration' >
                            <div>
                               <DeviceSpeedometer/>
                            </div>
                            <div>
                                <DeviceStats/>
                            </div>
                        </Card>
                        </TabPanel>
                        <TabPanel value={value} index={4}>
                            <Card className='card-configuration' >
                                <h2 class="card_title">Device Logs</h2>
                                <DeviceLogs />
                            </Card>
                        </TabPanel>
                    </div>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
export default DatacollectionTab;