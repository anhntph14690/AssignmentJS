const Banner = {
    render() {
        return /*html*/`
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Untitled</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700">

            </head>
            <div>
                <div class="container hero">
                    <div class="row">
                        <div class="col-12 col-lg-6 col-xl-5 offset-xl-1">
                            <h1>The revolution is here.</h1>
                            <p>Mauris egestas tellus non ex condimentum, ac ullamcorper sapien dictum. Nam consequat neque
                                quis sapien viverra convallis. In non tempus lorem. </p><button
                                class="btn btn-light btn-lg action-button" type="button">Learn More</button>
                        </div>
                        <div class="col-md-5 col-lg-5 offset-lg-1 offset-xl-0 d-none d-lg-block phone-holder">
                            <div class="iphone-mockup"><img src="https://picsum.photos/5000/4000" class="device">
                                <div class="screen"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
         `;
    },
};
export default Banner;