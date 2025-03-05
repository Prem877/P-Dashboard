'use client'

import DashboardStatsData from "@/data/dashboard/DashboardStatsData";
import DashboardStatsCard from "@/widgets/dashboardStats/DashboardStatsCard";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
//child components
import ActiveProjects from "@/components/dashboard/ActiveProjects";
import TasksPerformance from "@/components/dashboard/TasksPerformance";
import Teams from "@/components/dashboard/Teams";

const Home = () => {
  return (
    <>
      <div className="bg-primary pt-10 pb-21"></div>
      <Container fluid className="mt-n22 px-6">
        <Row>
          <Col lg={12} md={12} xs={12}>
            {/* Page header */}
            <div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="mb-2 mb-lg-0">
                  <h3 className="mb-0  text-white">Projects</h3>
                </div>
                <div>
                  <Link href="#" className="btn btn-white">Create New Project</Link>
                </div>
              </div>
            </div>
          </Col>
          {DashboardStatsData.map((item, index) => {
            return (
              <Col xl={3} lg={6} md={12} xs={12} className="mt-6" key={index}>
                <DashboardStatsCard info={item} />
              </Col>
            )
          })}
        </Row>

        {/* Active Projects  */}
        <ActiveProjects />

        <Row className="my-6">
          <Col xl={4} lg={12} md={12} xs={12} className="mb-6 mb-xl-0">

            {/* Tasks Performance  */}
            <TasksPerformance />

          </Col>
          {/* card  */}
          <Col xl={8} lg={12} md={12} xs={12}>

            {/* Teams  */}
            <Teams />

          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
