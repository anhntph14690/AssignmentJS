const Header = {
    render() {
        return /*html*/ `
            <div class="bg-[#272f54] py-4">
              <a href="#"><img class="m-auto" src="https://picsum.photos/250/75" alt=""></a>
            </div>
            <div class="bg-[#cb7802] flex">
              <ul class="w-100 flex">
                <li><a href="/" class="block py-3 px-5 text-stone-50 text-base hover:text-blue-800">Home</a></li>
                <li><a href="/admin" class="block py-3 px-5 text-stone-50 text-base hover:text-blue-800">Admin</a></li>
                <li><a href="/signup" class="block py-3 px-5 text-stone-50 text-base hover:text-blue-800">Signup</a></li>
                <li><a href="/signin" class="block py-3 px-5 text-stone-50 text-base hover:text-blue-800">Signin</a></li>
              </ul>
            </div>
        `;
    },
};
export default Header;