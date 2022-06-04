import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Samurai</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     
      <nav className="navbar navbar-expand-lg bg-transparent  position-absolute left-right-0 " >
        <div className={` ${styles.cWidht} container pb-5`}>
        <Image className={styles.obfContain} src="/samurai-logo.png" alt="Vercel Logo" width={150} height={86} />
          <button className="navbar-toggler focusOutlineunset " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">
            <i className="fa fa-bars fs-25 text-white focusOutlineunset"></i>
            </span>
          
          </button>
          <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2">
              <li className="nav-item">
                <a className="nav-link text-uppercase fw-Normal text-white fs-4" aria-current="page" href="#">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase fw-Normal text-white fs-4" aria-current="page" href="#">Team</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase fw-Normal text-white fs-4" aria-current="page" href="#">Roadmap</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase fw-Normal text-white fs-4" aria-current="page" href="#">Q & A</a>
              </li>
            </ul>
           <div className={`${styles.bgButton} bgButton`}>
           <a href='#' className={`${styles.topButton} btn btn-outline-primary text-uppercase text-white`}  >connect wallet</a>
           </div>
          </div>
        </div>
      </nav>
      <div className={`${styles.bgTop11}`} style={{paddingTop: "15%"}}>
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


          <div className='text-center'>
            <h4 className='text-uppercase lh-sm text-white fw-normal fs-15 text-shadow-md'>
              Partner with one of the world's largest retailers 
              to showase your brand and products. </h4>
            <div className=' mt-5 dis-none'>
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
       <div className='text-center py-5'>
       <h1 className='fw-normal fs-1 text-white headtxt'>ABOUT US</h1>
        <p className='text-uppercase lh-lg text-white fs15 mx-md-20 fw-normal lh-lg'>
        Cyber Soldier is a collection of one-of-a-kind non-fungible tokens (NFTs) to attract casual and interested new collectors. NFTs of Cyber Soldiers are both aesthetic and instructive. We provide complete NFT collection launch services not limited to graphic design, web development, digital marketing and blockchain development. We help brands and artists all around the world design and launch their own successful NFT collection. At Cyber Soldier, we also provide our members with exclusive, one-on-one access to some of the most innovative wheel-workers in technology today, from experts in NFTs and cryptocurrencies to Web3 and marketing, among a host of others, through personal coaching sessions and Q&As.
           </p>
        <a href='#' className={`${styles.topButton} ${styles.bgButton} btn btn-outline-primary mx-3 fw-normal text-uppercase text-white`}>READ MORE
        <i className="fa fa-chevron-down mx-2 text-white"></i>
        </a>
       </div>

       <div className='py-5 d-none'>
         <div className=''>
       <div className="ratio ratio-16x9 mb-5">
        <iframe src="https://www.youtube.com/embed/zpOULjyy-" title="YouTube video"></iframe>
      </div>
      </div>
       </div>

          <div className='pb-5'>
            <h1 className={`${styles.animatedContent} text-center fw-normal fs-1 text-white mb-5 text-uppercase headtxt`}>ROAD MAP</h1>
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

            <div className="row text-center pb-5">
             
              <ul className="nav nav-pills justify-content-center flex-w-unset wowow" id="pills-tab" role="tablist">
                <li className="nav-item me-3rem" role="presentation">
                  <button className={`${styles.tabFocus} nav-link  p-0 bg-transparent border-0 `}  id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                  <p className='fw-normal fs-2 text-white text-uppercase lh-sm'>phase <br></br> 02</p>
                  <Image className={styles.obfContain} src="/v-3.png" alt="Vercel Logo" width={250} height={300} />
                  <img src='/cone.png' className='d-block text-center mx-auto cone h-40px' />
                  </button>
                </li>
                <li className="nav-item me-3rem" role="presentation">
                  <button className={`${styles.tabFocus}  nav-link active p-0 bg-transparent border-0`} id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                  <p className='fw-normal fs-2 text-white text-uppercase lh-sm'>phase <br></br> 01</p>
                  <Image className={styles.obfContain} src="/v-2.png" alt="Vercel Logo" width={250} height={300} />
                  <img src='/cone.png' className='d-block text-center mx-auto cone h-40px' />
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className={`${styles.tabFocus}  nav-link p-0 bg-transparent border-0`} id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                  <p className='fw-normal fs-2 text-white text-uppercase lh-sm'>phase <br></br> 03</p>
                  <Image className={styles.obfContain} src="/v-1.png" alt="Vercel Logo" width={250} height={300} />
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
                  Gathering Information and collaboration with other Communities of Metaverse Land Gaming and establishing honorary NFT’s for every holders 
                 </p>

                  </div>
                <div className={` ${styles.bgTabContent}  tab-pane fade text-white  p-5 fs13 text-start `} id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                Merchandise for community like high quality collectables and toys. Introduction to Cyber Samurai and empowering potential earning. 
This one is going to be unique! And the winners will be paid handsomely. Participants will be added to our whitelist for future drops.

                </div>
              </div>
            </div>


          </div>


  
          <div className='py-5'>
          <h1 className='text-center fw-normal fs-1 text-white mb-5 text-uppercase headtxt'>Team member</h1>
          <div className= "col-lg-12 col-12 text-center">
          {/* <div className='d-flex justify-content-center' style={{ justifyContent: 'flex-end'}}>
          <Image className={styles.obfContain}  src="/banner-05.png" alt="Vercel Logo" width={160} height={300} />
          <Image className={styles.obfContain} src="/banner-06.png" alt="Vercel Logo" width={170} height={300} />
          <Image className={styles.obfContain} src="/banner-03.png" alt="Vercel Logo" width={200} height={600} />
          <Image className={styles.obfContain} src="/banner-04.png" alt="Vercel Logo" width={200} height={300} />
          <Image className={styles.obfContain} src="/banner-02.png" alt="Vercel Logo" width={160} height={300} />

         



          </div> */}
          <div className='bg-video position-relative'>
          <Image className={styles.obfContain}  src="/team.png" alt="Vercel Logo" width={1500} height={900} />
          

          <section class="ag-smoke-block">
    <div class="ag-smoke-1"><img src="/bluemoke.png" /></div>
    <div class="ag-smoke-1 ag-smoke__delay-1"><img src="/pinkmoke.png" /></div>
    <div class="ag-smoke-1 ag-smoke__delay-2"><img src="/pinkmoke.png" /></div>
    <div class="ag-smoke-2"><img src="/pinkmoke.png"/></div>
    <div class="ag-smoke-2 ag-smoke__delay-1"><img src="/pinkmoke.png" /></div>
    <div class="ag-smoke-2 ag-smoke__delay-2"><img src="/bluemoke.png"/></div>
    <div class="ag-smoke-3"><img src="/bluemoke.png"/></div>
    <div class="ag-smoke-3 ag-smoke__delay-1"><img src="/pinkmoke.png" /></div>
    <div class="ag-smoke-3 ag-smoke__delay-2"><img src="/bluemoke.png" /></div>
    <div class="ag-smoke-4 ag-smoke__delay-1"><img src="/bluemoke.png" /></div>
    <div class="ag-smoke-4 ag-smoke__delay-2"><img src="/bluemoke.png" /></div>

    <div class="ag-format-container">

    </div>
  </section>


          </div>
         
          </div>

          </div>

          <div className='pb-5 mb-5'>
            <h1 className='text-center fs-1 fw-normal  text-white mb-5 text-uppercase headtxt'>Q & A</h1>
            <div className='col-lg-12 col-12'>
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
            <div className='col-lg-12 col-12 text-center'>
              <Image className={styles.obfContain} src="/samurai-logo.png" alt="Vercel Logo" width={150} height={46} />
            </div>
            <nav className="navbar navbar-expand-lg bg-transparent">
              <div className={` ${styles.cWidht} container `}>
                <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
                  <ul className="navbar-nav m-auto mb-2 mb-lg-0">
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
  )
}