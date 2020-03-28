import React from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

const user = {
  name: 'Farshad',
  surename: 'Kazemi',
  image: 'https://source.unsplash.com/QAB-WJcbgJk/60x60'
};

const Home = () => {
  return (
    <React.Fragment>
      <div id="wrapper">
        <Sidebar user />
        {/*  Content Wrapper  */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/*  Main Content  */}
          <div id="content">
            <Topbar user={user} />
            {/*  Begin Page Content  */}
            <div className="container-fluid">
              {/*  Page Heading  */}
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                <a
                  href="#"
                  className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                >
                  <i className="fas fa-download fa-sm text-white-50"></i>{' '}
                  Generate Report
                </a>
              </div>

              {/*  Content Row  */}
              <div className="row">
                {/*  Earnings (Monthly) Card Example  */}
                <div className="col-xl-3 col-md-6 mb-4">
                  <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                            Describe an images
                          </div>
                          <div className="h5 mb-0 font-weight-bold text-gray-800">
                            Test your abilities
                          </div>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-calendar fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/*  Earnings (Monthly) Card Example  */}
                <div className="col-xl-3 col-md-6 mb-4">
                  <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                            Donnation
                          </div>
                          <div className="h5 mb-0 font-weight-bold text-gray-800">
                            $0
                          </div>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/*  Earnings (Monthly) Card Example  */}
                <div className="col-xl-3 col-md-6 mb-4">
                  <div className="card border-left-info shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                            How long have you come?
                          </div>
                          <div className="row no-gutters align-items-center">
                            <div className="col-auto">
                              <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                                0%
                              </div>
                            </div>
                            <div className="col">
                              <div className="progress progress-sm mr-2">
                                <div
                                  className="progress-bar bg-info"
                                  role="progressbar"
                                  style={{ width: '50%' }}
                                  aria-valuenow="50"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/*  Pending Requests Card Example  */}
                <div className="col-xl-3 col-md-6 mb-4">
                  <div className="card border-left-warning shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                            Chat with other students
                          </div>
                          <div className="h5 mb-0 font-weight-bold text-gray-800">
                            Join the group
                          </div>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-comments fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            {/*  /.container-fluid  */}
          </div>
          {/*  End of Main Content  */}

          {/*  Footer  */}
          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright &copy; Your Website 2019</span>
              </div>
            </div>
          </footer>
          {/*  End of Footer  */}
        </div>
        {/*  End of Content Wrapper  */}
      </div>
      {/*  End of Page Wrapper  */}

      {/*  Scroll to Top Button */}
      <a className="scroll-to-top rounded" href="#wrapper">
        <i className="fas fa-angle-up"></i>
      </a>

      {/*  Logout Modal */}
      <div
        className="modal fade"
        id="logoutModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Ready to Leave?
              </h5>
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              Select "Logout" below if you are ready to end your current
              session.
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                type="button"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <a className="btn btn-primary" href="login.html">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>

      {/*  Bootstrap core JavaScript */}
      <script src="vendor/jquery/jquery.min.js"></script>
      <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

      {/*  Core plugin JavaScript */}
      <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

      {/*  Custom scripts for all pages */}
      <script src="js/sb-admin-2.min.js"></script>

      {/*  Page level plugins  */}
      <script src="vendor/chart.js/Chart.min.js"></script>

      {/*$1*/}
      <script src="js/demo/chart-area-demo.js"></script>
      <script src="js/demo/chart-pie-demo.js"></script>
    </React.Fragment>
  );
};

export default Home;
