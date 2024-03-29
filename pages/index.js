import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {

  return (
    <>

      <div>
        <Head>
          <title>CyberSoldier</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <nav className="navbar py-0 navbar-expand-lg bg-transparent  position-absolute left-right-0 "  >
          <div className={` ${styles.cWidht} container py-0`}>
            <img className="header-logo" src="/white-logo-png.png" alt="Vercel Logo" />
            <button className="navbar-toggler focusOutlineunset " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon">
                <i className="fa fa-bars fs-25 text-white focusOutlineunset"></i>
              </span>

            </button>
            <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
              <ul className="navbar-nav m-auto mb-2">
                <li className="nav-item">
                  <a className="nav-link text-uppercase fw-Normal text-white fs-4" aria-current="page" href="#about-us">About Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-uppercase fw-Normal text-white fs-4" aria-current="page" href="#team">Team</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-uppercase fw-Normal text-white fs-4" aria-current="page" href="#roadmap">Roadmap</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-uppercase fw-Normal text-white fs-4" aria-current="page" href="#q-and-a">Q & A</a>
                </li>
              </ul>
              <div className={`${styles.bgButton} bgButton `}>
                <a href='#' className={`${styles.topButton} btn btn-outline-primary text-uppercase text-white`}  >connect wallet</a>
              </div>
            </div>
          </div>
        </nav>
        <div className={`${styles.bgTop11}`} >
          <div className={`${styles.cWidht} container pt-5 row-reverse`}>
            <div className={`${styles.displayGrid} ${styles.iconList} mar-b-5`}>
              <a className='text-center '>
                <i className='fa fa-facebook  '></i>
              </a>
              <a className='text-center'>
                <i className='fa fa-instagram '></i>
              </a>
              <a className='text-center'>
                <i className='fa fa-twitter  '></i>
              </a>
              <a className='text-center'>
                <i className='fab fa-discord  '></i>
              </a>
            </div>


            <div className='text-center mt-3'>
              <h4 className='text-uppercase lh-sm text-white fw-normal fs15 text-shadow-md px-md-5'>
                10,000 programmatically generated Soldiers built a utopia in the Metaverse! Each Soldier is unique and 1 of over a billion possible combinations
              </h4>
              <div className='py-3 dis-none'>
                <a href='#' className={`${styles.topButton} ${styles.bgButton} btn btn-outline-primary mx-3 fw-normal text-uppercase text-white`}>
                  <i className='fab fa-discord me-2'></i>JOIN DISCORD
                </a>
                <a href='#' className={`${styles.topButton} ${styles.bgButton} btn btn-outline-primary mx-3 fw-normal text-uppercase text-white`} >
                  <i className="fa fa-twitter me-2"></i>FOLLOW TWITTER
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bgBody1}>
          <div className={`${styles.cWidht} container py-5`}>
            <div className='text-left py-md-5 row'>
              <div className='col-md-12 py-md-5 py-3'>
                <h1 className='text-left fw-normal fs-1 text-white headtxt' id='about-us' data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="100">ABOUT US</h1>
                {/* <p className='text-uppercase lh-lg text-white fs15 mx-md-20 fw-normal lh-lg'>
        The only constant in the NFT space is change. Things change fast and we must adapt quickly to be able to survive and thrive in this space. This roadmap is no different. Our goal is to give you an idea of our current plans and we've considered feasibility of every element we've currently included in this plan, but we will change and adapt as the space changes. What will not change is our constant efforts to be transparent and open with our community members; that is a constant you can count on
           </p> */}
                <p className='text-uppercase mb-0 lh-lg text-white fs15 mx--20 fw-normal lh-lg' data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="100">

                  Each Soldier is a key to a community of crypto enthusiasts sharing their love and knowledge of all things NFT and DeFi.
                </p>
                <p className='text-uppercase lh-lg text-white fs15 mx--20 fw-normal lh-lg' data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="150">

                  Cyber Soldiers are ERC-721 tokens hosted on IPFS and each one is randomly generated in an auditable, fair process.
                </p>
                <a href='#' className={`${styles.topButton} ${styles.bgButton} btn btn-outline-primary mx-3 fw-normal text-uppercase text-white d-none`} data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="100">READ MORE
                  <i className="fa fa-chevron-down mx-2 text-white"></i>
                </a>
              </div>
            </div>
          </div>
          <div className={`container py-5 d-none`}>
            <div className='text-centr py-5 row'>
              <div className='col-md-12'>
                <div className='py-5 '>
                  <div className=''>
                    <div className="ratio ratio-16x9 mb-5">
                      <iframe src="https://www.youtube.com/embed/zpOULjyy-" title="YouTube video"></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>




          <div className={`container py-md-3 py-2`}>

            <div className='pb-md-5 pb-3'>
              <h1 className={`${styles.animatedContent} text-left fw-normal fs-1 text-white mb-5 text-uppercase headtxt`} id='roadmap' data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="100" >ROAD MAP</h1>
              {/* <div className="row text-center pb-5 d-none">
              <div className="col-lg-4 ">
                <p className='fw-normal fs-2 text-white text-uppercase lh-sm'>phase <br></br> 01</p>
              <Image className={styles.obfContain} src="/v-3.png" alt="Vercel Logo" width={250} height={300} />
              </div>
              <div className="col-lg-4">
              <p className='fw-normal fs-2 text-white text-uppercase lh-sm'>phase <br></br> 0222</p>
              <Image className={styles.obfContain} src="/v-2.png" alt="Vercel Logo" width={250} height={300} />
              </div>
              <div className="col-lg-4">
              <p className='fw-normal fs-2 text-white text-uppercase lh-sm'>phase <br></br> 03</p>
              <Image className={styles.obfContain} src="/v-1.png" alt="Vercel Logo" width={250} height={300} />
              </div>
            </div> */}
              <p className='text-uppercase text-left lh-lg text-white fs15 mx--20 fw-normal lh-lg' data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="100">

                The only constant in the NFT space is change. Things change fast and we must adapt quickly to be able to survive and thrive in this space. This roadmap is no different. Our goal is to give you an idea of our current plans and we've considered feasibility of every element we've currently included in this plan, but we will change and adapt as the space changes. What will not change is our constant efforts to be transparent and open with our community members; that is a constant you can count on
              </p>
              <div className="row text-center pb-md-5 d-none">

                <ul className="nav nav-pills justify-content-center flex-w-unset wowow" id="pills-tab" role="tablist">
                  <li className="nav-item me-3rem" role="presentation">
                    <button className={`${styles.tabFocus} nav-link  p-0 bg-transparent border-0 `} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                      <p className='fw-normal fs-2 text-white text-uppercase lh-sm' data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="100">phase <br></br> 02</p>
                      <Image className={styles.obfContain} src="/v-3.png" alt="Vercel Logo" width={280} height={280} />
                      <img src='/cone.png' className='d-block text-center mx-auto cone h-40px' />
                    </button>
                  </li>
                  <li className="nav-item me-3rem" role="presentation">
                    <button className={`${styles.tabFocus}  nav-link active p-0 bg-transparent border-0`} id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                      <p className='fw-normal fs-2 text-white text-uppercase lh-sm' data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="100">phase <br></br> 01</p>
                      <Image className={styles.obfContain} src="/v-2.png" alt="Vercel Logo" width={280} height={280} />
                      <img src='/cone.png' className='d-block text-center mx-auto cone h-40px' />
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className={`${styles.tabFocus}  nav-link p-0 bg-transparent border-0`} id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                      <p className='fw-normal fs-2 text-white text-uppercase lh-sm' data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="100">phase <br></br> 03</p>
                      <Image className={styles.obfContain} src="/v-1.png" alt="Vercel Logo" width={280} height={280} />
                      <img src='/cone.png' className='d-block text-center mx-auto cone h-40px' />
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div className={` ${styles.bgTabContent}  tab-pane fade  text-white p-5 fs13 text-start `} id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    Groundwork of Pre sale and Public mint as per White List specification
                  </div>
                  <div className={` ${styles.bgTabContent}  tab-pane fade show active text-start text-white cus-style `} id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <p className="text-start">
                      Gathering Information and collaboration with other Communities of Metaverse Land Gaming and establishing honorary NFTâ€™s for every holders
                    </p>

                  </div>
                  <div className={` ${styles.bgTabContent}  tab-pane fade text-white  p-5 fs13 text-start `} id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                    Merchandise for community like high quality collectables and toys. Introduction to Cyber Samurai and empowering potential earning.
                    This one is going to be unique! And the winners will be paid handsomely. Participants will be added to our whitelist for future drops.

                  </div>
                </div>
              </div>


            </div>



            <div className={`container py-5 utilities`}>
              <div className='row'>
                <div className='col-md-12'>
                  <h1 className={`${styles.animatedContent} text-center fw-normal fs-1 text-white mb-5 text-uppercase headtxt`} id='roadmap' data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="100">Cyber Soldier Utility</h1>
                </div>

                <div className="col-md-4 my-3" data-aos="fade-up-right">
                  <div className="card ">
                    <h6 className="UPBOLTERS text-uppercase">Be part of the world’s loudest NFT community </h6>
                    <p>
                      When you join the Cyber Soldier - by purchasing an NFT or just joining our Discord -
                      you’re instantly part of our community. A global community that empowers and supports
                      each other on this exciting journey into Web 3.0.
                      We’re focused on building authentic connections as we delve into the metaverse together.
                    </p>
                  </div>
                </div>

                <div className="col-md-4 my-3" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="100">
                  <div className="card ">
                    <h6 className="UPBOLTERS text-uppercase">Access monthly
                      Rewards</h6>
                    <p>
                      As a Cyber Soldier NFT holder, you automatically gain access to our exclusive Rewards program which rewards you
                      for participating in the community.
                      Our program will continuously evolve as we look at new ways to reward our members with additional benefits.
                    </p>
                  </div>
                </div>

                <div className="col-md-4 my-3" data-aos="fade-up-left">
                  <div className="card ">
                    <h6 className="UPBOLTERS text-uppercase">Explore the
                      Metaverse with us</h6>
                    <p>
                      At Cyber Soldier, we are committed to exploring all the possibilities of the metaverse.
                      By joining the community, you will have access to every metaverse we enter.
                      Plus, there will be additional perks within our metaverse Private land for Cyber Soldier NFT holders.
                    </p>
                  </div>
                </div>


                <div className="col-md-4 my-3" data-aos="fade-up-right">
                  <div className="card ">
                    <h6 className="UPBOLTERS text-uppercase">Own the full
                      commercial rights </h6>
                    <p>
                      When you purchase a Cyber Soldier NFT, the art is totally and completely yours.
                      Whether you want to print and sell merchandise, use it in advertising,
                      or want it to be the star of its own show!
                    </p>
                  </div>
                </div>


                <div className="col-md-4 my-3" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="100">
                  <div className="card ">
                    <h6 className="UPBOLTERS text-uppercase">Have a voice in
                      the project </h6>
                    <p>
                      Cyber Soldier gives you a voice in the development and success
                      of the project through AMAs with the dev team and formalised voting systems.
                    </p>
                  </div>
                </div>


                <div className="col-md-4 my-3" data-aos="fade-up-left">
                  <div className="card ">
                    <h6 className="UPBOLTERS text-uppercase">Receive
                      Airdrops </h6>
                    <p>
                      As a Cyber Soldier NFT holder, you'll be eligible for future airdrops of tokens and other prizes.
                    </p>
                  </div>
                </div>
              </div>
            </div>



            <div className='py-5'>
              <h1 className='text-center fw-normal fs-1 text-white mb-5 text-uppercase headtxt' id='team' data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="100">Team member</h1>
              <div className="col-lg-12 col-12 text-center">

                <div className='bg-video position-relative overflow-visible'>
                  {/* <Image className={styles.obfContain}  src="/team.png" alt="Vercel Logo" width={1500} height={900} /> */}
                  <div className='d-flex align-items-end justify-content-center sm-relative' style={{ justifyContent: 'flex-end' }}>
                    <div className='imgHover margin-minus-right position-relative'>
                      <img className='cw-width' style={{ marginLeft: 0, }} src="/banner-05.png" alt="Vercel Logo" width={220} height={600} data-aos="fade-right" data-aos-anchor-placement="right-right" data-aos-delay="500" />
                      <div className='imgTxt characterTab position-absolute w-350 c-md-left1 text-start  text-uppercase'>
                        <p className="text-light opacity-25 fs-14 mb-0">Development Team</p>
                        <h4 className='text-white fs-4 UPBOLTERS'>
                         Elite Blue Technologies
                        </h4>
                        <p className='text-white fs-10 text-start mb-2'>
                        is a group of driven engineers and strategists dedicated to creating mission-critical software solutions.
                        </p>
                        <div className="icons">
                          <a href="https://www.facebook.com/elitebluetechnologies" target="_blank">   <i class="fa-brands fa-facebook-square mx-1"></i></a>
                          <a href="https://www.instagram.com/elitebluetechnologies/" target="_blank">   <i class="fa-brands fa-instagram-square mx-1"></i></a>
                          <a href="https://twitter.com/EliteBlueTechn1" target="_blank">   <i class="fa-brands fa-twitter-square mx-1"></i></a>
                        </div>
                      </div>
                    </div>
                    <div className='imgHover margin-minus-right position-relative'>
                      <img className='cw-width' style={{ marginLeft: 0 }} src="/banner-06.png" alt="Vercel Logo" width={220} height={600} data-aos="fade-right" data-aos-anchor-placement="right-right" data-aos-delay="250" />
                      <div className='imgTxt characterTab position-absolute w-350 c-md-left2 text-start  text-uppercase'>
                        <p className="text-light opacity-25 fs-14 mb-0">Artist</p>
                        <h4 className='text-white fs-4 UPBOLTERS'>
                          Soldier 2
                        </h4>
                        <p className='text-white fs-10 text-start mb-2'>
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, ullam?
                        </p>
                        <div className="icons">
                          <a href="https://facebook.com" target="_blank">   <i class="fa-brands fa-facebook-square mx-1"></i></a>
                          <a href="https://instagram.com" target="_blank">   <i class="fa-brands fa-instagram-square mx-1"></i></a>
                          <a href="https://twitter.com" target="_blank">   <i class="fa-brands fa-twitter-square mx-1"></i></a>
                        </div>
                      </div>
                    </div>
                    <div className='imgHover  position-relative '>
                      <img className='cw-m-img' src="/banner-03.png" alt="Vercel Logo" width={300} height={600} data-aos="zoom-out-up" />
                      <div className='imgTxt characterTab position-absolute w-350 c-md-left3 text-start  text-uppercase'>
                        <p className="text-light opacity-25 fs-14 mb-0">Founder</p>
                        <h4 className='text-white fs-4 UPBOLTERS'>
                          Soldier 3
                        </h4>
                        <p className='text-white fs-10 text-start mb-2'>
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, ullam?
                        </p>
                        <div className="icons">
                          <a href="https://facebook.com" target="_blank">   <i class="fa-brands fa-facebook-square mx-1"></i></a>
                          <a href="https://instagram.com" target="_blank">   <i class="fa-brands fa-instagram-square mx-1"></i></a>
                          <a href="https://twitter.com" target="_blank">   <i class="fa-brands fa-twitter-square mx-1"></i></a>
                        </div>
                      </div>
                    </div>

                    <div className='imgHover margin-minus-left position-relative'>
                      <img className='cw-width' style={{ marginLeft: 0 }} src="/banner-04.png" alt="Vercel Logo" data-aos="fade-left" data-aos-anchor-placement="left-left" data-aos-delay="250" />
                      <div className='imgTxt characterTab position-absolute w-350 c-md-left4 text-start  text-uppercase'>
                        <p className="text-light opacity-25 fs-14 mb-0">Co-Founder</p>
                        <h4 className='text-white fs-4 UPBOLTERS'>
                          Soldier 4
                        </h4>
                        <p className='text-white fs-10 text-start mb-2'>
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, ullam?
                        </p>
                        <div className="icons">
                          <a href="https://facebook.com" target="_blank">   <i class="fa-brands fa-facebook-square mx-1"></i></a>
                          <a href="https://instagram.com" target="_blank">   <i class="fa-brands fa-instagram-square mx-1"></i></a>
                          <a href="https://twitter.com" target="_blank">   <i class="fa-brands fa-twitter-square mx-1"></i></a>
                        </div>
                      </div>
                    </div>

                    <div className='imgHover margin-minus-left position-relative'>
                      <img className='cw-width' style={{ marginLeft: 0, }} src="/banner-02.png" alt="Vercel Logo" width={220} height={600} data-aos="fade-left" data-aos-anchor-placement="left-left" data-aos-delay="500" />
                      <div className='imgTxt characterTab position-absolute w-350 c-md-left5 text-start  text-uppercase'>
                        <p className="text-light opacity-25 fs-14 mb-0">Co-Founder</p>
                        <h4 className='text-white fs-4 UPBOLTERS'>
                          Soldier 5
                        </h4>
                        <p className='text-white fs-10 text-start mb-2'>
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, ullam?
                        </p>
                        <div className="icons">
                          <a href="https://facebook.com" target="_blank">   <i class="fa-brands fa-facebook-square mx-1"></i></a>
                          <a href="https://instagram.com" target="_blank">   <i class="fa-brands fa-instagram-square mx-1"></i></a>
                          <a href="https://twitter.com" target="_blank">   <i class="fa-brands fa-twitter-square mx-1"></i></a>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* <section className="ag-smoke-block">
    <div className="ag-smoke-1"><img src="/bluemoke.png" /></div>
    <div className="ag-smoke-1 ag-smoke__delay-1"><img src="/pinkmoke.png" /></div>
    <div className="ag-smoke-1 ag-smoke__delay-2"><img src="/pinkmoke.png" /></div>
    <div className="ag-smoke-2"><img src="/pinkmoke.png"/></div>
    <div className="ag-smoke-2 ag-smoke__delay-1"><img src="/pinkmoke.png" /></div>
    <div className="ag-smoke-2 ag-smoke__delay-2"><img src="/bluemoke.png"/></div>
    <div className="ag-smoke-3"><img src="/bluemoke.png"/></div>
    <div className="ag-smoke-3 ag-smoke__delay-1"><img src="/pinkmoke.png" /></div>
    <div className="ag-smoke-3 ag-smoke__delay-2"><img src="/bluemoke.png" /></div>
    <div className="ag-smoke-4 ag-smoke__delay-1"><img src="/bluemoke.png" /></div>
    <div className="ag-smoke-4 ag-smoke__delay-2"><img src="/bluemoke.png" /></div>

    <div className="ag-format-container">

    </div>
  </section> */}


                </div>

              </div>

            </div>

            <div className='pb-5 mb-5' >
              <h1 className='text-center fs-1 fw-normal  text-white mb-5 text-uppercase headtxt' id='q-and-a'>Q & A</h1>
              <div className='col-lg-12 col-12' >
                <div className={`${styles.bgAccordin} accordin`} id="accordionExample">
                  <div className="accordion-item">
                    <h2 className={`${styles.focusOutlineunset} accordion-header `} id="headingOne">
                      <button className={`${styles.focusOutlineunset} ${styles.accordionButton} a-ques accordion-button bg-transparent fw-normal fs-5 text-white`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseafter" aria-expanded="true" aria-controls="collapseafter">
                        WHAT DO CYBER SOLDER HAS TO OFFER?
                      </button>
                    </h2>
                    <div id="collapseafter" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body text-white a-ans">
                        <ul className='list-style-none p-0'>
                          <li className='pb-2'>
                            We provide all of the services required to start an NFT collection. You can hire us to handle the graphic design, social media strategy, discord server, roadmap development, smart contract development, and, of course, website building for your collection.
                          </li>

                        </ul>

                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className={`${styles.focusOutlineunset} accordion-header `} id="headingOne">
                      <button className={`${styles.focusOutlineunset} ${styles.accordionButton} a-ques accordion-button bg-transparent fw-normal fs-5 text-white`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        WHAT EXACTLY IS AN NFT? WHAT DOES NFT REPRESENT?
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body text-white a-ans">
                        <ul className='list-style-none p-0'>
                          <li className='pb-2'>
                            Non-transferable token.
                          </li>
                          <li className='pb-2'>
                            That doesn't help things much.
                          </li>
                          <li>
                            Sorry about that. "Non-fungible" essentially indicates that it is one-of-a-kind and cannot be replaced. A bitcoin, for example, is fungible, meaning you can exchange one for another and get precisely the identical thing. However, a one-of-a-kind trade card is not fungible. You'd get something altogether different if you swapped it for a different card. You traded a Squirtle for a 1909 T206 Honus Wagner, dubbed "the Mona Lisa of baseball cards" by StadiumTalk. (I'm going to believe them.)
                          </li>
                        </ul>

                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className={`${styles.focusOutlineunset} accordion-header `} id="headingOne">
                      <button className={`${styles.focusOutlineunset} ${styles.accordionButton} a-ques accordion-button bg-transparent fw-normal fs-5 text-white`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        HOW DO NFTS FUNCTION?
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div className="accordion-body text-white a-ans">
                        Most NFTs are part of the Ethereum blockchain at a high level. Ethereum, like bitcoin and dogecoin, is a cryptocurrency, but its blockchain also enables these NFTs, which store additional information that allows them to function differently from, say, an ETH coin. It's worth mentioning that various blockchains can use NFTs in their own ways. (Some have already.)
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className={`${styles.focusOutlineunset} accordion-header `} id="headingOne">
                      <button className={`${styles.focusOutlineunset} ${styles.accordionButton} a-ques accordion-button bg-transparent fw-normal fs-5 text-white `} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        WHAT SHOULD YOU BUY IN THE NFT SUPERMARKET?
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div className="accordion-body text-white a-ans">
                        NFTs can be anything digital (drawings, music, even your brain being downloaded and transformed into an AI), but the current buzz is focused on exploiting the technology to sell digital art.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className={`${styles.focusOutlineunset} accordion-header `} id="headingOne">
                      <button className={`${styles.focusOutlineunset} ${styles.accordionButton} a-ques accordion-button bg-transparent fw-normal fs-5 text-white`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                        WHAT KIND OF UTILITY WILL MY NFT INCLUDE?
                      </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                      <div className="accordion-body text-white a-ans">
                        Your Cyber Soldier NFT will provide you access to Cyber SoldierLearn, our Next Generation Comprehensive Learning Platform. Future airdrops, WL alliances with other collections, and 1:1 collaborations with well-known digital artists are all available to Cyber Soldier owners.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className={`${styles.focusOutlineunset} accordion-header `} id="headingOne">
                      <button className={`${styles.focusOutlineunset} ${styles.accordionButton} a-ques accordion-button bg-transparent fw-normal fs-5 text-white`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
                        DO WE HAVE PERSONAL AND BUSINESS RIGHTS?
                      </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                      <div className="accordion-body text-white a-ans">
                        On the Ethereum Blockchain, each Cyber Soldier is an NFT. You entirely control the underlying Cyber Soldier when you buy an NFT. The smart contract and Ethereum network are solely responsible for NFT ownership. We may not seize, freeze, or otherwise alter the ownership of any Cyber Soldier at any time.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className={`${styles.focusOutlineunset} accordion-header `} id="headingOne">
                      <button className={`${styles.focusOutlineunset} ${styles.accordionButton} a-ques accordion-button bg-transparent fw-normal fs-5 text-white`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseThree">
                        WHAT ARE THE ROYALTY FEES FOR SECONDARY MARKET SALES?
                      </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                      <div className="accordion-body text-white a-ans">
                        A 6% Fee will be assessed
                        <ul className='list-style-none p-0'>
                          <li >
                            - 3% to the creators
                          </li>
                          <li>
                            - 3% to the community DAO
                          </li>
                        </ul>
                        Holders of Cyber Soldiers will have complete control over and voting rights over the distribution of these funds. Blue chip NFTs, Metaverse Land, ETH/BTC, Shitcoins, and other investments are common.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className={`${styles.focusOutlineunset} accordion-header `} id="headingOne">
                      <button className={`${styles.focusOutlineunset} ${styles.accordionButton} a-ques accordion-button bg-transparent fw-normal fs-5 text-white`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseThree">
                        WHAT SHOULD I DO IF I HAVE ADDITIONAL QUESTIONS?
                      </button>
                    </h2>
                    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                      <div className="accordion-body text-white a-ans">
                        Please join our discord or email us at info@CyberSoldier.com if you have any further questions.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <footer className='-5'>
              <div className='col-lg-12 col-12 text-center' >
                <Image className={styles.obfContain} src="/white-logo-png.png" alt="Vercel Logo" width={250} height={150} />
              </div>
              <nav className="navbar navbar-expand-lg bg-transparent">
                <div className={` ${styles.cWidht} container `}>
                  <div className="navbar-collapse text-center collapse text-center" id="">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0" >
                      <li className="nav-item">
                        <a className="nav-link text-uppercase fw-Normal text-white fs-6" aria-current="page" href="#">About Us</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-uppercase fw-Normal text-white fs-6" aria-current="page" href="#">Team</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-uppercase fw-Normal text-white fs-6" aria-current="page" href="#">Roadmap</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-uppercase fw-Normal text-white fs-6" aria-current="page" href="#">Q & A</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>

              <p className='m-0 text-white text-center fs-14 fw-300 '>
                &copy; Copyright 2022 | All Rights Reserved | Powered By <a href='https://eliteblue.net/'>Eliteblue Technologies</a>
              </p>
            </footer>

          </div>

        </div>
      </div>
    </>

  )
}