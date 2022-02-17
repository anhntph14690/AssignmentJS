const NavAdmin = {
  render() {
    return /*html*/`
      <head>
          <link rel="stylesheet" href="./../../nav_admin.css">
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css">
      </head>

      <div id="menu_layout" class="d-flex flex-column vh-100 flex-shrink-0 p-3 text-white bg-[#ffffff1a]" style="width: 250px;">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <svg class="bi me-2" width="40" height="32"> </svg>
            <img src="https://res.cloudinary.com/dsirnbuyv/image/upload/v1644767257/logo_white02_zocquw.png" alt="" width="100px" height="100px">
        </a>
        <hr>
        <ul class="nav nav-pills flex-column mb-auto space-y-10 ml-5">
            <li class="hover:bg-[#ffffff38]">
                <a href="/admin/dashboard" class="">
                    <span class="text-white text-lg">Dashboard</span>
                </a>
            </li>
            <li class="hover:bg-[#ffffff38]"> 
                <a href="/admin/news" class="">
                    <span class="text-white text-lg">News</span> 
                </a>
            </li>
            <li  class="hover:bg-[#ffffff38]">
                <a href="/products" class="">
                    <span class="text-white text-lg">Products</span>
                </a>
            </li>
            <li class="hover:bg-[#ffffff38]">
                <a href="#" class="">
                    <span class="text-white text-lg">Order</span>
                </a>
            </li>
        </ul>
        <hr>
        <div class="dropdown mx-auto">
            <a href="/" class="">
                    <span class="text-white text-lg">Home</span>
                </a>
        </div>
    </div>

    
      `;
  },
};
export default NavAdmin;