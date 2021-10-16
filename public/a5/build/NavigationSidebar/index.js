const NavigationSidebar = (active) => {
    return(`
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i></a>
           <a class="list-group-item ${active ==='home'? 'active':''}"
           href="../HomeScreen/home.html"><i class="fas fa-home wd-float"></i>
             <span class="d-none d-xl-block ps-4">Home</span></a>
         <a class="list-group-item ${active ==='explore'? 'active':''}"
          href="../ExploreScreen/explore.html"><i class="fas fa-hashtag wd-float"></i>
             <span class="d-none d-xl-block ps-4"> Explore</span></a>
            <a class="list-group-item ${active ==='notifications'? 'active':''}"
             href="#"><i class="fas fa-bell wd-float"></i>
             <span class="d-none d-xl-block ps-4">Notifications</span></a>
         <a class="list-group-item ${active ==='messages'? 'active':''}"
          href="#"><i class="fas fa-envelope wd-float"></i>
             <span class="d-none d-xl-block ps-4">Messages</span></a>
         <a class="list-group-item ${active ==='bookmarks'? 'active':''}"
          href="#"><i class="fas fa-bookmark wd-float"></i>
             <span class="d-none d-xl-block ps-4">Bookmarks</span></a>
         <a class="list-group-item ${active ==='lists'? 'active':''}"
          href="#"><i class="fas fa-list wd-float"></i>
             <span class="d-none d-xl-block ps-4">Lists</span></a>
         <a class="list-group-item ${active ==='profile'? 'active':''}"
          href="#"><i class="fas fa-user wd-float"></i>
             <span class="d-none d-xl-block ps-4">Profile</span></a>
         <a class="list-group-item ${active ==='more'? 'active':''}"" href="#">
             <span class="wd-stack wd-float">
                 <i class="fas fa-circle fa-stack-1x"></i>
                 <i class="fas fa-ellipsis-h fa-stack-1x " style="color:white"></i>
             </span>     
             <span class="d-none d-xl-block ps-4">More</span></a>
             </div>
            <div class="d-grid mt-2">
            <button class="d-grid btn btn-primary btn-block rounded-pill">Tweet</button>
            </div>
     
    `);
}
export default NavigationSidebar;

