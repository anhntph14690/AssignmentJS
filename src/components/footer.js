const Footer = {
    render() {
        return /*html*/`
        <footer>
            <div class="line"></div>
            <div class="container_footer">
                <div class="footer_left">
                    <a href="./../user/index.php">
                        <img src="./../Image/Logo_dong.gif" alt="" width="300px">
                    </a>
                    
                    <div class="content_footer">
                        <p>Thời gian làm việc: <b>7h30 - 22h00</b> </p>
                        <p>Hotline tư vấn: <b>0923.239.468</b></p>
                        <p>Email: <b>anhntph1469@fpt.edu.vn</b></p>
                        <p>ĐC: Phố Trịnh Văn Bô, Nam Từ Liêm, Hà Nội</p>
                    </div>
                </div>
                <div class="footer_right">
                    <menu id="menu">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/products">Product</a></li>
                            <li><a href="/contact">Contact</a></li>
                            <li><a href="/admin/dashboard">Dashboard</a></li>

                        </ul>
                    </menu>
                    <map name="">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.8639810443324!2d105.74459841474767!3d21.038127785993368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b991d80fd5%3A0x53cefc99d6b0bf6f!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEZQVCBQb2x5dGVjaG5pYw!5e0!3m2!1svi!2s!4v1636227388426!5m2!1svi!2s"
                        width="500" height="300" 
                        style="border:0;
                        border-radius: 20px;
                        margin: 40px 122px 0;" 
                        allowfullscreen="" loading="lazy"></iframe>
                    </map>
                </div>
            </div>
            <div class="footer_con">
                <p>Copyright © 2022 | Bản quyền thuộc về Poly Mac. (Nguyễn Thế Anh)</p>
            </div>
            

        </footer>
        `;
    },
};
export default Footer;