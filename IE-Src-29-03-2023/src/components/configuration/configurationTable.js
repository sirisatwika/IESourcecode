import MUIDataTable from "mui-datatables";
import React from "react";
import "../configuration/devicetable.css";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CancelIcon from '@mui/icons-material/Cancel';
import PopupForm from "./popupform";
import { Button } from "@mui/material";

const options = {
    textLabels: {
        toolbar: {
            search: "Search",
            downloadCsv: "Download CSV",
            print: "Print",
            viewColumns: "View Columns",
            filterTable: "Filter Table",
        },
        filter: {
            all: "All",
            title: "Filters",
            reset: "Reset",
        },
    }
}

function ConfigurationTable() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const columns = [
        {
            name: "Gateway ID",
            options: {
                filter: true,
                sort: true,
                filterOptions: { fullWidth: true }
            },
        },
        {
            name: "Gateway Name",
            options: {
                filter: true,
                filterOptions: { fullWidth: true }
            },
        },
        {
            name: "Gateway IP Address",
            options: {
                filter: false,
            },
        },
        {
            name: "Description",
            options: {
                filter: false,
            },
        },
        {
            name: "Associated Service/Protocol",
            options: {
                filter: false,

            },
        },
        {
            name: "Location",
            options: {
                filter: false,
            },
        },
        {
            name: "Operating State",
            options: {
                filter: false,
            },
        },
        {
            name: "IOT Device-Gateway Configuration",
            options: {
                filter: false,
                customBodyRender: (value) => {
                    return (
                        <button onClick={handleClickOpen} className="addbtn">
                            Add
                        </button>
                    )
                }
            },
        },
        {
            name: "Timestamp",
            options: {
                filter: false,
            },
        }
    ];

    const data = [
        ['73547632', 'Lenovo', '192.168.27.34', 'lenovo gateway', 'modbus', 'Mysore', 'UP', 'App', '27-03-2022 18:34'],

        ['73547642', 'Dell', '192.168.27.12', 'Dell gateway', 'REST', 'Hyderabad', 'UP', 'App', '17-04-2023 16:34'],

        ['73547532', 'HP', '192.168.27.34', 'HP gateway', 'MQTT', 'Chennai', 'Down', 'App', '10-05-2022 10:34'],

        ['73547232', 'Thosibha', '192.168.27.12', 'Thosibha gateway', 'OPCUA', 'Bangalore', 'up', 'App', '09-06-2022 18:34'],

        ['73547132', 'Acer', '192.168.27.34', 'Acer gateway', 'modbus', 'Mumbai', 'up', 'App', '27-07-2022 16:34'],

        ['73547532', 'Dell', '192.168.27.12', 'Dell gateway', 'REST', 'Delhi', 'up', 'App', '22-08-2022 15:34'],

        ['73541632', 'Lenovo', '192.168.27.12', 'lenovo gateway', 'MQTT', 'Gujarat', 'up', 'App', '10-09-2022 13:34'],

        ['72547632', 'HP', '192.168.27.34', 'HP gateway', 'OPCUA', 'Pune', 'up', 'App', '27-10-2022 11:34'],

    ];

    return (
        <div className="devicetable">
            <MUIDataTable data={data} columns={columns} options={options} title={<div className="configbtns"><h2>Configuration Data</h2> <Button href="http://10.147.18.48:4000/" target='_blank'>Add New Gateway</Button></div>} />
            <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" className="custom_dialog">
                <div className="closebtn" onClick={handleClose}><CancelIcon /></div>
                <DialogTitle id="alert-dialog-title" className="form_title">
                    IOT Device-Gateway Configuration
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <PopupForm />
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default ConfigurationTable;