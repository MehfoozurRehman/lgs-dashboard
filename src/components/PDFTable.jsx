import React from "react";

export default function PDFTable({ data }) {
  return (
    <>
      {data.map((item) => (
        <>
          <div className="registration__form__name">
            Name of Branch:
            <span>{item.branchName}</span>
          </div>
          <table className="registration__form__table">
            <div className="registration__form__table__entry">
              Child’s full name (in capital letters):
              <span>{item.name}</span>
            </div>
            <div className="registration__form__table__entry">
              Gender:
              <span>{item.gender}</span>
            </div>
            <div className="registration__form__table__entry">
              Exact date of birth:
              <span>{item.dateOfBrith}</span>
            </div>
            <div className="registration__form__table__entry">
              Place of birth:
              <span>{item.placeOfBirth}</span>
            </div>
            <div className="registration__form__table__entry">
              Class in which admission is desired:
              <span>{item.classInWhichAdmission}</span>
            </div>
            <div className="registration__form__table__entry">
              Father’s name and address:
              <span>{item.fatherNameAddress}</span>
            </div>
            <div className="registration__form__table__entry">
              Father’s Profession / Occupation:
              <span>{item.fatherProfession}</span>
            </div>
            <div className="registration__form__table__entry">
              Tel:
              <span>{item.fatherTel}</span>
              <div className="registration__form__table__entry__secondary">
                <div className="registration__form__table__entry__secondary__entry">
                  Off:
                  <span>{item.fatherOff}</span>
                </div>
                <div className="registration__form__table__entry__secondary__entry">
                  Mob:
                  <span>{item.fatherMob}</span>
                </div>
              </div>
            </div>
            <div className="registration__form__table__entry">
              Father’s CNIC:
              <span>{item.fatherCNIC}</span>
            </div>
            <div className="registration__form__table__entry">
              Mother’s name and address:
              <span>{item.motherNameAddress}</span>
            </div>
            <div className="registration__form__table__entry">
              Mother’s Profession / Occupation:
              <span>{item.motherProfession}</span>
            </div>
            <div className="registration__form__table__entry">
              Tel(Res):
              <span>{item.motherTel}</span>
              <div className="registration__form__table__entry__secondary">
                <div className="registration__form__table__entry__secondary__entry">
                  Off:
                  <span>{item.motherOff}</span>
                </div>
                <div className="registration__form__table__entry__secondary__entry">
                  Mob:
                  <span>{item.motherMob}</span>
                </div>
              </div>
            </div>
            <div className="registration__form__table__entry">
              Mother’s CNIC:
              <span>{item.motherCNIC}</span>
            </div>
            <div className="registration__form__table__entry">
              Guardian’s name and address:
              <span>{item.guardianNameAddress}</span>
            </div>
            <div className="registration__form__table__entry">
              Guardian’s Profession / Occupation:
              <span>{item.guardianProfession}</span>
            </div>
            <div className="registration__form__table__entry">
              Tel(Res):
              <span>{item.guardianTel}</span>
              <div className="registration__form__table__entry__secondary">
                <div className="registration__form__table__entry__secondary__entry">
                  Off:
                  <span>{item.guardianOff}</span>
                </div>
                <div className="registration__form__table__entry__secondary__entry">
                  Mob:
                  <span>{item.guardianMob}</span>
                </div>
              </div>
            </div>
            <div className="registration__form__table__entry">
              Nationality of parents:
              <span>{item.nationalityOfParents}</span>
            </div>
            <div className="registration__form__table__entry">
              Name of previous Nursery / School:
              <span>{item.nameOfPreviousSchool}</span>
            </div>
            <div className="registration__form__table__entry">
              Class previously studying in and date of promotion:
              <span>{item.previousClass}</span>
            </div>
            <div className="registration__form__table__entry">
              Brother / Sister studying in any LGS branch:
              <span>{item.siblingInLGS}</span>
              <div className="registration__form__table__entry__secondary">
                <div className="registration__form__table__entry__secondary__entry">
                  Class:
                  <span>{item.siblingInLGSClass}</span>
                </div>
              </div>
            </div>
            <div className="registration__form__table__entry">
              Birth certificate / Leaving certificate has been attached:
              <span>Yes</span>
            </div>
          </table>
        </>
      ))}
    </>
  );
}
