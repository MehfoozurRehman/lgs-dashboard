import React from "react";
import Select from "react-select";
import UploadImage from "../components/UploadImage";
import TextArea from "../components/TextArea";
import { useNavigate } from "react-router-dom";

export default function RegistrationsAdmissionsForm({ heading }) {
  const navigate = useNavigate();
  return (
    <div className="main">
      <div className="main__header" style={{ height: "8%" }}>
        <div className="main__header__top">
          <div className="main__header__top__heading">
            {heading} Registrations/Admissions
          </div>
          <div className="main__header__top__buttons">
            <button
              className="main__header__top__buttons__button"
              onClick={() => {
                navigate(-1);
              }}
            >
              {heading === "Add" ? "Add New" : "Save"}
            </button>
          </div>
        </div>
      </div>
      <div
        className="main__content"
        style={{
          height: "92%",
        }}
      >
        <div className="main__content__form">
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Name Of Branch</div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Name Of Branch"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Child's Full Name</div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Child's Full Name"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">
                Exact Date Of Birth
              </div>
              <input
                type="date"
                className="popup__form__input__field"
                placeholder="Enter Exact Date Of Birth"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Gender</div>
              <Select
                options={[
                  { value: "Male", label: "Male" },
                  { value: "Female", label: "Female" },
                ]}
                theme={(theme) => ({
                  ...theme,

                  colors: {
                    ...theme.colors,
                    primary25: "#f6f6f6",
                    primary: "#005dff",
                    primary50: "f6f6f6",
                  },
                })}
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Place Of Birth</div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Place Of Birth"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">
                Class In Which Admission Is Desired
              </div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Class In Which Admission Is Desired"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col" style={{ width: "100%" }}>
            <div className="popup__form__input">
              <div className="popup__form__input__label">
                Father's Name And Address
              </div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Father's Name And Address"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col" style={{ width: "100%" }}>
            <div className="popup__form__input">
              <div className="popup__form__input__label">
                Father's Profession / Occupation
              </div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Father's Profession / Occupation"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Tel</div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Tel"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Tel Off</div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Tel Off"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Mob</div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Mob"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Father's CNIC</div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Father's CNIC"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col" style={{ width: "100%" }}>
            <div className="popup__form__input">
              <div className="popup__form__input__label">
                Mother's Name And Address
              </div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Father's Name And Address"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col" style={{ width: "100%" }}>
            <div className="popup__form__input">
              <div className="popup__form__input__label">
                Mother's Profession / Occupation
              </div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Father's Profession / Occupation"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Tel</div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Tel"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Tel Off</div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Tel Off"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Mob</div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Mob"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Mother's CNIC</div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Mother's CNIC"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col" style={{ width: "100%" }}>
            <div className="popup__form__input">
              <div className="popup__form__input__label">
                Guardian's Name And Address
              </div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Guardian's Name And Address"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col" style={{ width: "100%" }}>
            <div className="popup__form__input">
              <div className="popup__form__input__label">
                Guardian's Profession / Occupation
              </div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Guardian's Profession / Occupation"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Tel</div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Tel"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Tel Off</div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Tel Off"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Mob</div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Mob"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col" style={{ width: "50%" }}>
            <div className="popup__form__input">
              <div className="popup__form__input__label">
                Nationality Of Parents
              </div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Nationality Of Parents"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col" style={{ width: "50%" }}>
            <div className="popup__form__input">
              <div className="popup__form__input__label">
                Name Of Previous Nursery / School
              </div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Name Of Previous Nursery / School"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col" style={{ width: "100%" }}>
            <div className="popup__form__input">
              <div className="popup__form__input__label">
                Class Previously Studying In And Date Of Promotion
              </div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Class Previously Studying In And Date Of Promotion"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col" style={{ width: "50%" }}>
            <div className="popup__form__input">
              <div className="popup__form__input__label">
                Brother/Sister Studying In Any LGS Branch
              </div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Brother/Sister Studying In Any LGS Branch"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col" style={{ width: "50%" }}>
            <div className="popup__form__input">
              <div className="popup__form__input__label">
                Class Of Brother/Sister Studying In Any LGS Branch
              </div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Class Of Brother/Sister Studying In Any LGS Branch"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <UploadImage label="Upload Birth Certificate" />
          </div>
          <div className="main__content__form__col">
            <UploadImage label="Upload Leaving Certificate" />
          </div>
        </div>
      </div>
    </div>
  );
}
