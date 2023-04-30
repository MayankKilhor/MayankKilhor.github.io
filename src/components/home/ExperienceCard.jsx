import React from 'react';
import Card from "react-bootstrap/Card";

import {
  Col,
} from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="6">
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
      <div className="pb-5 text-center">
        {/* <img className=" bg-white mb-3" src={data.companylogo} alt="" /> */}
        <p className="lead">
          <b>{data.role}</b> at <i><a href={data.url} target=" _blank" className="btn btn-outline-primary mx-2 " >{data.companyname}</a></i>
          <br />
          <br />
          <i>{data.date}</i>
          <br />
          <br />
          {data.desc}
        </p>

      </div>
      </Card>
    </Col>
  );
}

export default ExperienceCard;