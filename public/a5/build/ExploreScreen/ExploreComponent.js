import PostSummaryList from "../PostSummaryList/index.js";


const ExploreComponent = () => {
    return(`
            <div class="row">
                       <!-- search field and cog -->
             <div class="col-11 wd-search-area">
         
                    <i class="fas fa-search wd-search-icon "></i>
                    <input class=" form-control rounded-corner wd-padding-left" placeholder="Search Twitter">

                </div>
                <div class="col-1">
                    <i class="fas fa-cog fa-2x" style="color:rgb(29,161,242)"></i>
                </div>
           </div>
           <ul class="nav mt-2 nav-tabs">
                      <!-- tabs -->
               <li class="nav-item">
                    <a class="nav-link active" href="#">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link d-none d-md-block " href="#" tabindex="-1">Entertainment</a>
                </li>
           </ul>
         <div class="container mt-2 wd-no-padding">
                        <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg?w=1390&crop=1"
                        class="img-fluid">
                
                    <div class="wd-text "><strong> SpaceX's Starship</strong></div>
                    </div>
           ${PostSummaryList()}
         
    `);
}
export default ExploreComponent;
