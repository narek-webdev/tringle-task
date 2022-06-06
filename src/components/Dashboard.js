import React, { memo } from "react";

const Dashboard = ({ num, reverse }) => {
    return (
        <div className="dashboard">
            <div className={!reverse ? "dashboard__container" : "dashboard__container dashboard__container--reverse"}>
                {+num ? [...Array(+num)].map((x, key) => {
                    return (
                        <div className="dashboard__item" key={key}>
                            {[...Array(+num - (num - (key + 1)))].map((i, key) => {
                                return <div className="dashboard__star" key={key}>*</div>
                            })}
                        </div>
                    )
                }) : null}
            </div>
        </div>
    )
}

export default memo(Dashboard);