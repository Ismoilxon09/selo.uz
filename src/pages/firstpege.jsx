import React from 'react';
// import { Link } from 'react-router-dom';
import '../pages/sello.css';
import { Link } from 'react-router-dom';
const Firstpege = () => {
    return (
        <div>
            <header>
             <div className='header_div1'>
                <div className='header_div2'>
                    <div className='div1'><img src="https://sello.uz/images/logo.svg" alt="" /></div>
                    <div className='div2'><Link id='id2' to=""><i id='id3' class="fa-solid fa-bars"></i>Katalog</Link></div>
                    <div className='div3'>
                        <div className='div03'>
                            <input placeholder='Mahsulotlar boyicha qidirish' id='id03' type="text" />
                            <button id='id003'><i class="fa-solid fa-magnifying-glass"></i></button>
                        </div>
                    </div>
                    <div className='div4'></div>
                </div>
                <div className='header_div3'>
                    <div className='div5'> <Link>Chegirmalar</Link></div>
                    <div className='div6'> <Link>Elektronika</Link></div>
                    <div className='div7'> <Link>Bolalar mahsulotlari</Link></div>
                    <div className='div8'> <Link>Uy va bog'</Link></div>
                    <div className='div9'> <Link>Kiyim, poyabzal va aksessuarlar</Link></div>
                    <div className='div10'><Link>Kitoblar</Link></div>
                    <div className='div11'><Link>Brendlar</Link></div>
                    <div className='div12'><Link>Brendlar</Link></div>
                </div>
             </div>
              <div className='header_div4'>
                <div className='header_div5'><img id='img' src="https://sello.uz/_next/image?url=https%3A%2F%2Fstatic.sello.uz%2Funsafe%2F750x310%2Fhttps%3A%2F%2Fstatic.sello.uz%2F%2Ffm%2F20240726%2Fc12a9c164bb443f172285b3d6d11eac5.png&w=750&q=75" alt="" /></div>
                <div className='header_div6'><img id='img1' src="https://sello.uz/images/banner/r2-banner-uz.png" alt="" /></div>
              </div>
            </header>

            <main>
                <div className='div21'>
                    <div className='div22'></div>
                    <div className='div23 row d-flex'>
                        <div className='div24 xl-2 bg-warning'></div>
                        <div className='div24 xl-2 bg-danger'></div>
                        <div className='div24 xl-2 bg-success'></div>
                        <div className='div24 xl-2 bg-secondary'></div>
                        <div className='div24 xl-2 bg-primary'></div>
                        <div className='div24 xl-2 bg-danger'></div>
                    </div>
                </div>
                <div className='div21'>
                    <div className='div22'></div>
                    <div className='div23 row d-flex'>
                        <div className='div24 xl-2 bg-warning'></div>
                        <div className='div24 xl-2 bg-danger'></div>
                        <div className='div24 xl-2 bg-success'></div>
                        <div className='div24 xl-2 bg-secondary'></div>
                        <div className='div24 xl-2 bg-primary'></div>
                        <div className='div24 xl-2 bg-danger'></div>
                    </div>
                </div>
                <div className='div032'>
                  <div className='div31'>
                    <div className='div32'><Link><img id='id01' src="https://static.sello.uz/unsafe/x400/https://static.sello.uz/fm/20240620/cfcf0bd814b941faf1ea431cdf5c47cb.png" alt="" /></Link></div>
                    <div className='div33'><Link><img id='id02' src="https://static.sello.uz/unsafe/x400/https://static.sello.uz/fm/20240715/bb34d1d7eb1c7dba2642818fe0945414.png" alt="" /></Link></div>
                  </div>
                </div>
            </main>

            <footer>

            </footer>
           {/* <Link to="/seconpage">Ikkinchi sahifa</Link> */}
        </div>
    );
}

export default Firstpege;
