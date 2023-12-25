import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Finbest</title>
        <meta name="description" content="Description of the website" />
        <meta property="og:title" content="Finbest" />
        <meta property="og:description" content="Description of the website" />
      </Helmet>
      <div className="home-header">
        <div className="home-heading">
          <div id="notifcation" className="home-notification"></div>
          <Navbar></Navbar>
        </div>
        <div className="home-hero">
          <div className="home-images">
            <div className="home-column">
              <img
                alt="pastedImage"
                src="/pastedimage-oy26-300w.png"
                className="home-pasted-image"
              />
            </div>
            <div className="home-column1">
              <img
                alt="pastedImage"
                src="/pastedimage-v31-600h.png"
                className="home-pasted-image1"
              />
              <img
                alt="pastedImage"
                src="/pastedimage-c39.svg"
                className="home-pasted-image2"
              />
            </div>
            <div className="home-column2">
              <img
                alt="pastedImage"
                src="/pastedimage-iqnj.svg"
                className="home-pasted-image3"
              />
              <img
                alt="pastedImage"
                src="/pastedimage-06e.svg"
                className="home-pasted-image4"
              />
            </div>
          </div>
          <div className="home-content">
            <h1 className="home-title">
              <span className="home-text">Create Forms, Like Never Before</span>
              <br></br>
            </h1>
            <span className="home-caption">
              Events, Survey or Quiz We got you covered
            </span>
            <div className="home-hero-buttons">
              <div className="home-ios-btn">
                <span className="home-caption1">Get Started</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-products">
        <h1 className="home-text02">Forms For All Your Needs</h1>
        <span className="home-text03">
          <span>Setup and publish in just simple clicks</span>
          <br></br>
        </span>
        <div className="home-container01">
          <div className="home-step">
            <div className="home-container02">
              <div className="home-line"></div>
              <div className="home-container03">
                <svg viewBox="0 0 1024 1024" className="home-icon">
                  <path d="M634 558q92-64 92-174 0-88-63-151t-151-63-151 63-63 151q0 46 27 96t65 78l36 26v98h172v-98zM512 86q124 0 211 87t87 211q0 156-128 244v98q0 18-12 30t-30 12h-256q-18 0-30-12t-12-30v-98q-128-88-128-244 0-124 87-211t211-87zM384 896v-42h256v42q0 18-12 30t-30 12h-172q-18 0-30-12t-12-30z"></path>
                </svg>
              </div>
              <div className="home-line1"></div>
            </div>
            <div className="home-container04">
              <h1 className="home-text06">Survey Form</h1>
            </div>
          </div>
          <div className="home-step1">
            <div className="home-container05">
              <div className="home-line2"></div>
              <div className="home-container06">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M746 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM618 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM406 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM278 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM512 128q158 0 271 100t113 242q0 88-63 150t-151 62h-74q-28 0-46 19t-18 45q0 22 16 42t16 44q0 28-18 46t-46 18q-160 0-272-112t-112-272 112-272 272-112z"></path>
                </svg>
              </div>
              <div className="home-line3"></div>
            </div>
            <div className="home-container07">
              <h1 className="home-text07">Feedback Form</h1>
            </div>
          </div>
          <div className="home-step2">
            <div className="home-container08">
              <div className="home-line4"></div>
              <div className="home-container09">
                <svg viewBox="0 0 1024 1024" className="home-icon04">
                  <path d="M576 736l96 96 320-320-320-320-96 96 224 224z"></path>
                  <path d="M448 288l-96-96-320 320 320 320 96-96-224-224z"></path>
                </svg>
              </div>
              <div className="home-line5"></div>
            </div>
            <div className="home-container10">
              <h1 className="home-text08">Quiz</h1>
            </div>
          </div>
          <div className="home-step3">
            <div className="home-container11">
              <div className="home-line6"></div>
              <div className="home-container12">
                <svg viewBox="0 0 1024 1024" className="home-icon07">
                  <path d="M480 64c-265.096 0-480 214.904-480 480 0 265.098 214.904 480 480 480 265.098 0 480-214.902 480-480 0-265.096-214.902-480-480-480zM751.59 704c8.58-40.454 13.996-83.392 15.758-128h127.446c-3.336 44.196-13.624 87.114-30.68 128h-112.524zM208.41 384c-8.58 40.454-13.996 83.392-15.758 128h-127.444c3.336-44.194 13.622-87.114 30.678-128h112.524zM686.036 384c9.614 40.962 15.398 83.854 17.28 128h-191.316v-128h174.036zM512 320v-187.338c14.59 4.246 29.044 11.37 43.228 21.37 26.582 18.74 52.012 47.608 73.54 83.486 14.882 24.802 27.752 52.416 38.496 82.484h-155.264zM331.232 237.516c21.528-35.878 46.956-64.748 73.54-83.486 14.182-10 28.638-17.124 43.228-21.37v187.34h-155.264c10.746-30.066 23.616-57.68 38.496-82.484zM448 384v128h-191.314c1.88-44.146 7.666-87.038 17.278-128h174.036zM95.888 704c-17.056-40.886-27.342-83.804-30.678-128h127.444c1.762 44.608 7.178 87.546 15.758 128h-112.524zM256.686 576h191.314v128h-174.036c-9.612-40.96-15.398-83.854-17.278-128zM448 768v187.34c-14.588-4.246-29.044-11.372-43.228-21.37-26.584-18.74-52.014-47.61-73.54-83.486-14.882-24.804-27.75-52.418-38.498-82.484h155.266zM628.768 850.484c-21.528 35.876-46.958 64.746-73.54 83.486-14.184 9.998-28.638 17.124-43.228 21.37v-187.34h155.266c-10.746 30.066-23.616 57.68-38.498 82.484zM512 704v-128h191.314c-1.88 44.146-7.666 87.040-17.28 128h-174.034zM767.348 512c-1.762-44.608-7.178-87.546-15.758-128h112.524c17.056 40.886 27.344 83.806 30.68 128h-127.446zM830.658 320h-95.9c-18.638-58.762-44.376-110.294-75.316-151.428 42.536 20.34 81.058 47.616 114.714 81.272 21.48 21.478 40.362 44.938 56.502 70.156zM185.844 249.844c33.658-33.658 72.18-60.932 114.714-81.272-30.942 41.134-56.676 92.666-75.316 151.428h-95.898c16.138-25.218 35.022-48.678 56.5-70.156zM129.344 768h95.898c18.64 58.762 44.376 110.294 75.318 151.43-42.536-20.34-81.058-47.616-114.714-81.274-21.48-21.478-40.364-44.938-56.502-70.156zM774.156 838.156c-33.656 33.658-72.18 60.934-114.714 81.274 30.942-41.134 56.678-92.668 75.316-151.43h95.9c-16.14 25.218-35.022 48.678-56.502 70.156z"></path>
                </svg>
              </div>
              <div className="home-line7"></div>
            </div>
            <div className="home-container13">
              <h1 className="home-text09">Event Form</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="home-sections">
        <div className="home-section">
          <div className="home-content1">
            <h2 className="home-text10">Form With Benifit</h2>
            <div className="home-highlight">
              <span className="home-text11">Form Better Than Tinder </span>
              <span className="home-text12">
                Helps you connect with participants who attendeted the event
                with you
              </span>
            </div>
            <div className="home-highlight1">
              <span className="home-text13">
                Create Profile For More Connections
              </span>
              <span className="home-text14">
                Create You proifle add social media links to get noticed.
              </span>
            </div>
            <Link to="/" className="home-navlink">
              <div className="home-get-started">
                <span className="home-sign-up">Get started now</span>
              </div>
            </Link>
          </div>
          <div className="home-image">
            <div className="home-image-highlight">
              <span className="home-text15">
                <span>
                  always know your in and out
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
        <div className="home-section1">
          <div className="home-image1"></div>
          <div className="home-content2">
            <div className="home-heading1">
              <h2 className="home-text18">Smooth &amp; Engaging Interaction</h2>
              <span className="home-text19">
                Form that are interactive tends to receive more responses
              </span>
            </div>
            <div className="home-content3">
              <div className="home-points">
                <div className="home-point">
                  <div className="home-check">
                    <svg viewBox="0 0 1024 1024" className="home-icon09">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                  </div>
                  <span className="home-text20">Custom Design</span>
                </div>
                <div className="home-point1">
                  <div className="home-check1">
                    <svg viewBox="0 0 1024 1024" className="home-icon11">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                  </div>
                  <span className="home-text21">Interactive Screens</span>
                </div>
                <div className="home-point2">
                  <div className="home-check2">
                    <svg viewBox="0 0 1024 1024" className="home-icon13">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                  </div>
                  <span className="home-text22">Professional Dashboard</span>
                </div>
              </div>
              <Link to="/" className="home-navlink1">
                <div className="home-get-started1">
                  <span className="home-sign-up1">Get started now</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="home-banner-container">
        <div className="home-banner">
          <div className="home-overlay">
            <span className="home-text23">
              Get Out Of Boring Forms. Create Forms That Stands Out
            </span>
            <div className="home-book-btn">
              <span className="home-text24">Create Now</span>
            </div>
          </div>
          <img
            alt="pastedImage"
            src="/pastedimage-ylke.svg"
            className="home-pasted-image5"
          />
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default Home
