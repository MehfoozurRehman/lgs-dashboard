import React, { useState } from "react";
import Tab from "../components/Tab";
import TableHeaderEntry from "../components/TableHeaderEntry";

function CareersSchoolTableEntry({ onEdit, onView, onDelete }) {
  return (
    <div className="main__content__table__list">
      <div className="main__content__table__list__entry">Bilal</div>
      <div className="main__content__table__list__entry">Matric, O-LEVEL</div>
      <div className="main__content__table__list__entry">2020</div>
      <div className="main__content__table__list__entry">2022</div>
    </div>
  );
}
function CareersCollegeUniversityTableEntry({ onEdit, onView, onDelete }) {
  return (
    <div className="main__content__table__list">
      <div className="main__content__table__list__entry">Bilal</div>
      <div className="main__content__table__list__entry">GTTC Samundri</div>
      <div className="main__content__table__list__entry">2020</div>
      <div className="main__content__table__list__entry">2022</div>
    </div>
  );
}
function CareersExperienceTableEntry({ onEdit, onView, onDelete }) {
  return (
    <div className="main__content__table__list">
      <div className="main__content__table__list__entry">
        <img
          src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
          className="main__content__table__list__entry__img"
        />
      </div>
      <div className="main__content__table__list__entry">
        <img
          src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
          className="main__content__table__list__entry__img"
        />
      </div>
      <div className="main__content__table__list__entry">Bilal</div>
      <div className="main__content__table__list__entry">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, harum?
      </div>
      <div className="main__content__table__list__entry">20-10-2022</div>
      <div className="main__content__table__list__entry">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, harum?
      </div>
      <div className="main__content__table__list__entry">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, harum?
      </div>
      <div className="main__content__table__list__entry">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, harum?
      </div>
      <div className="main__content__table__list__entry">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, harum?
      </div>
    </div>
  );
}

export default function CareersDetails({ onAdd, onEdit, onView, onDelete }) {
  const [active, setActive] = useState("School");
  return (
    <div className="main">
      <div className="main__header">
        <div className="main__header__top">
          <div className="main__header__top__heading">Academic History</div>
          <div className="main__header__top__buttons">
            {/* <button className="main__header__top__buttons__button">
              Bulk Add
            </button> */}
            {/* <button
              className="main__header__top__buttons__button"
              onClick={() => {
                onAdd(true);
              }}
            >
              Add New
            </button> */}
          </div>
        </div>
      </div>
      <div className="main__content">
        <div
          className="main__content__form__col__tab__wrapper"
          style={{ marginTop: 20 }}
        >
          <Tab label="School" active={active} setActive={setActive} />
          <Tab
            label="College/University"
            active={active}
            setActive={setActive}
          />
          <Tab label="Experience" active={active} setActive={setActive} />
        </div>
        <div className="main__content__table">
          <div className="main__content__table__header">
            {active === "School" ? (
              <>
                <TableHeaderEntry title="Name of school" />
                <TableHeaderEntry title="Attended classes" />
                <TableHeaderEntry title="Year from" />
                <TableHeaderEntry title="Year to" />
              </>
            ) : active === "College/University" ? (
              <>
                <TableHeaderEntry title="Degree/Diploma Attained" />
                <TableHeaderEntry title="Name Of Institiution" />
                <TableHeaderEntry title="Year from" />
                <TableHeaderEntry title="Year to" />
              </>
            ) : active === "Experience" ? (
              <>
                <TableHeaderEntry title="Cover Letter" />
                <TableHeaderEntry title="Upload CV" />
                <TableHeaderEntry title="Institution" />
                <TableHeaderEntry title="Address" />
                <TableHeaderEntry title="Date Of Employment" />
                <TableHeaderEntry title="Reason For Leaving" />
                <TableHeaderEntry title="What Subject Would You Like To Teach?" />
                <TableHeaderEntry title="At What Level Would You Like To Teach?" />
                <TableHeaderEntry title="Additional Information:" />
              </>
            ) : null}
          </div>
          {active === "School" ? (
            <>
              <CareersSchoolTableEntry onEdit={onEdit} onDelete={onDelete} />
              <CareersSchoolTableEntry onEdit={onEdit} onDelete={onDelete} />
              <CareersSchoolTableEntry onEdit={onEdit} onDelete={onDelete} />
              <CareersSchoolTableEntry onEdit={onEdit} onDelete={onDelete} />
              <CareersSchoolTableEntry onEdit={onEdit} onDelete={onDelete} />
              <CareersSchoolTableEntry onEdit={onEdit} onDelete={onDelete} />
              <CareersSchoolTableEntry onEdit={onEdit} onDelete={onDelete} />
              <CareersSchoolTableEntry onEdit={onEdit} onDelete={onDelete} />
              <CareersSchoolTableEntry onEdit={onEdit} onDelete={onDelete} />
              <CareersSchoolTableEntry onEdit={onEdit} onDelete={onDelete} />
              <CareersSchoolTableEntry onEdit={onEdit} onDelete={onDelete} />
              <CareersSchoolTableEntry onEdit={onEdit} onDelete={onDelete} />
              <CareersSchoolTableEntry onEdit={onEdit} onDelete={onDelete} />
              <CareersSchoolTableEntry onEdit={onEdit} onDelete={onDelete} />
              <CareersSchoolTableEntry onEdit={onEdit} onDelete={onDelete} />
              <CareersSchoolTableEntry onEdit={onEdit} onDelete={onDelete} />
              <CareersSchoolTableEntry onEdit={onEdit} onDelete={onDelete} />
              <CareersSchoolTableEntry onEdit={onEdit} onDelete={onDelete} />
              <CareersSchoolTableEntry onEdit={onEdit} onDelete={onDelete} />
              <CareersSchoolTableEntry onEdit={onEdit} onDelete={onDelete} />
              <CareersSchoolTableEntry onEdit={onEdit} onDelete={onDelete} />
              <CareersSchoolTableEntry onEdit={onEdit} onDelete={onDelete} />
              <CareersSchoolTableEntry onEdit={onEdit} onDelete={onDelete} />
              <CareersSchoolTableEntry onEdit={onEdit} onDelete={onDelete} />
              <CareersSchoolTableEntry onEdit={onEdit} onDelete={onDelete} />
              <CareersSchoolTableEntry onEdit={onEdit} onDelete={onDelete} />
              <CareersSchoolTableEntry onEdit={onEdit} onDelete={onDelete} />
              <CareersSchoolTableEntry onEdit={onEdit} onDelete={onDelete} />
              <CareersSchoolTableEntry onEdit={onEdit} onDelete={onDelete} />
              <CareersSchoolTableEntry onEdit={onEdit} onDelete={onDelete} />
              <CareersSchoolTableEntry onEdit={onEdit} onDelete={onDelete} />
              <CareersSchoolTableEntry onEdit={onEdit} onDelete={onDelete} />
              <CareersSchoolTableEntry onEdit={onEdit} onDelete={onDelete} />
            </>
          ) : active === "College/University" ? (
            <>
              <CareersCollegeUniversityTableEntry
                onEdit={onEdit}
                onDelete={onDelete}
              />
              <CareersCollegeUniversityTableEntry
                onEdit={onEdit}
                onDelete={onDelete}
              />
              <CareersCollegeUniversityTableEntry
                onEdit={onEdit}
                onDelete={onDelete}
              />
              <CareersCollegeUniversityTableEntry
                onEdit={onEdit}
                onDelete={onDelete}
              />
              <CareersCollegeUniversityTableEntry
                onEdit={onEdit}
                onDelete={onDelete}
              />
              <CareersCollegeUniversityTableEntry
                onEdit={onEdit}
                onDelete={onDelete}
              />
              <CareersCollegeUniversityTableEntry
                onEdit={onEdit}
                onDelete={onDelete}
              />
              <CareersCollegeUniversityTableEntry
                onEdit={onEdit}
                onDelete={onDelete}
              />
              <CareersCollegeUniversityTableEntry
                onEdit={onEdit}
                onDelete={onDelete}
              />
              <CareersCollegeUniversityTableEntry
                onEdit={onEdit}
                onDelete={onDelete}
              />
              <CareersCollegeUniversityTableEntry
                onEdit={onEdit}
                onDelete={onDelete}
              />
              <CareersCollegeUniversityTableEntry
                onEdit={onEdit}
                onDelete={onDelete}
              />
              <CareersCollegeUniversityTableEntry
                onEdit={onEdit}
                onDelete={onDelete}
              />
              <CareersCollegeUniversityTableEntry
                onEdit={onEdit}
                onDelete={onDelete}
              />
              <CareersCollegeUniversityTableEntry
                onEdit={onEdit}
                onDelete={onDelete}
              />
              <CareersCollegeUniversityTableEntry
                onEdit={onEdit}
                onDelete={onDelete}
              />
              <CareersCollegeUniversityTableEntry
                onEdit={onEdit}
                onDelete={onDelete}
              />
            </>
          ) : active === "Experience" ? (
            <>
              <CareersExperienceTableEntry
                onEdit={onEdit}
                onDelete={onDelete}
              />
              <CareersExperienceTableEntry
                onEdit={onEdit}
                onDelete={onDelete}
              />
              <CareersExperienceTableEntry
                onEdit={onEdit}
                onDelete={onDelete}
              />
              <CareersExperienceTableEntry
                onEdit={onEdit}
                onDelete={onDelete}
              />
              <CareersExperienceTableEntry
                onEdit={onEdit}
                onDelete={onDelete}
              />
              <CareersExperienceTableEntry
                onEdit={onEdit}
                onDelete={onDelete}
              />
              <CareersExperienceTableEntry
                onEdit={onEdit}
                onDelete={onDelete}
              />
              <CareersExperienceTableEntry
                onEdit={onEdit}
                onDelete={onDelete}
              />
              <CareersExperienceTableEntry
                onEdit={onEdit}
                onDelete={onDelete}
              />
              <CareersExperienceTableEntry
                onEdit={onEdit}
                onDelete={onDelete}
              />
              <CareersExperienceTableEntry
                onEdit={onEdit}
                onDelete={onDelete}
              />
              <CareersExperienceTableEntry
                onEdit={onEdit}
                onDelete={onDelete}
              />
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
