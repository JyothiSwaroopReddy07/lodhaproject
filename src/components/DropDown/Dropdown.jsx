import React from 'react';
import './Dropdown.css';
import Accordion from 'react-bootstrap/Accordion';
function Dropdown() {

  return (
    <>
      <div className="sidenav">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Management</Accordion.Header>
            <Accordion.Body>
              <a href='/Finance'>Finance & Account</a>
              <a href='/FM'>FM</a>
              <a href='/Cultural'>Cultural Section</a>
              <a href='/HelpDesk'>Help Desk</a>
              <a href='/Complaints'>Complaints</a>
              <a href='/LegalUpdate'>Legal Update</a>
              <a href='/Purchase'>Purchase & Audit Section</a>
              <a href='/KeyContacts'>Key Contacts & Email ids</a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Repository</Accordion.Header>
            <Accordion.Body>
              <a href='/SocietyByLaws'>Society By-Laws</a>
              <a href='/ProcessDocs'>Process & Policy Documents </a>
              <a href='/Communication'>Key Communication</a>
              <a href='/PreviousYearsData'>Previous Years Data</a>
              <a href='/KeyContracts'>Key Contracts</a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Key Reports</Accordion.Header>
            <Accordion.Body>
              <a href='/Accounting'>Accounting</a>
              <a href='/Annexures'>Annexures to OIS Details</a>
              <a href='/BankStatements'>Bank Statements</a>
              <a href='/AuditReports'>Audit Reports</a>
              <a href='/NewProposals'>New Proposals for Society</a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Owners Section</Accordion.Header>
            <Accordion.Body>
              <a href='/SocietyDues'>Society Dues</a>
              <a href='/Ois'>Owners Information System</a>
              <a href='/Parking'>Parking Allotment Chart</a>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>Key Links</Accordion.Header>
            <Accordion.Body>
              <a href="/Meeting">Set-Up Zoom Meeting</a>
              <a href='/Notifications'>Upcoming Zoom Meetings</a>
              <a href='/MyGate'>My Gate</a>
              <a href='/Forms'>Google Forms</a>
              <a href='/Vendors'>Vendors Directory & Negotiated Rates</a>
              <a href='/Emergency'>Emergency Services</a>
              <a href='/Translation'>Google Translation</a>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

      </div>
    </>
  );
}

export default Dropdown;