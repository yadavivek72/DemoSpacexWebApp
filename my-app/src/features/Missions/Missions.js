import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findMissions } from "./missions.actions";
import { selectMissions, selectFilters } from "./missions.selectors";

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector(selectMissions);
  const filters = useSelector(selectFilters);

  useEffect(() => {
    dispatch(findMissions(filters));
  }, [dispatch, filters]);

  return (
    <div className="app__cards">
      <div className="card__container">
        {missions.map((mission) => (
          <div className="card">
            <img
              src={mission.links.mission_patch}
              className="card__image"
              alt=""
            />
            <div className="card__content">
              <h4 className="card__title">
                {mission.mission_name} <span>#</span>
                {mission.flight_number}
              </h4>
              <div className="card__missionId">
                <h4 className="card__infoHeading">Mission Id:</h4>
                <ul className="mission__list">
                  {mission.mission_id?.length ? (
                    mission.mission_id.map((id) => <li>{id}</li>)
                  ) : (
                    <li>No Data</li>
                  )}
                </ul>
              </div>
              <div className="card__launchYear">
                <h4 className="card__infoHeading">
                  Launch Year:
                  <span className="launch_year">{mission.launch_year}</span>
                </h4>
              </div>
              <table className="card__successfulLaunch">
                <tbody>
                  <tr style={{ padding: "0px" }}>
                    <td className="card__infoHeading">
                      <h4 className="card__infoTitle">Successful Launch: </h4>
                    </td>
                    <td>
                      <h4 className="launch_success">
                        {mission.launch_success}
                      </h4>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="card__successfulLaunch">
                <tbody>
                  <tr style={{ padding: "0px" }}>
                    <td className="card__infoHeading">
                      <h4 className="card__infoTitle">Successful Landing: </h4>
                    </td>
                    <td>
                      <h4 className="launch_success">
                        {mission.landing_success}
                      </h4>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Missions;
