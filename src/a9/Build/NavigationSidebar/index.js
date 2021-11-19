import React from "react";
import {Link} from "react-router-dom"
const NavigationSidebar = ({active='explore'}) => {
    return(
        <>
            <div className="list-group">
                <Link to="/a9/" className="list-group-item">
                    <i className="fab fa-twitter"/></Link>
           <Link to="/a9/twitter/home" className={`list-group-item ${active ==='home'? 'active':''}`}>
               <i className="fas fa-home"/>
             <span className="d-none d-xl-inline">Home</span></Link>
         <Link to="/a9/twitter/explore" className={`list-group-item ${active ==='explore'? 'active':''}`}>
             <i className="fas fa-hashtag"/>
             <span className="d-none d-xl-inline"> Explore</span></Link>
            <a className={`list-group-item ${active ==='notifications'? 'active':''}`}
             href="#"><i className="fas fa-bell"/>
             <span className="d-none d-xl-inline">Notifications</span></a>
         <a className={`list-group-item ${active ==='messages'? 'active':''}`}
          href="#"><i className="fas fa-envelope"/>
             <span className="d-none d-xl-inline">Messages</span></a>
         <a className={`list-group-item ${active ==='bookmarks'? 'active':''}`}
          href="#"><i className="fas fa-bookmark"/>
             <span className="d-none d-xl-inline">Bookmarks</span></a>
         <a className={`list-group-item ${active ==='lists'? 'active':''}"`}
          href="#"><i className="fas fa-list"/>
             <span className="d-none d-xl-inline">Lists</span></a>
         <Link to="/a9/twitter/profile" className={`list-group-item ${active ==='profile'? 'active':''}`}>
          <i className="fas fa-user"/>
             <span className="d-none d-xl-inline">Profile</span> </Link>
         <a className={`list-group-item ${active ==='more'? 'active':''}`}
             href="#">
             <span className="fa-stack">
                 <i className="fas fa-circle fa-stack-1x"/>
                 <i className="fas fa-ellipsis-h fa-stack-1x"/>
             </span>     
             <span className="d-none d-xl-inline">More</span></a>
             </div>
            <div className="d-grid mt-2">
            <button className="d-grid btn btn-primary btn-block rounded-pill">Tweet</button>
            </div>
</>
     
    );
}
export default NavigationSidebar;

