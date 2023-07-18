import React from 'react';

function InnerContainer(props) {
  const { firstName, lastName, age, gender } = props;

  let ageEvaluation;
  if (age >= 18) {
    ageEvaluation = <h4>Adult</h4>;
  } else {
    ageEvaluation = <h4>Minor</h4>;
  }

  let genderEvaluation;
  if (gender === 'Male') {
    genderEvaluation = <h4 className='text-info'>He is a male.</h4>;
  } else if (gender === 'Female') {
    genderEvaluation = <h4 className='text-warning'>She is a female.</h4>;
  } else {
    genderEvaluation = <h4 className='text-light'>Non-binary.</h4>;
  }

  return (
    <div className="d-flex column col-lg-3 animate__bounceIn">
      <div className={`card m-5 shadow ${age >= 18 ? 'bg-success' : 'bg-danger'}`}>
        <div className='card-body'>
          <p>
            First Name: <span className='fw-bold'>{firstName}</span>
          </p>
          <p>
            Last Name: <span className='fw-bold'>{lastName}</span>
          </p>
          <p>
            Age: <span className='fw-bold'>{age}</span>
          </p>
          <p>
            Gender: <span className='fw-bold'>{gender}</span>
          </p>
          {ageEvaluation}
          {genderEvaluation}
        </div>
      </div>
    </div>
  );
}

export default InnerContainer;