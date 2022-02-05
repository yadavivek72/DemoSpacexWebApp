import React from "react";
import { useDispatch } from "react-redux";
import { actions } from "../Missions/missions.reducer";

const { setMissionsFilters } = actions;

const YEARS_FILTER = [
  2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018,
  2019, 2020,
];

const LAUNCH_AND_LANDING_FILTER = [
  { label: "True", value: true },
  { label: "False", value: false },
];

const Filters = () => {
  const dispatch = useDispatch();
  return (
    <div className="app__filter">
      <div className="filterPanel">
        <div className="filter__header">
          <h4 className="filter__title">Filters</h4>
        </div>
        <div className="filter__launchYear">
          <div className="subPanel">
            <div className="subPanel__header">
              <h4 className="subPanel__title">Launch year</h4>
            </div>
            <div className="subPanel__years">
              {YEARS_FILTER.map((year) => (
                <div key={year} className="button__container">
                  <div id={year} className="year__button">
                    <button
                      className="MuiButtonBase-root MuiButton-root MuiButton-text"
                      tabindex="0"
                      type="button"
                      onClick={() => {
                        dispatch(setMissionsFilters({ launch_year: year }));
                      }}
                    >
                      <span className="MuiButton-label">{year}</span>
                      <span className="MuiTouchRipple-root"></span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="filter__launchYear">
          <div className="subPanel">
            <div className="subPanel__header">
              <h4 className="subPanel__title">Successful Launch</h4>
            </div>
            <div className="subPanel__years">
              {LAUNCH_AND_LANDING_FILTER.map(({ label, value }) => (
                <div key={label} className="button__container">
                  <div id={label} className="year__button">
                    <button
                      className="MuiButtonBase-root MuiButton-root MuiButton-text"
                      tabindex="0"
                      type="button"
                      onClick={() => {
                        dispatch(setMissionsFilters({ launch_success: value }));
                      }}
                    >
                      <span className="MuiButton-label">{label}</span>
                      <span className="MuiTouchRipple-root"></span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="filter__landingYear">
          <div className="subPanel">
            <div className="subPanel__header">
              <h4 className="subPanel__title">Successful Landing</h4>
            </div>
            <div className="subPanel__years">
              {LAUNCH_AND_LANDING_FILTER.map(({ label, value }) => (
                <div key={label} className="button__container">
                  <div id={label} className="year__button">
                    <button
                      className="MuiButtonBase-root MuiButton-root MuiButton-text"
                      tabindex="0"
                      type="button"
                      onClick={() => {
                        dispatch(
                          setMissionsFilters({ landing_success: value })
                        );
                      }}
                    >
                      <span className="MuiButton-label">{label}</span>
                      <span className="MuiTouchRipple-root"></span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
