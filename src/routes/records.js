import { useEffect, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import RecordTable from '../components/layout/record-table';

export default function Records() {

    const [tabIndex, setTabIndex] = useState(0);

    const location = useLocation();
    const navigate = useNavigate();

    // Ensure correct tab is selected when navigating from quick access or
    // using a direct link 
    useEffect(() => {
        let path = location.pathname.split("/");
        path = path[path.length - 1]
        switch (path) {
            case "hospitalizations":
                setTabIndex(0);
                break;
            case "special-visits":
                setTabIndex(1);
                break;
            case "immunizations":
                setTabIndex(2);
                break;
            case "test-results":
                setTabIndex(3);
                break;
            default:
                setTabIndex(0);
        }
    }, [location])

    // ensure route reflects current tab
    function handleTabChange(index) {
        let path = "../records/";
        switch (index) {
            case 0:
                path += "hospitalizations";
                break;
            case 1:
                path += "special-visits";
                break;
            case 2:
                path += "immunizations";
                break;
            case 3:
                path += "test-results"
                break;
        }
        navigate(path);
    }

    const hospital = {
        headers: [
            "Admit Date",
            "Discharge Date",
            "Hospital",
            "Notes"
        ],
        rows: [
            [
                "19/12/2022",
                "19/12/2022",
                "Foothills General",
                ""
            ], [
                "07/07/2014",
                "10/07/2014",
                "Alberta Children's Hospital",
                ""
            ]
        ]
    }

    const visit = {
        headers: [
            "Date",
            "Clinic",
            "Notes"
        ],
        rows: []

    }

    const immunization = {
        headers: [
            "Date",
            "Name",
            "Provider",
            "Notes"
        ],
        rows: [
            [
                "19/12/2022",
                "COVID-19 bivalent BA.4/BA.5, BNT162b2 - mRNA",
                "",
                ""
            ],
            [
                "19/12/2022",
                "Influenza Standard Dose",
                "",
                ""
            ],
            [
                "26/12/2021",
                "COVID-19 mRNA 1273 - mRNA",
                "",
                ""
            ],
            [
                "15/11/2021",
                "Influenza Standard Dose",
                "",
                ""
            ],
            [
                "14/06/2021",
                "COVID-19 BNT162b2 - mRNA",
                "",
                ""
            ],
            [
                "15/05/2021",
                "COVID-19 BNT162b2 - mRNA",
                "",
                ""
            ],
            [
                "08/11/2020",
                "Influenza Standard Dose",
                "",
                ""
            ],
            [
                "06/03/2012",
                "Meningococcal - Conjugate (A, C, Y, W-135)",
                "",
                ""
            ],
            [
                "06/12/2012",
                "Diphtheria/Tetanus/Acellular Pertussis",
                "",
                ""
            ],
            [
                "15/04/2008",
                "Hepatitis B",
                "",
                ""
            ],
        ]
    }

    const test = {
        headers: [
            "Date",
            "Name",
            "Provider",
            "Notes"
        ],
        rows: [
            [
                "26/09/2023",
                "Blood Glucose Test",
                "DynaLIFE Medical Labs",
                ""
            ]
        ]
    }

    return (
        <div id="records" className="page-content">
            <Tabs selectedIndex={tabIndex} onSelect={handleTabChange}>
                <TabList>
                    <Tab>Hospitalizations</Tab>
                    <Tab>Special Visits</Tab>
                    <Tab>Immunizations</Tab>
                    <Tab>Test Results</Tab>
                </TabList>
                <TabPanel>
                    <RecordTable headers={hospital.headers} rows={hospital.rows} />
                </TabPanel>
                <TabPanel>
                    <RecordTable headers={visit.headers} rows={visit.rows} />
                </TabPanel>
                <TabPanel>
                    <RecordTable headers={immunization.headers} rows={immunization.rows} />
                </TabPanel>
                <TabPanel>
                    <RecordTable headers={test.headers} rows={test.rows} />
                </TabPanel>
            </Tabs>
        </div>
    )
}