// Import Reactu
import { useState } from 'react'

// Import CSS souborů
import './App.css'
import "./mainContainer.css"
import "./landingPage.css"
import "./navbar.css"
import "./nabidka.css"
import "./kontakt.css"
import "./kdoJsme.css"
import "./povidani.css"

// Import komponent
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import NavigationBar from './NavigationBar'
import CarouselGallery from './CarouselGallery'
import { AddressMap } from './AddressMap'
import ShakeImage from './ShakeImage'






function App() {

  return (
    <div>
      <div id='mainContainer'>


        {/* ÚVODNÍ (MODRÁ) LANDING PAGE */}
        <div id='landingPage'>
          <div id='navbar'>
            <a href='#landingPage'><img id='logo' src='public/images/logo.jpg'/></a>
            <NavigationBar/>
          </div>
          <h1 id='onas'>kavárna Stará škola</h1>
          <p>- místo, kde se zastaví čas a oživí vzpomínky na nejlepší koláče od babičky -</p>
          <div id="kdoJsme">
            <CarouselGallery/>
            <div id='povidani'>
              <h2>Kdo jsme?</h2>
              <p>
                Jsme smíchovská kavárna Stará škola sídlící v budově první obecné školy na Smíchově a zaměstnávající seniory, kteří nechtějí v důchodu sedět doma,
                ale baví je pracovat a být mezi lidmi. Jsme sociálním podnikem, a každým šálkem kávy tak
                podpoříte provoz center pro seniory. Připravujeme zde výběrovou kávu a pečeme si tu vlastní
                buchty, koláče nebo bábovky. No, budete se u nás cítit přesně jako u babičky. A to nejen díky
                zmiňovaným dobrotám, ale také příjemnému nostalgickému prostředí.
              </p>
            </div>
          </div>
          <img id='dots1' src='public/images/dots1.png'/>
          <img id='dots2' src='public/images/dots2.png'/>
      </div>

      {/* SEKCE MENU (PINK) */}
      <div id='nabidka'>
                <div id='nadpis'>
                  <h3>Nabídka</h3>
                </div>
                <div id='kava' className='menu'>
                  <h4>Káva</h4>
                  <div className='ceny'>
                    <div className='left'>
                    <ul>
                        <li>espresso/lungo</li>
                        <li>double espresso</li>
                        <li>capuccino</li>
                        <li>cafe latte</li>
                        <li>flat white</li>
                        <li>filtrovaná káva</li>
                        <li>vídeňská káva</li>
                        <li>alžírská káva</li>
                        <li>turecká káva</li>
                      </ul>
                    </div>
                    <div className='right'>
                      <ul>
                        <li>50 Kč</li>
                        <li>65 Kč</li>
                        <li>65 Kč</li>
                        <li>75 Kč</li>
                        <li>75 Kč</li>
                        <li>65 Kč</li>
                        <li>70 Kč</li>
                        <li>75 Kč</li>
                        <li>50 Kč</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div id='caj' className='menu'>
                  <h4>Horké nápoje</h4>
                  <div className='ceny'>
                    <div className='left'>
                      <ul>
                        <li>čerstvý mátový čaj</li>
                        <li>čerstvý zázvorový čaj</li>
                        <li>sáčkový čaj</li>
                        <li>kakao</li>
                      </ul>
                    </div>
                    <div className='right'>
                      <ul>
                        <li>60 Kč</li>
                        <li>60 Kč</li>
                        <li>50 Kč</li>
                        <li>55 Kč</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div id='limo' className='menu'>
                  <h4>Studené nápoje</h4>
                  <div className='ceny'>
                    <div className='left'>
                      <ul>
                        <li>domácí limonáda</li>
                        <li>sodovka 0,1 l</li>
                        <li>mošt 0,1 l</li>
                        <li>bílé víno 0,1 l</li>
                        <li>červené víno 0,1 l</li>
                      </ul>
                    </div>
                    <div className='right'>
                      <ul>
                        <li>65 Kč</li>
                        <li>7 Kč</li>
                        <li>15 Kč</li>
                        <li>30 Kč</li>
                        <li>30 Kč</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div id="dort" className='menu'>
                    <h4>K zakousnutí</h4>
                    <p>Každý den pečeme nové dobroty.</p>
                </div>
                <div id='prostor'></div>
                <ShakeImage url={"public/images/pytel.png"} top={"50%"} left={"-20%"} width={"100px"} height={"100px"} className="shake pytel"/>
                <ShakeImage url={"public/images/beans.png"} top={"20%"} left={"70%"} width={"80px"} height={"80px"} className="shake beans"/>
                <ShakeImage url={"public/images/mocha.png"} top={"50%"} left={"95%"} width={"120px"} height={"120px"} className="shake mocha"/>
            </div>

            {/* SEKCE KONTAKT */}
              <div id="kontakt">
                <h2>Přijďte nás navštívit</h2>
                <div className='contactPage'>
                  <div className='contactCard'>
                    <div className='adresa'>
                      <p>Adresa:</p>
                      <p>Na Bělidle 34</p>
                      <p>150 00 Praha 5</p>
                    </div>
                    <div className='adresa'>
                      <p>Otevírací doba:</p>
                      <p>Po-Pá: 8:00 - 19:00</p>
                    </div>
                    <div className='adresa'>
                      <p>Kontakt:</p>
                      <div className='contactIcons'>
                        <a href='https://www.facebook.com/elpidaproseniory/' target='_blank'>
                          <FacebookIcon style={{ fontSize: 40 }} className='iconka'/>
                        </a>
                        <a href='https://www.instagram.com/staraskola_elpida/?hl=cs' target='_blank'>
                          <InstagramIcon style={{ fontSize: 40 }} className='iconka'/>
                        </a>
                        <a href='mailto:info@elpida.cz' target='_blank'>
                          <MailOutlineIcon style={{ fontSize: 40 }} className='iconka'/>
                        </a>
                      </div>
                    </div>
                  </div>
                  <AddressMap/>
                </div>
                {/* <img id='dots3' src='/src/images/dots3.png'/>
                <img id='dots4' src='/src/images/dots4.png'/> */}
                <p id='copyright'>© Tereza Chudějová 2024</p>
            </div>
      </div>
    </div>
  )
}

export default App
