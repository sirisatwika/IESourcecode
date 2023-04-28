import MUIDataTable from "mui-datatables";
import React from "react";
import "../configuration/devicetable.css";

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

function IOTDeviceTable() {

  const columns = [
    {
      name: "Gateway Id",
      options: {
        filter: true,
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
      name: "IOT Device ID",
      options: {
        filter: false,
      },
    },
    {
      name: "IOT Device Name",
      options: {
        filter: false,
      },
    },
    {
      name: "IOT Device Protocol",
      options: {
        filter: false,
      },
    },
    {
      name: "Latitude",
      options: {
        filter: false,
      },
    },
    {
      name: "Longitude",
      options: {
        filter: false,
      },
    },
    {
      name: "Zone",
      options: {
        filter: false,
      },
    },
    {
      name: "Gateway Subnets",
      options: {
        filter: false,
      },
    },
    {
      name: "Gateway UP/Down",
      options: {
        filter: false,
      },
    },
    {
      name: "Gateway Provisioned/Unprovisioned",
      options: {
        filter: true,
      },
    },
    {
      name: "IOT Device UP/Down",
      options: {
        filter: false,
      },
    },
    {
      name: "IOT Device Provisioned/Unprovisioned",
      options: {
        filter: false,
      },
    },
    {
      name: "IP Address",
      options: {
        filter: false,
      },
    },
    {
      name: "Data Collected",
      options: {
        filter: false,
      },
    },
  ];

  const data = [
    ['Gateway-01', 'Device-01', 'Device Name-01', 'MQTT', 'Value-01', '82634876', '82634876', 'Zone-01', '255.255 255.0', 'UP', 'Provisioned', 'UP', 'Provisioned', '2401:4900:607b', 'Temperature'],

    ['Gateway-02', 'Device-02', 'Device Name-01', 'MQTT', 'Value-02', '82634876', '82634876', 'Zone-02', '255.255 255.0', 'UP', 'UnProvisioned', 'UP', 'UnProvisioned', '2401:4900:607b', 'Temperature'],

    ['Gateway-03', 'Device-03', 'Device Name-01', 'MQTT', 'Value-03', '82634876', '82634876', 'Zone-03', '255.255 255.0', 'UP', 'Provisioned', 'UP', 'Provisioned', '2401:4900:607b', 'Temperature'],

    ['Gateway-04', 'Device-04', 'Device Name-01', 'MQTT', 'Value-04', '82634876', '82634876', 'Zone-04', '255.255 255.0', 'UP', 'Provisioned', 'UP', 'UnProvisioned', '2401:4900:607b', 'Temperature'],

    ['Gateway-05', 'Device-05', 'Device Name-01', 'MQTT', 'Value-05', '82634876', '82634876', 'Zone-05', '255.255 255.0', 'UP', 'Provisioned', 'UP', 'Provisioned', '2401:4900:607b', 'Temperature'],

    ['Gateway-06', 'Device-06', 'Device Name-01', 'MQTT', 'Value-06', '82634876', '82634876', 'Zone-06', '255.255 255.0', 'UP', 'UnProvisioned', 'UP', 'UnProvisioned', '2401:4900:607b', 'Temperature'],

    ['Gateway-07', 'Device-07', 'Device Name-01', 'MQTT', 'Value-07', '82634876', '82634876', 'Zone-07', '255.255 255.0', 'UP', 'Provisioned', 'UP', 'Provisioned', '2401:4900:607b', 'Temperature'],

    ['Gateway-08', 'Device-08', 'Device Name-01', 'MQTT', 'Value-08', '82634876', '82634876', 'Zone-08', '255.255 255.0', 'UP', 'UnProvisioned', 'UP', 'UnProvisioned', '2401:4900:607b', 'Temperature'],

  ];

  return (
    <div className="devicetable">
      <MUIDataTable data={data} columns={columns} options={options} />
    </div>

  );
}

export default IOTDeviceTable;
