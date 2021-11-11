import React from "react";
import PostSummaryList from "../PostSummaryList/index";

const ExploreComponent = () => {
    return(
        <>
            <div className="row">
             <div className="col-10 wd-flex-box">
                    <i className="fas fa-search wd-magnifying-glass "/>
                    <input className="form-control override-bs rounded-pill " placeholder="Search Twitter"/>
                </div>
                <div className="col-2">
                    <i className="fas fa-cog fa-2x cog-color" />
                </div>
           </div>
           <ul className="nav mt-2 nav-tabs">
               <li className="nav-item">
                    <a className="nav-link active" href="#">For you</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Sports</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link d-none d-md-block " href="#" tabindex="-1">Entertainment</a>
                </li>
           </ul>
         <div className="mt-2">
             <div className="wd-no-padding">
                 <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg?w=1390&crop=1"
                      className="img-fluid"/>
                 <div className="wd-text "><strong> SpaceX's Starship</strong></div>
             </div>

         </div>
           <PostSummaryList/>
            </>

    );
}
export default ExploreComponent;
