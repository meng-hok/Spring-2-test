document.getElementById("app").innerHTML  = `
<!-- update navbar to fix and width 100% -->
<nav class="navbar navbar-expand-lg navbar-light bg-dark navbar-default navbar-fixed-top" style="position: fixed; top:0; z-index: 2; width: 100%; border-radius: 5px;">
    
    <!-- reposive- display -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <!-- end of reponsive -->

    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
                <a class="nav-link btn  btn-outline-dark" style="color:#f8f9fa !important; "  href="home.html">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link btn btn-outline-dark " style="color:#f8f9fa !important; " href="content.html">Content</a>
            </li>
            <li class="nav-item">
                    <a class="nav-link btn btn-outline-dark " style="color:#f8f9fa !important;" href="about-us.html">About Us</a>
            </li>
        </ul>
        <a class="nav-link btn btn-outline-dark "  style="margin-right: 0.5%;" href="#">About us</a>
        <form class="form-inline my-2 my-lg-0">   
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
        </form>
    </div>
</nav>
<!-- nav-bar  -->
`;