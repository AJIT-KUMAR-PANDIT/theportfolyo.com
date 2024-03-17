import React from 'react';

const HeroSection = () => {
  return (
    <div className="hero-section">
      {/* Logo */}
      <a className="logo" href="#">
        <div className="logo-img"></div>
      </a>

      {/* Navigation Button */}
      <div className="round-menu-wrapper">
        <div className="round-menu navigation-fire">
          <span className="dot-1"></span>
          <span className="dot-2"></span>
          <span className="dot-3"></span>
        </div>
      </div>

      {/* Navigation Panel Left */}
      <div className="panel-overlay-from-left"></div>

      {/* Navigation Panel Right */}
      <div className="panel-from-right">
        {/* Navigation Links */}
        <nav className="navigation-menu">
          <div className="center-container-menu">
            <div className="center-block-menu">
              <ul className="menu">
                <li>
                  <a className="navigation-state active" href="#page-home">
                    Home
                  </a>
                </li>
                <li>
                  <a className="navigation-state" href="#page-about">
                    About
                  </a>
                </li>
                <li>
                  <a className="navigation-state" href="#page-works">
                    Works
                  </a>
                </li>
                <li>
                  <a className="navigation-state" href="#page-news-intro">
                    News
                  </a>
                </li>
                <li>
                  <a className="navigation-state" href="#page-contact-intro">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Blob */}
        <svg className="goo" viewBox="0 0 100 100">
          <defs>
            <filter id='goo'>
              <feGaussianBlur in='SourceGraphic' result='blur' stdDeviation='4' />
              <feColorMatrix in='blur' result='goo' values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7' />
            </filter>
          </defs>
          <g filter="url(#goo)">
            <circle cx="35" cy="35" r="12">
              <animateTransform attributeName="transform" attributeType="XML" repeatCount="indefinite" type="rotate" from="0 60 50" to="360 50 50" dur="8s" />
              <animate attributeName="fill" attributeType="XML" repeatCount="indefinite" values="Gray; DimGray; Gray" keyTimes="0; 0.5; 1" dur="6s" />
            </circle>
            <circle cx="40" cy="35" r="12">
              <animateTransform attributeName="transform" attributeType="XML" repeatCount="indefinite" type="rotate" dur="6s" from="0 60 50" to="-360 50 50" />
              <animate attributeName="fill" attributeType="XML" repeatCount="indefinite" values="DimGray; Gray; DimGray" keyTimes="0; 0.5; 1" dur="8s" />
            </circle>
            <circle cx="45" cy="45" r="25">
              <animateTransform attributeName="transform" attributeType="XML" repeatCount="indefinite" dur="4s" from="0 50 50" to="360 50 50" type="rotate" />
              <animate attributeName="fill" attributeType="XML" repeatCount="indefinite" values="DimGray; Gray; DimGray" keyTimes="0; 0.5; 1" dur="6s" />
            </circle>
            <circle cx="30" cy="60" r="20">
              <animateTransform attributeName="transform" attributeType="XML" repeatCount="indefinite" dur="10s" from="0 50 50" to="-360 50 50" type="rotate" />
              <animate attributeName="fill" attributeType="XML" repeatCount="indefinite" values="DimGray; Gray; DimGray" keyTimes="0; 0.5; 1" dur="9s" />
            </circle>
            <circle cx="60" cy="40" r="15">
              <animateTransform attributeName="transform" attributeType="XML" repeatCount="indefinite" dur="8s" from="0 40 40" to="360 40 40" type="rotate" />
              <animate attributeName="fill" attributeType="XML" repeatCount="indefinite" values="DimGray; Gray; DimGray" keyTimes="0; 0.5; 1" dur="7s" />
            </circle>
          </g>
        </svg>
        {/* Blob end */}
      </div>
      {/* Navigation Panel Right end */}

      {/* Page Home */}
      <div className="upper-page" id="page-home">
        {/* Hero Background */}
        <div className="hero-fullscreen">
          <div className="hero-fullscreen-FIX">
            <div className="hero-bg">
              {/* Hero Slider Wrapper */}
              <div className="swiper-container-wrapper">
                {/* Swiper Container */}
                <div className="swiper-container">
                  {/* Swiper Wrapper */}
                  <div className="swiper-wrapper">
                    {/* Swiper Slider Item 1 */}
                    <div className="swiper-slide">
                      <div className="swiper-slide-inner" data-swiper-parallax="50%">
                        {/* Swiper Slider Item 1 Image */}
                        <div className="swiper-slide-inner-bg bg-img-1 overlay overlay-dark-70"></div>
                        {/* Swiper Slider Item 1 Text */}
                        <div className="swiper-slide-inner-txt">
                          {/* Social Icons */}
                          <div className="social-icons">
                            <ul>
                              <li>
                                <a className="ion-social-twitter" href="#"><span>Twitter</span></a>
                              </li>
                              <li>
                                <a className="ion-social-facebook" href="#"><span>Facebook</span></a>
                              </li>
                              <li>
                                <a className="ion-social-instagram" href="#"><span>Instagram</span></a>
                              </li>
                            </ul>
                          </div>
                          {/* Divider */}
                          <div className="divider-m-2"></div>
                          {/* Section Title */}
                          <h1 className="hero-heading hero-heading-true-bold-2">
                            Creativex
                          </h1>
                          {/* Divider */}
                          <div className="divider-m-2"></div>
                          {/* Section Subtitle */}
                          <h2>
                            Simplicity is complex
                          </h2>
                        </div>
                      </div>
                    </div>
                    {/* Swiper Slider Item 2 */}
                    <div className="swiper-slide">
                      <div className="swiper-slide-inner" data-swiper-parallax="50%">
                        {/* Swiper Slider Item 2 Image */}
                        <div className="swiper-slide-inner-bg bg-img-2 overlay overlay-dark-70"></div>
                        {/* Swiper Slider Item 2 Text */}
                        <div className="swiper-slide-inner-txt">
                          {/* Social Icons */}
                          <div className="social-icons">
                            <ul>
                              <li>
                                <a className="ion-social-twitter" href="#"><span>Twitter</span></a>
                              </li>
                              <li>
                                <a className="ion-social-facebook" href="#"><span>Facebook</span></a>
                              </li>
                              <li>
                                <a className="ion-social-instagram" href="#"><span>Instagram</span></a>
                              </li>
                            </ul>
                          </div>
                          {/* Divider */}
                          <div className="divider-m-2"></div>
                          {/* Section Title */}
                          <h1 className="hero-heading hero-heading-true-bold-2">
                            Creativex
                          </h1>
                          {/* Divider */}
                          <div className="divider-m-2"></div>
                          {/* Section Subtitle */}
                          <h2>
                            Design is a process
                          </h2>
                        </div>
                      </div>
                    </div>
                    {/* Swiper Slider Item 3 */}
                    <div className="swiper-slide">
                      <div className="swiper-slide-inner" data-swiper-parallax="50%">
                        {/* Swiper Slider Item 3 Image */}
                        <div className="swiper-slide-inner-bg bg-img-3 overlay overlay-dark-70">
                          {/* HTML5 Video */}
                          <video playsInline autoPlay muted loop>
                            <source src="https://www.11-76.com/html5-videos-22/creativex/creativex.mp4" type="video/mp4" />
                          </video>
                          {/* HTML5 Video end */}
                        </div>
                        {/* Swiper Slider Item 3 Text */}
                        <div className="swiper-slide-inner-txt">
                          {/* Social Icons */}
                          <div className="social-icons">
                            <ul>
                              <li>
                                <a className="ion-social-twitter" href="#"><span>Twitter</span></a>
                              </li>
                              <li>
                                <a className="ion-social-facebook" href="#"><span>Facebook</span></a>
                              </li>
                              <li>
                                <a className="ion-social-instagram" href="#"><span>Instagram</span></a>
                              </li>
                            </ul>
                          </div>
                          {/* Divider */}
                          <div className="divider-m-2"></div>
                          {/* Section Title */}
                          <h1 className="hero-heading hero-heading-true-bold-2">
                            Creativex
                          </h1>
                          {/* Divider */}
                          <div className="divider-m-2"></div>
                          {/* Section Subtitle */}
                          <h2>
                            Aesthetic is a decision
                          </h2>
                        </div>
                      </div>
                    </div>
                    {/* Swiper Slider Item 4 */}
                    <div className="swiper-slide">
                      <div className="swiper-slide-inner" data-swiper-parallax="50%">
                        {/* Swiper Slider Item 4 Image */}
                        <div className="swiper-slide-inner-bg bg-img-4 overlay overlay-dark-70"></div>
                        {/* Swiper Slider Item 4 Text */}
                        <div className="swiper-slide-inner-txt">
                          {/* Social Icons */}
                          <div className="social-icons">
                            <ul>
                              <li>
                                <a className="ion-social-twitter" href="#"><span>Twitter</span></a>
                              </li>
                              <li>
                                <a className="ion-social-facebook" href="#"><span>Facebook</span></a>
                              </li>
                              <li>
                                <a className="ion-social-instagram" href="#"><span>Instagram</span></a>
                              </li>
                            </ul>
                          </div>
                          {/* Divider */}
                          <div className="divider-m-2"></div>
                          {/* Section Title */}
                          <h1 className="hero-heading hero-heading-true-bold-2">
                            Creativex
                          </h1>
                          {/* Divider */}
                          <div className="divider-m-2"></div>
                          {/* Section Subtitle */}
                          <h2>
                            Style is everything
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Swiper Wrapper end */}
                </div>
                {/* Swiper Container end */}
              </div>
              {/* Hero Slider Wrapper end */}
              {/* Swiper Slider Controls */}
              <div className="hero-slider-bg-controls">
                <div className="swiper-slide-controls slide-prev">
                  <span>
                    <svg className="circle-svg" style={{ height:"50", width:"50"}}>
                      <circle className="circle" cx="25" cy="25" r="24"></circle>
                    </svg>
                  </span>
                  <div className="ion-ios-arrow-left"></div>
                </div>
                <div className="swiper-slide-controls slide-next">
                  <span>
                    <svg className="circle-svg" style={{ height:"50", width:"50"}}>
                      <circle className="circle" cx="25" cy="25" r="24"></circle>
                    </svg>
                  </span>
                  <div className="ion-ios-arrow-right"></div>
                </div>
              </div>
              {/* Swiper Slider Controls end */}
              {/* Swiper Slider Pagination */}
              <div className="swiper-slide-pagination"></div>
              {/* Swiper Slider Pagination end */}
              {/* Swiper Slider Play-Pause */}
              <div className="swiper-slide-controls-play-pause-wrapper swiper-slide-controls-play-pause slider-on-off">
                <div className="slider-on-off-switch">
                  <i className="ion-ios-play"></i>
                </div>
                {/* Swiper Slider Progress */}
                <div className="slider-progress-bar">
                  <span>
                    <svg className="circle-svg" style={{ height:"50", width:"50"}}>
                      <circle className="circle" cx="25" cy="25" r="24"></circle>
                    </svg>
                  </span>
                </div>
                {/* Swiper Slider Progress end */}
              </div>
              {/* Swiper Slider Play-Pause end */}
            </div>
          </div>
        </div>
        {/* Hero Background end */}
        {/* Scroll Indicator */}
        <div className="scroll-indicator scroll-indicator-hide">
          <div className="scroll-indicator-wrapper">
            <div className="scroll-line"></div>
          </div>
        </div>
        {/* Scroll Indicator end */}
      </div>
      {/* Page Home end */}
    </div>
  );
};

export default HeroSection;
