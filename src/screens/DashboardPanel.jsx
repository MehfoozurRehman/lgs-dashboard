import React from "react";
import { Lock, Search } from "react-feather";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  BarElement,
} from "chart.js";

export default function DashboardPanel() {
  const navigate = useNavigate();
  return (
    <div className="dashboard__panel">
      <div className="dashboard__panel__header">
        <div className="dashboard__panel__header__heading">Dashboard</div>
        <form action="" className="dashboard__panel__header__form">
          <input
            type="text"
            className="dashboard__panel__header__form__input"
            placeholder="Search here"
          />
          <button className="dashboard__panel__header__form__button">
            <Search size={20} color="currentColor" />
          </button>
        </form>
        <button
          className="dashboard__panel__header__button"
          onClick={() => {
            navigate("/change_password");
          }}
        >
          <div className="dashboard__panel__header__button__icon">
            <Lock size={20} strokeWidth={1} color="currentColor" />
          </div>
          Change Password
        </button>
      </div>
      <div className="dashboard__panel__content">
        <div className="dashboard__panel__content__row">
          <div className="dashboard__panel__content__col">
            <div className="dashboard__panel__content__stats">
              <div className="dashboard__panel__content__stats__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28.964"
                  height="30.5"
                  viewBox="0 0 28.964 30.5"
                >
                  <path
                    id="Icon_open-person"
                    data-name="Icon open-person"
                    d="M14.482,0C10.5,0,7.241,4.27,7.241,9.531s3.258,9.531,7.241,9.531,7.241-4.27,7.241-9.531S18.464,0,14.482,0ZM6.915,19.063A7.469,7.469,0,0,0,0,26.688V30.5H28.964V26.688a7.443,7.443,0,0,0-6.915-7.625,9.978,9.978,0,0,1-7.567,3.813A9.978,9.978,0,0,1,6.915,19.063Z"
                    fill="#1d1d1d"
                  />
                </svg>
              </div>
              <div className="dashboard__panel__content__stats__content">
                <div className="dashboard__panel__content__stats__content__value">
                  120
                </div>
                <div className="dashboard__panel__content__stats__content__label">
                  Totle Receipt
                </div>
              </div>
            </div>
            <div className="dashboard__panel__content__stats">
              <div className="dashboard__panel__content__stats__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="29.925"
                  viewBox="0 0 30 29.925"
                >
                  <path
                    id="Icon_material-data-usage"
                    data-name="Icon material-data-usage"
                    d="M19.5,3.075V7.62A10.493,10.493,0,0,1,28.5,18a10.686,10.686,0,0,1-.72,3.81l3.9,2.3A14.814,14.814,0,0,0,33,18,15.009,15.009,0,0,0,19.5,3.075ZM18,28.5A10.493,10.493,0,0,1,16.5,7.62V3.075a15,15,0,1,0,13.575,23.79l-3.9-2.3A10.426,10.426,0,0,1,18,28.5Z"
                    transform="translate(-3 -3.075)"
                    fill="#1d1d1d"
                  />
                </svg>
              </div>
              <div className="dashboard__panel__content__stats__content">
                <div className="dashboard__panel__content__stats__content__value">
                  120
                </div>
                <div className="dashboard__panel__content__stats__content__label">
                  Total Discount
                </div>
              </div>
            </div>
            <div className="dashboard__panel__content__stats">
              <div className="dashboard__panel__content__stats__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="31.5"
                  height="27"
                  viewBox="0 0 31.5 27"
                >
                  <g
                    id="Icon_ionic-md-paper"
                    data-name="Icon ionic-md-paper"
                    transform="translate(-2.25 -4.5)"
                  >
                    <path
                      id="Path_21941"
                      data-name="Path 21941"
                      d="M32.625,4.5H13.5a1.159,1.159,0,0,0-1.125,1.16V7.875H5.2A2.962,2.962,0,0,0,2.25,10.828v14.59A6.1,6.1,0,0,0,8.3,31.5H27.963a5.8,5.8,0,0,0,5.787-5.766V5.625A1.128,1.128,0,0,0,32.625,4.5Zm-20.25,5.625v13.5H9.422V11.475a3.433,3.433,0,0,0-.232-1.35Zm-1.2,17.958A4.152,4.152,0,0,1,8.332,29.25,3.841,3.841,0,0,1,4.5,25.418V11.475a1.336,1.336,0,1,1,2.672,0V24.75A1.128,1.128,0,0,0,8.3,25.875H12.34A3.7,3.7,0,0,1,11.18,28.083ZM31.5,25.734a3.553,3.553,0,0,1-3.537,3.516H13.17a5.878,5.878,0,0,0,1.455-3.832V6.82H31.5Z"
                      fill="#222"
                    />
                    <path
                      id="Path_21942"
                      data-name="Path 21942"
                      d="M17.438,9.563h11.25V13.5H17.438Z"
                      fill="#222"
                    />
                    <path
                      id="Path_21943"
                      data-name="Path 21943"
                      d="M17.438,15.75h11.25V18H17.438Z"
                      fill="#222"
                    />
                    <path
                      id="Path_21944"
                      data-name="Path 21944"
                      d="M17.438,20.25h11.25V22.5H17.438Z"
                      fill="#222"
                    />
                    <path
                      id="Path_21945"
                      data-name="Path 21945"
                      d="M28.688,24.75H17.438s0,2.25-.562,2.25H27.33C28.688,27,28.688,25.523,28.688,24.75Z"
                      fill="#222"
                    />
                  </g>
                </svg>
              </div>
              <div className="dashboard__panel__content__stats__content">
                <div className="dashboard__panel__content__stats__content__value">
                  120
                </div>
                <div className="dashboard__panel__content__stats__content__label">
                  Total Amount of Purchase
                </div>
              </div>
            </div>
            <div className="dashboard__panel__content__stats">
              <div className="dashboard__panel__content__stats__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28.964"
                  height="30.5"
                  viewBox="0 0 28.964 30.5"
                >
                  <path
                    id="Icon_open-person"
                    data-name="Icon open-person"
                    d="M14.482,0C10.5,0,7.241,4.27,7.241,9.531s3.258,9.531,7.241,9.531,7.241-4.27,7.241-9.531S18.464,0,14.482,0ZM6.915,19.063A7.469,7.469,0,0,0,0,26.688V30.5H28.964V26.688a7.443,7.443,0,0,0-6.915-7.625,9.978,9.978,0,0,1-7.567,3.813A9.978,9.978,0,0,1,6.915,19.063Z"
                    fill="#1d1d1d"
                  />
                </svg>
              </div>
              <div className="dashboard__panel__content__stats__content">
                <div className="dashboard__panel__content__stats__content__value">
                  120
                </div>
                <div className="dashboard__panel__content__stats__content__label">
                  Totle Customer
                </div>
              </div>
            </div>
          </div>
          <div className="dashboard__panel__content__col">
            <TotalCustomer />
            <TotalDiscount />
          </div>
          <div className="dashboard__panel__content__col">
            <TotalReceipt />
          </div>
        </div>
        <div className="dashboard__panel__content__row">
          <TotalPurchases />
        </div>
      </div>
    </div>
  );
}

function TotalReceipt({}) {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        data: [40, 40, 20],
        backgroundColor: ["#37CE69", "#9A7CB8", "#D2D2D2"],
        borderColor: ["#37CE69", "#9A7CB8", "#D2D2D2"],
        borderWidth: 0,
      },
    ],
  };
  return (
    <div className="dashboard__panel__content__traffic__source">
      <div className="dashboard__panel__content__traffic__source__heading">
        Total Receipt
      </div>
      <Doughnut
        data={data}
        style={{
          width: 100,
        }}
      />
      <div className="dashboard__panel__content__traffic__source__content">
        <div className="dashboard__panel__content__traffic__source__content__entry">
          <div
            className="dashboard__panel__content__traffic__source__content__entry__icon"
            style={{ background: "#9A7CB8" }}
          ></div>
          <div className="dashboard__panel__content__traffic__source__content__entry__data">
            Amount
          </div>
        </div>
        <div className="dashboard__panel__content__traffic__source__content__entry">
          <div
            className="dashboard__panel__content__traffic__source__content__entry__icon"
            style={{ background: "#37CE69" }}
          ></div>
          <div className="dashboard__panel__content__traffic__source__content__entry__data">
            Amount
          </div>
        </div>
        <div className="dashboard__panel__content__traffic__source__content__entry">
          <div
            className="dashboard__panel__content__traffic__source__content__entry__icon"
            style={{ background: "#CDD5E1" }}
          ></div>
          <div className="dashboard__panel__content__traffic__source__content__entry__data">
            Amount
          </div>
        </div>
      </div>
    </div>
  );
}

function TotalCustomer({}) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip
  );
  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
    plugins: {},
  };
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Site Page",
        data: [40, 40, 20, 40, 40, 20, 40, 40, 20, 40, 40, 20],
        borderColor: "#37CE69",
        backgroundColor: "#37CE69",
      },
      {
        label: "Blog",
        data: [10, 30, 100, 10, 30, 100, 10, 30, 100, 10, 30, 100],
        borderColor: "#9A7CB8",
        backgroundColor: "#9A7CB8",
      },
    ],
  };
  return (
    <div className="dashboard__panel__content__post__created">
      <div className="dashboard__panel__content__post__created__header">
        <div className="dashboard__panel__content__post__created__header__heading">
          Total Customer
        </div>
        <input
          type="month"
          placeholder="Select Month"
          className="dashboard__panel__content__post__created__select"
        />
      </div>
      <Line options={options} data={data} />
    </div>
  );
}

function TotalDiscount({}) {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: ["Red", "Blue"],
    datasets: [
      {
        data: [50, 30],
        backgroundColor: ["#37CE69", "#9A7CB8"],
        borderColor: ["#37CE69", "#9A7CB8"],
        borderWidth: 0,
      },
    ],
  };
  return (
    <div className="dashboard__panel__content__pages">
      <div className="dashboard__panel__content__pages__left">
        <div className="dashboard__panel__content__pages__heading">
          Total Discount
        </div>
        <div className="dashboard__panel__content__pages__left__content">
          <div className="dashboard__panel__content__pages__left__content__entry">
            <span>12</span>
            Amount
          </div>
          <div className="dashboard__panel__content__pages__left__content__entry">
            <span>12</span>
            Discount
          </div>
        </div>
      </div>
      <Pie data={data} style={{ maxWidth: 200, maxHeight: 200 }} />
    </div>
  );
}
function TotalPurchases() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [10, 30, 20, 10, 30, 40, 10, 100, 50, 60, 70, 80, 70, 80],
        backgroundColor: "#9A7CB8",
      },
    ],
  };
  return (
    <div className="dashboard__panel__content__total_entries">
      <div
        className="dashboard__panel__content__post__created__header__heading"
        style={{
          marginBottom: "1em",
        }}
      >
        Total Purchases
      </div>
      <Bar options={options} data={data} style={{ maxHeight: 300 }} />
    </div>
  );
}
