import React from 'react';

function Home(props) {
    return (
        <>

            {/* <div className="fh5co-loader"></div> */}

            <div id="page">
                <header id="fh5co-header" className="fh5co-cover js-fullheight" role="banner"
                    style={{
                        backgroundImage: "url(images/cover_bg_3.jpg)",
                        height: "100vh",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }} data-stellar-background-ratio="0.5">
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2 text-center">
                                <div className="display-t js-fullheight">
                                    <div className="display-tc js-fullheight animate-box" data-animate-effect="fadeIn">
                                        <div className="profile-thumb" style={{ background: "url(https://storage.googleapis.com/chiranjitapp.appspot.com/chiranjit.jpg)" }}></div>
                                        <h1><span>Chiranjit Mandal</span></h1>
                                        <h3><span>Fullstack Developer / AIML</span></h3>
                                        <p />
                                        <ul className="fh5co-social-icons">
                                            <li><a href="https://github.com/imchiranjit"><i className="icon-github2"></i></a></li>
                                            <li><a href="https://twitter.com/imchiranjit_"><i className="icon-twitter2"></i></a></li>
                                            <li><a href="https://facebook.com/im.chiranjitmandal"><i className="icon-facebook2"></i></a></li>
                                            <li><a href="https://instagram.com/im.chiranjitmandal"><i className="icon-instagram2"></i></a></li>
                                            <li><a href="https://linkedin.com/in/imchiranjit"><i className="icon-linkedin2"></i></a></li>
                                            <li><a href="https://chiranjit.web.app"><i className="icon-globe2"></i></a></li>
                                        </ul>
                                        <p />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* <div id="fh5co-about" className="animate-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                                <h2>About Me</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <ul className="info">
                                    <li><span className="first-block">Full Name:</span><span className="second-block">Chiranjit Mandal</span></li>
                                    <li><span className="first-block">Phone:</span><span className="second-block">+ 1235 2355 98</span></li>
                                    <li><span className="first-block">Email:</span><span className="second-block">info.chiranjit.ml@gmail.com</span></li>
                                    <li><span className="first-block">Website:</span><span className="second-block">chiranjit.web.app</span></li>
                                    <li><span className="first-block">Address:</span><span className="second-block">198 West 21th Street, Suite 721 New York NY 10016</span></li>
                                </ul>
                            </div>
                            <div className="col-md-8">
                                <h2>Hello There!</h2>
                                <p>There live the blind texts far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in bookmarksgrove there live the blind texts far from the countries.</p>
                                <p>Far far away, behind the word mountains, Quos quia provident consequuntur culpa facere ratione maxime commodi voluptates id repellat velit eaque aspernatur expedita. Possimus itaque adipisci there live the blind texts from the countries Vokalia and Consonantia, there live the blind texts. Quos quia provident consequuntur culpa facere ratione maxime commodi voluptates id repellat velit eaque aspernatur expedita. Possimus itaque adipisci.</p>
                                <p />
                                <ul className="fh5co-social-icons">
                                    <li><a href="#"><i className="icon-twitter2"></i></a></li>
                                    <li><a href="#"><i className="icon-facebook3"></i></a></li>
                                    <li><a href="#"><i className="icon-linkedin2"></i></a></li>
                                    <li><a href="#"><i className="icon-dribbble2"></i></a></li>
                                </ul>
                                <p />
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* <div id="fh5co-resume" className="fh5co-bg-color">
                    <div className="container">
                        <div className="row animate-box">
                            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                                <h2>My Resume</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-md-offset-0">
                                <ul className="timeline">
                                    <li className="timeline-heading text-center animate-box">
                                        <div><h3>Work Experience</h3></div>
                                    </li>
                                    <li className="animate-box timeline-unverted">
                                        <div className="timeline-badge"><i className="icon-suitcase"></i></div>
                                        <div className="timeline-panel">
                                            <div className="timeline-heading">
                                                <h3 className="timeline-title">Senior Developer</h3>
                                                <span className="company">Company Name - 2016 - Current</span>
                                            </div>
                                            <div className="timeline-body">
                                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="timeline-inverted animate-box">
                                        <div className="timeline-badge"><i className="icon-suitcase"></i></div>
                                        <div className="timeline-panel">
                                            <div className="timeline-heading">
                                                <h3 className="timeline-title">Junior Developer</h3>
                                                <span className="company">Company Name - 2013 - 2015</span>
                                            </div>
                                            <div className="timeline-body">
                                                <p>Far far away, behind the word mountains, they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="animate-box timeline-unverted">
                                        <div className="timeline-badge"><i className="icon-suitcase"></i></div>
                                        <div className="timeline-panel">
                                            <div className="timeline-heading">
                                                <h3 className="timeline-title">UI/UX Designer</h3>
                                                <span className="company">Company Name - 2010 - 2012</span>
                                            </div>
                                            <div className="timeline-body">
                                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                            </div>
                                        </div>
                                    </li>

                                    <br/>
                                        <li className="timeline-heading text-center animate-box">
                                            <div><h3>Education</h3></div>
                                        </li>
                                        <li className="timeline-inverted animate-box">
                                            <div className="timeline-badge"><i className="icon-graduation-cap"></i></div>
                                            <div className="timeline-panel">
                                                <div className="timeline-heading">
                                                    <h3 className="timeline-title">Masters Degree</h3>
                                                    <span className="company">University Name - 2007 - 2009</span>
                                                </div>
                                                <div className="timeline-body">
                                                    <p>Far far away, behind the word mountains, they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="animate-box timeline-unverted">
                                            <div className="timeline-badge"><i className="icon-graduation-cap"></i></div>
                                            <div className="timeline-panel">
                                                <div className="timeline-heading">
                                                    <h3 className="timeline-title">Bachelors Degree</h3>
                                                    <span className="company">University Name - 2002 - 2006</span>
                                                </div>
                                                <div className="timeline-body">
                                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="timeline-inverted animate-box">
                                            <div className="timeline-badge"><i className="icon-graduation-cap"></i></div>
                                            <div className="timeline-panel">
                                                <div className="timeline-heading">
                                                    <h3 className="timeline-title">Diploma Course</h3>
                                                    <span className="company">College Name - 1999 - 2001</span>
                                                </div>
                                                <div className="timeline-body">
                                                    <p>Far far away, behind the word mountains, they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="animate-box timeline-unverted">
                                            <div className="timeline-badge"><i className="icon-graduation-cap"></i></div>
                                            <div className="timeline-panel">
                                                <div className="timeline-heading">
                                                    <h3 className="timeline-title">Graduation</h3>
                                                    <span className="company">College Name - 1994 - 1998</span>
                                                </div>
                                                <div className="timeline-body">
                                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                                </div>
                                            </div>
                                        </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> */}


                {/* <div id="fh5co-features" className="animate-box">
                    <div className="container">
                        <div className="services-padding">
                            <div className="row">
                                <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                                    <h2>My Services</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 text-center">
                                    <div className="feature-left">
                                        <span className="icon">
                                            <i className="icon-paintbrush"></i>
                                        </span>
                                        <div className="feature-copy">
                                            <h3>Web Design</h3>
                                            <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 text-center">
                                    <div className="feature-left">
                                        <span className="icon">
                                            <i className="icon-briefcase"></i>
                                        </span>
                                        <div className="feature-copy">
                                            <h3>Branding</h3>
                                            <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-md-4 text-center">
                                    <div className="feature-left">
                                        <span className="icon">
                                            <i className="icon-search"></i>
                                        </span>
                                        <div className="feature-copy">
                                            <h3>Analytics</h3>
                                            <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-md-4 text-center">

                                    <div className="feature-left">
                                        <span className="icon">
                                            <i className="icon-bargraph"></i>
                                        </span>
                                        <div className="feature-copy">
                                            <h3>Web Developent</h3>
                                            <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-md-4 text-center">
                                    <div className="feature-left">
                                        <span className="icon">
                                            <i className="icon-genius"></i>
                                        </span>
                                        <div className="feature-copy">
                                            <h3>Web Marketing</h3>
                                            <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-md-4 text-center">
                                    <div className="feature-left">
                                        <span className="icon">
                                            <i className="icon-chat"></i>
                                        </span>
                                        <div className="feature-copy">
                                            <h3>Support</h3>
                                            <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="fh5co-skills" className="animate-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                                <h2>Skills</h2>
                            </div>
                        </div>
                        <div className="row row-pb-md">
                            <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                                <div className="chart" data-percent="95"><span><strong>HTML5</strong>95%</span></div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                                <div className="chart" data-percent="93"><span><strong>CSS3</strong>93%</span></div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                                <div className="chart" data-percent="90"><span><strong>jQuery</strong>90%</span></div>
                            </div>

                            <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                                <div className="chart" data-percent="89"><span><strong>PHP</strong>89%</span></div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                                <div className="chart" data-percent="85"><span><strong>MySQL</strong>85%</span></div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                                <div className="chart" data-percent="90"><span><strong>AngularJS</strong>90%</span></div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                                <div className="chart" data-percent="85"><span><strong>Ruby</strong>85%</span></div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                                <div className="chart" data-percent="90"><span><strong>Java</strong>90%</span></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="progress-wrap">
                                    <h3><span className="name-left">HTML5/CSS3</span><span className="value-right">95%</span></h3>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-1 progress-bar-striped active" role="progressbar"
                                            aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="width:90%">
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-wrap">
                                    <h3><span className="name-left">WordPress</span><span className="value-right">90%</span></h3>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-2 progress-bar-striped active" role="progressbar"
                                            aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="width:90%">
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-wrap">
                                    <h3><span className="name-left">PHP</span><span className="value-right">80%</span></h3>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-3 progress-bar-striped active" role="progressbar"
                                            aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width:80%">
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-wrap">
                                    <h3><span className="name-left">Java</span><span className="value-right">85%</span></h3>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-4 progress-bar-striped active" role="progressbar"
                                            aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="width:85%">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="progress-wrap">
                                    <h3><span className="name-left">Design</span><span className="value-right">100%</span></h3>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-5 progress-bar-striped active" role="progressbar"
                                            aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width:100%">
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-wrap">
                                    <h3><span className="name-left">Ruby</span><span className="value-right">70%</span></h3>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped active" role="progressbar"
                                            aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:70%">
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-wrap">
                                    <h3><span className="name-left">Python</span><span className="value-right">85%</span></h3>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-1 progress-bar-striped active" role="progressbar"
                                            aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="width:85%">
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-wrap">
                                    <h3><span className="name-left">jQuery</span><span className="value-right">75%</span></h3>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-3 progress-bar-striped active" role="progressbar"
                                            aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width:75%">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="fh5co-work" className="fh5co-bg-dark">
                    <div className="container">
                        <div className="row animate-box">
                            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                                <h2>Work</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 text-center col-padding animate-box">
                                <a href="#" className="work" style="background-image: url(images/portfolio-1.jpg);">
                                    <div className="desc">
                                        <h3>Project Name</h3>
                                        <span>Illustration</span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-3 text-center col-padding animate-box">
                                <a href="#" className="work" style="background-image: url(images/portfolio-2.jpg);">
                                    <div className="desc">
                                        <h3>Project Name</h3>
                                        <span>Brading</span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-3 text-center col-padding animate-box">
                                <a href="#" className="work" style="background-image: url(images/portfolio-3.jpg);">
                                    <div className="desc">
                                        <h3>Project Name</h3>
                                        <span>Illustration</span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-3 text-center col-padding animate-box">
                                <a href="#" className="work" style="background-image: url(images/portfolio-4.jpg);">
                                    <div className="desc">
                                        <h3>Project Name</h3>
                                        <span>Design</span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-3 text-center col-padding animate-box">
                                <a href="#" className="work" style="background-image: url(images/portfolio-5.jpg);">
                                    <div className="desc">
                                        <h3>Project Name</h3>
                                        <span>Website</span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-3 text-center col-padding animate-box">
                                <a href="#" className="work" style="background-image: url(images/portfolio-6.jpg);">
                                    <div className="desc">
                                        <h3>Project Name</h3>
                                        <span>Illustration</span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-3 text-center col-padding animate-box">
                                <a href="#" className="work" style="background-image: url(images/portfolio-7.jpg);">
                                    <div className="desc">
                                        <h3>Project Name</h3>
                                        <span>Brading</span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-3 text-center col-padding animate-box">
                                <a href="#" className="work" style="background-image: url(images/portfolio-8.jpg);">
                                    <div className="desc">
                                        <h3>Project Name</h3>
                                        <span>Illustration</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="fh5co-blog">
                    <div className="container">
                        <div className="row animate-box">
                            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                                <h2>Post on Medium</h2>
                                <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="fh5co-blog animate-box">
                                    <a href="#" className="blog-bg" style="background-image: url(images/portfolio-1.jpg);"></a>
                                    <div className="blog-text">
                                        <span className="posted_on">Mar. 15th 2016</span>
                                        <h3><a href="#">Photoshoot On The Street</a></h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        <ul className="stuff">
                                            <li><i className="icon-heart2"></i>249</li>
                                            <li><i className="icon-eye2"></i>308</li>
                                            <li><a href="#">Read More<i className="icon-arrow-right22"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="fh5co-blog animate-box">
                                    <a href="#" className="blog-bg" style="background-image: url(images/portfolio-2.jpg);"></a>
                                    <div className="blog-text">
                                        <span className="posted_on">Mar. 15th 2016</span>
                                        <h3><a href="#">Surfing at Philippines</a></h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        <ul className="stuff">
                                            <li><i className="icon-heart2"></i>249</li>
                                            <li><i className="icon-eye2"></i>308</li>
                                            <li><a href="#">Read More<i className="icon-arrow-right22"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="fh5co-blog animate-box">
                                    <a href="#" className="blog-bg" style="background-image: url(images/portfolio-3.jpg);"></a>
                                    <div className="blog-text">
                                        <span className="posted_on">Mar. 15th 2016</span>
                                        <h3><a href="#">Capture Living On Uderwater</a></h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        <ul className="stuff">
                                            <li><i className="icon-heart2"></i>249</li>
                                            <li><i className="icon-eye2"></i>308</li>
                                            <li><a href="#">Read More<i className="icon-arrow-right22"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="fh5co-started" className="fh5co-bg-dark">
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row animate-box">
                            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                                <h2>Hire Me!</h2>
                                <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.</p>
                                <p><a href="#" className="btn btn-default btn-lg">Contact Us</a></p>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* <div id="fh5co-consult">
                    <div className="video fh5co-video" style={{ backgroundImage: "url(images/cover_bg_1.jpg)" }}>
                        <div className="overlay"></div>
                    </div>
                    <div className="choose animate-box">
                        <h2>Contact</h2>
                        <form action="#">
                            <div className="row form-group">
                                <div className="col-md-12">
                                    <input type="text" id="name" className="form-control" placeholder="Your Name" />
                                </div>
                            </div>

                            <div className="row form-group">
                                <div className="col-md-12">
                                    <input type="text" id="email" className="form-control" placeholder="Your email address" />
                                </div>
                            </div>

                            <div className="row form-group">
                                <div className="col-md-12">
                                    <input type="text" id="subject" className="form-control" placeholder="Your subject of this message" />
                                </div>
                            </div>

                            <div className="row form-group">
                                <div className="col-md-12">
                                    <textarea name="message" id="message" cols="30" rows="10" className="form-control" placeholder="Say something about us"></textarea>
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Send Message" className="btn btn-primary" />
                            </div>

                        </form>
                    </div>
                </div>

                <div id="map" className="fh5co-map"></div> */}
            </div>

            {/* <div id="fh5co-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <p>&copy; 2024 All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="gototop js-top">
                <a href="#" className="js-gotop"><i className="icon-arrow-up22"></i></a>
            </div>

        </>
    );
}

export default Home;