import React from 'react'
import { Card, Grid } from "@mui/material";
import Deviceprotocol from '../datacollection/chart-protocol';
import CardBlock from './cards';
import Subnets from '../overview/chart-subnet';
import OverviewRadial from './chart-Radialchart';
// import UpTime from './chart-updown';
// import Provisionedunprovisioned from './chart-provunprov';
// import Failuresuccess from './chart-failuresuccess';
// import PieChartzone from '../datacollection/chart-zone';
// import PieChartsubnet from '../datacollection/chart-subnet';

function DeviceCategory() {
  return (
    <React.Fragment>
      <div style={{ paddingBottom: '15px' }}>
        <Grid container spacing={1}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <CardBlock />
          </Grid>
        </Grid>
      </div>

      <div style={{ paddingBottom: '15px' }}>
        <Grid container spacing={2}>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Card className='card-configuration'>
              <h2 class="card_title">IOT Device Zone/Subnet</h2>
              <OverviewRadial/>
            </Card>
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Card className='card-configuration'>
              <h2 class="card_title">IOT Device Protocol</h2>
                <Deviceprotocol />
            </Card>
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Card className='card-configuration'>
              <h2 class="card_title">IOT Device/Sensors</h2>
              <Subnets />
            </Card>
          </Grid>
        </Grid>
      </div>

      {/* <div style={{ paddingBottom: '15px' }}>
        <Grid container spacing={2}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Card className='card-configuration'>
              <h2 class="card_title">IOT Device Categorization</h2>
              <Grid container spacing={1}>
                <Grid item lg={3} md={3} sm={12} xs={12}>
                  <h3 className='text-center devicecat'>Zones</h3>
                  <PieChartzone />
                </Grid>
                <Grid item lg={3} md={3} sm={12} xs={12}>
                  <h3 className='text-center devicecat'>Subnet</h3>
                  <PieChartsubnet />
                </Grid>
                <Grid item lg={3} md={3} sm={12} xs={12}>
                  <h3 className='text-center devicecat'>Protocol</h3>
                  <Deviceprotocol />
                </Grid>
                <Grid item lg={3} md={3} sm={12} xs={12}>
                  <h3 className='text-center devicecat'>Protocol</h3>
                  <Subnets />
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </div> */}


      {/* <div style={{ paddingBottom: '15px' }}>
        <Grid container spacing={2}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Card className='card-configuration'>
              <h2 class="card_title">IOT Gateway Categorization</h2>
              <Grid container spacing={1}>
                <Grid item lg={4} md={4} sm={12} xs={12}>
                  <UpTime />
                </Grid>
                <Grid item lg={4} md={4} sm={12} xs={12}>
                  <Provisionedunprovisioned />
                </Grid>
                <Grid item lg={4} md={4} sm={12} xs={12}>
                  <Failuresuccess />
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </div> */}
      
    </React.Fragment>
  )
}
export default DeviceCategory;