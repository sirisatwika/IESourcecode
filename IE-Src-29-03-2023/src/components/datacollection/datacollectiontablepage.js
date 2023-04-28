import React from "react";
import { Grid, Card } from "@mui/material";
import DatacollectionDetailsTable from "./datacollection-tables";

function DatacollectionTablepage() {
    return (
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Card className="card-wrapper" style={{display:'grid'}}>
                      <DatacollectionDetailsTable/>
                    </Card>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
export default DatacollectionTablepage;