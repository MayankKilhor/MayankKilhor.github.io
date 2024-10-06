import React from 'react';

import {
  Col,
} from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="6">
      <div class="card shadow-lg p-3 mb-5 bg-white rounded card">
      <div className="pb-5 text-center">
        <img className=" bg-white mb-3" src={data.companylogo} alt="" />
        <p className="lead">
          <b>{data.role}</b>
            at  
          <i>
            <a href={data.url} target=" _blank" class="btn btn-outline-primary mx-2 ">{data.companyname}</a>
          </i>
          <br />
          <br />
          {data.date}
          <br />
          <br />
          {data.desc}
        </p>

      </div>
      </div>
    </Col>
  );
}

export default ExperienceCard;