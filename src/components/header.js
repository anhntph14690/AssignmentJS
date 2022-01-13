const Header = {
    render() {
        return /*html*/ `
           
            <div class="bg-[#272f54] py-4">
              <a href="#"><img class="m-auto" src="https://picsum.photos/250/75" alt=""></a>
            </div>
            <div class="bg-[#cb7802] flex">
              <ul class="w-100 flex">
                <li><a href="/" class="block py-3 px-5 text-stone-50 text-base hover:text-blue-800">Home</a></li>
                <li>

                  <a href="/admin" class="block py-3 px-5 text-stone-50 text-base hover:text-blue-800">Admin</a>

                  <!-- <div class="dropdown" style="position: relative; display: inline-block;">
                    <a class="block py-3 px-5 text-stone-50 text-base hover:text-blue-800">Admin</a>
                    <div class="dropdown-content" style="display: none; position: absolute; background-color: #cb7802; min-width: 160px; box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); padding: 12px 16px; z-index: 1; display: block;">
                      <a href="/admin/dashboard" class="block py-3 px-5 text-stone-50 text-base hover:text-blue-800">Dashboard</a>
                      <a href="/admin/news" class="block py-3 px-5 text-stone-50 text-base hover:text-blue-800">News</a>
                    </div>
                  </div> -->

                </li>
                <li><a href="/signup" class="block py-3 px-5 text-stone-50 text-base hover:text-blue-800">Signup</a></li>
                <li><a href="/signin" class="block py-3 px-5 text-stone-50 text-base hover:text-blue-800">Signin</a></li>
              </ul>
              <div class="py-3 flex ml-80">
                <input class="w-60" type="text">
                <button class="bg-[#272f54] text-stone-50 text-sm w-20 ml-2 border">Search</button> 
              </div>
            </div>
            
        `;
    },
};
export default Header;