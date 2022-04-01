import React from "react";

export default function CallUs({ onAdd, onEdit, onDelete }) {
  return (
    <div className="main">
      <div className="main__header">
        <div className="main__header__top">
          <div className="main__header__top__heading">Call Us</div>
          <div className="main__header__top__buttons"></div>
        </div>
      </div>
      <div className="main__content">
        <div className="main__content__row__contact">
          <a
            href="tel:+43 45 5453453443"
            className="main__content__row__contact__link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28.108"
              height="28.108"
              viewBox="0 0 33.311 33.353"
            >
              <path
                id="Icon_zocial-call"
                data-name="Icon zocial-call"
                d="M3.337,9.491a2.454,2.454,0,0,1,.625-1.333l5-5q.584-.5.875.167l4.04,7.579a1.09,1.09,0,0,1-.208,1.291L11.833,14.03a2.072,2.072,0,0,0-.583,1.291,6.357,6.357,0,0,0,1.291,3.207,27.384,27.384,0,0,0,2.54,3.333l1.291,1.331c.389.389.888.868,1.5,1.437a25.142,25.142,0,0,0,3.018,2.249,6.755,6.755,0,0,0,3.311,1.4,1.813,1.813,0,0,0,1.333-.541L27.7,25.566a.915.915,0,0,1,1.248-.167l7.289,4.289a.609.609,0,0,1,.333.437.532.532,0,0,1-.167.479l-5,5a2.447,2.447,0,0,1-1.331.623,10.075,10.075,0,0,1-4.6-.562,20.826,20.826,0,0,1-4.746-2.27q-2.186-1.415-4.06-2.872t-3-2.5l-1.083-1.042q-.416-.416-1.1-1.145t-2.4-2.872a41.824,41.824,0,0,1-2.957-4.185,24.415,24.415,0,0,1-2.166-4.643A9.878,9.878,0,0,1,3.337,9.491Z"
                transform="translate(-3.267 -2.947)"
                fill="currentColor"
              />
            </svg>
            +43 45 5453453443
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=43455453453443&text=sdfasdf"
            className="main__content__row__contact__link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28.108"
              height="28.108"
              viewBox="0 0 28.108 28.108"
            >
              <path
                id="Icon_ionic-logo-whatsapp"
                data-name="Icon ionic-logo-whatsapp"
                d="M16.559,2.25A13.746,13.746,0,0,0,2.76,15.942a13.551,13.551,0,0,0,1.98,7.07L2.25,30.358l7.64-2.427A13.822,13.822,0,0,0,30.358,15.942,13.746,13.746,0,0,0,16.559,2.25Zm6.862,18.892a3.564,3.564,0,0,1-2.441,1.573c-.647.034-.666.5-4.194-1.031s-5.65-5.261-5.817-5.5a6.767,6.767,0,0,1-1.3-3.668A3.91,3.91,0,0,1,11.01,9.647a1.351,1.351,0,0,1,.956-.4c.278,0,.458-.008.663,0s.514-.043.781.668.906,2.457.988,2.634a.639.639,0,0,1,.006.613,2.4,2.4,0,0,1-.374.57c-.184.2-.387.442-.552.593-.183.167-.375.35-.182.707a10.559,10.559,0,0,0,1.868,2.493,9.628,9.628,0,0,0,2.767,1.839c.346.188.553.168.767-.058s.918-.988,1.167-1.328.481-.274.8-.146,2.018,1.039,2.364,1.227.577.284.659.433A2.9,2.9,0,0,1,23.421,21.142Z"
                transform="translate(-2.25 -2.25)"
                fill="currentColor"
              />
            </svg>
            +43 45 5453453443
          </a>
          <a
            href="mailto:hello@picode.com"
            className="main__content__row__contact__link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26.77"
              height="21.416"
              viewBox="0 0 26.77 21.416"
            >
              <path
                id="Icon_material-email"
                data-name="Icon material-email"
                d="M27.093,6H5.677A2.673,2.673,0,0,0,3.013,8.677L3,24.739a2.685,2.685,0,0,0,2.677,2.677H27.093a2.685,2.685,0,0,0,2.677-2.677V8.677A2.685,2.685,0,0,0,27.093,6Zm0,5.354L16.385,18.046,5.677,11.354V8.677l10.708,6.692L27.093,8.677Z"
                transform="translate(-3 -6)"
                fill="currentColor"
              />
            </svg>
            hello@picode.com
          </a>
        </div>
      </div>
    </div>
  );
}
