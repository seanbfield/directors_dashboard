import axios from "axios";
import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Typography, Box } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import './ProjectList.css'

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const message = "No Data Available"



  const columns = [
    { type: "string", id: "President" },
    { type: "date", id: "Start" },
    { type: "date", id: "End" },
  ];
  
  const rows = [
    ["Washington", new Date(1789, 3, 30), new Date(1797, 2, 4)],
    ["Adams", new Date(1797, 2, 4), new Date(1801, 2, 4)],
    ["Jefferson", new Date(1801, 2, 4), new Date(1809, 2, 4)],
  ];

  const timelineData = [columns, ...rows];



  useEffect(() => {
    axios.get("/api/now/table/pm_project").then((res) => {
      setProjects(res.data.result);
    });
  }, []);



  const Projects = () => {
    console.log("projects", projects);
    return (
      <>
        {/* {projects.map( (i)=>(<div key={i.sys_id}>{i.number}: {i.short_description}</div>)) } */}

        {projects.map((i) => (
          <div className="accordionHolder" key={i.sys_id}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Box
                  display="flex"
                  flexDirection="row"
                  width="100%"
                  justifyContent="space-between"
                >
                  <Box display="flex" flexDirection="column" sx={{width: "15%"}}>
                    <Typography sx={{ fontSize: 12 }}>Project Name</Typography>
                    <Typography sx={{ fontSize: 16 }}>
                      {i.short_description}
                    </Typography>
                  </Box>
                  <Box display="flex" flexDirection="column">
                    <Typography sx={{ fontSize: 12 }}>
                      Budgeted Funds
                    </Typography>
                    <Typography sx={{ fontSize: 16 }}>$ {i.capex_cost}</Typography>
                  </Box>
                  <Box display="flex" flexDirection="column">
                    <Typography sx={{ fontSize: 12 }}>Start Date</Typography>
                    <Typography sx={{ fontSize: 16 }}>{i.start}</Typography>
                  </Box>
                  <Box display="flex" flexDirection="column">
                    <Typography sx={{ fontSize: 12 }}>End Date</Typography>
                    <Typography sx={{ fontSize: 16 }}>{i.end}</Typography>
                  </Box>
                  <Box display="flex" flexDirection="column">
                    <Typography sx={{ fontSize: 12 }}>
                      Percent Complete
                    </Typography>
                    <Typography sx={{ fontSize: 16, marginRight: 5 }}>
                      {i.percent_complete} %
                    </Typography>
                  </Box>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ backgroundColor: "#f6f6fa" }}>
                <div className="accRow">
                  <div className="accBox">
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {i.number}
                    </Typography>
                  </div>
                  <div className="accBox">
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                     null data
                    </Typography>
                  </div>
                  <div className={i.investment_class === "" ? "accWarning" : "accBox" }>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                        {i.investment_class === "" ? message : i.investment_class }
                    </Typography>
                  </div>
                  <div className="accBox">
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {i.investment_type}
                    </Typography>
                  </div>
                </div>
                <div className="accRow">
                  <div className="accBox">
                    <Typography
    
                      sx={{ fontSize: 14, fontWeight: "bold" }}
                      color={i.phase === 'initiating' ? "#0984e3" : "text.primary" }
                      gutterBottom
                    >
                      {i.phase}
                    </Typography>
                  </div>
                  <div className="accBox">
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                     null data
                    </Typography>
                  </div>
                  <div className={i.investment_class === "" ? "accWarning" : "accBox" }>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                        {i.investment_class === "" ? message : i.investment_class }
                    </Typography>
                  </div>
                  <div className="accBox">
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {i.investment_type}
                    </Typography>
                  </div>
                </div>
                <div>
                <Chart chartType="Timeline" data={timelineData} width="100%" height="400px" />
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        ))}
      </>
    );
  };

  return (
    <div>
      <Projects />
    </div>
  );
};

export default ProjectList;
