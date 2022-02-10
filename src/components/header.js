const Header = {
    render() {
        return /*html*/ `
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <link rel="stylesheet" href="./../Layout_css/header_index.css">
            <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet">
            <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet">
            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
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
            </ul>
            </div> -->

            <div class="container_header">
                <div class="header_min">
                    <div class="text_header_min">
                        <h3 class="font-black">Poly Mac: Uy tín trong từng sản phẩm!</h3>
                        <h3 class="font-black">Hotline: </h3>
                        <a href="" title="Gọi ngay"><b>0923.239.468</b></a>
                    </div>
                    <div class="login">
                            <div class="dn_dk">
                                <button class="nut_dn" type="button"><a href="../login/login_sigup.php">Đăng nhập</a></button>
                                <button class="nut_dk" type="button"><a href="../login/login_sigup.php">Đăng Kí</a></button>
                            </div>
                    </div>
                </div>
                <div class="header_max">
                    <a href="./../user/index.php">
                        <img src="https://res.cloudinary.com/dsirnbuyv/image/upload/v1644507435/logo_white01_ebezxz.png" alt="" width="80px">
                        
                    </a>
                    
                    <menu>
                        <ul>
                            <li class="dropdown">
                                <a href="/" class="dropbtn">Home</a>
                                <div class="dropdown-content">
                                </div>
                            </li>
                            <li class="dropdown">
                                <a href="/about" class="dropbtn">About</a>
                                <div class="dropdown-content">
                                </div>
                            </li>
                            <li class="dropdown">
                                <a href="/product" class="dropbtn">Product</a>
                                <div class="dropdown-content">
                                </div>
                            </li>
                            <li class="dropdown">
                                <a href="/contact" class="dropbtn">Contact</a>
                                <div class="dropdown-content">
                                </div>
                            </li>
                            <li class="dropdown">
                                <a href="/admin/dashboard" class="dropbtn">Dashboard</a>
                                <div class="dropdown-content">
                                </div>
                            </li>
                        </ul>
                    </menu>
                    <div class="search_cart">
                        <div class="search-container">
                            <form action="../user/get_pt_by_search.php" method="POST">
                                <input type="text" name="search" placeholder="Tìm kiếm..." class="search-input">
                                <button class="search-btn">
                                    <i class="fas fa-search"></i>
                                </button>
                            </form>
                        </div>
                        
                    </div>

                </div>
            </div>
            
            
        </header>
        `;
    },
};
export default Header;