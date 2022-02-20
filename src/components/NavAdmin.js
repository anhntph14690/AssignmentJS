const NavAdmin = {
  render() {
    return /*html*/`
      <head>
          <link rel="stylesheet" href="./../../nav_admin.css">
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css">
      </head>

    <div class=" sticky top-0 d-flex flex-column vh-100 flex-shrink-0 p-3 text-white bg-[#ffffff1a] shadow-2xl" style="width: 250px;">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <svg class="bi me-2" width="40" height="32"> </svg>
            <img src="https://res.cloudinary.com/dsirnbuyv/image/upload/v1644767257/logo_white02_zocquw.png" alt="" width="100px" height="100px">
        </a>
        <hr>
        <ul class="nav nav-pills flex-column mb-auto space-y-10 ml-5">
            <li>
                <a href="/admin/dashboard" class="text-white text-lg hover:text-green-500 underline no-underline">Dashboard</a>
            </li>
            <li> 
                <a href="/admin/news" class="text-white text-lg underline no-underline">News</a>
            </li>
            <li >
                <a href="/admin/products" class="text-white text-lg underline no-underline">Products</a>
            </li>
            <li>
                <a href="#" class="text-white text-lg underline no-underline">Order</a>
            </li>
        </ul>
        <hr>
        <div class="dropdown mx-auto">
            <a href="/" class="text-white text-lg underline no-underline">Home</a>
        </div>
    </div>

    
      `;
  },
};
export default NavAdmin;