const Header = {
    render() {
        return /*html*/ `
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Untitled</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700">
        </head>
        <header>
            <!-- <div class="bg-blue-800 py-4">
                <a href="">
                    <img src="https://picsum.photos/150/40" alt="" class="mx-auto">
                </a>
            </div>
            <div class="bg-orange-500">
                <ul class="flex">
                    <li><a href="/" class="block px-4 py-3 hover:bg-indigo-500 hover:text-white">Home </a></li>
                    <li><a href="/about" class="block px-4 py-3 hover:bg-indigo-500 hover:text-white">About</a></li>
                    <li><a href="/product" class="block px-4 py-3 hover:bg-indigo-500 hover:text-white">Product</a></li>
                    <li><a href="/contact" class="block px-4 py-3 hover:bg-indigo-500 hover:text-white">Contact</a></li>
                    <li><a href="/admin/dashboard" class="block px-4 py-3 hover:bg-indigo-500 hover:text-white">Dashboard</a></li>
                    <li><a class="block px-4 py-3 hover:bg-indigo-500 hover:text-white" id="email"></a></li>
                    <li><a class="block px-4 py-3 hover:bg-indigo-500 hover:text-white" id="logout">Logout</a></li>
                </ul>
            </div> -->
            
            <div class="header-blue">
                <nav class="navbar navbar-dark navbar-expand-md navigation-clean-search">
                    <div class="container"><a class="navbar-brand" href="#">Assignment</a><button class="navbar-toggler"
                            data-toggle="collapse" data-target="#navcol-1"><span class="sr-only">Toggle
                                navigation</span><span class="navbar-toggler-icon"></span></button>
                        <div class="collapse navbar-collapse" id="navcol-1">
                            <ul class="nav navbar-nav">
                                <ul class="flex nav navbar-nav">
                                    <li><a href="/" class="nav-link active">Home </a></li>
                                    <li><a href="/about" class="nav-link active">About</a></li>
                                    <li><a href="/product" class="nav-link active">Product</a></li>
                                    <li><a href="/contact" class="nav-link active">Contact</a></li>
                                    <li><a href="/admin/dashboard" class="nav-link active">Dashboard</a></li>
                                </ul>
                            </ul>
                            <form class="form-inline mr-auto" target="_self">
                                <div class="form-group"><label for="search-field"><i class="fa fa-search"></i></label><input
                                        class="form-control search-field" type="search" name="search" id="search-field">
                                </div>
                            </form><span class="navbar-text"> <a href="#" class="login">Log In</a></span><a
                                class="btn btn-light action-button" role="button" href="#">Sign Up</a>
                        </div>
                    </div>
                </nav>
                
            </div>
        </header>
        `;
    },
    afterRender() {
        const email = document.querySelector('email');
        const logout = document.querySelector('#logout');
        email.innerHTML = Json.parse(localStorage.getItem('user')).email;

        logout.addEventListener('click', function () {
            localStorage.removeItem('user');
        })

    }
};
export default Header;