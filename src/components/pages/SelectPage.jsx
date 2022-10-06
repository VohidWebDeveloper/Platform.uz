import React from 'react';
import tuit from '../image/tuit.png';
import mitc from '../image/mitc.png'
import { Link } from 'react-router-dom';

const SelectPage = () => {
    return (
        <div className='select-page'>
            <div className="container">
                <div className="page-title">
                    <div className="img-content d-flex">
                        <img src={tuit} alt="logo" />
                        <img src={mitc} alt="" />
                    </div>
                    <h3 className='logo-name  d-inline-block mx-auto'>O'zbekiston Respublikasi Axborot Texnologiyalari va kommunikatsiyalarini rivojlantirish vazirligi</h3>
                </div>
                <div className="select-content mx-auto">
                    {/* <div className="text-center card-header">
                        O'zingizga tegishli bo'lgan maktab yoki muassasani tanlang
                    </div>
                    <div className="select-option card-body">
                        <div className="left">
                            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                <option disabled selected>Maktablar</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="right">
                            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div> */}
                    <div class="card text-center">
                        <div class="card-header">
                            O'zingizga tegishli bo'lgan maktab yoki muassasani tanlang
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Yo'nalishlar</h5>
                            <div class="form-floating my-4">
                                <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                                    <option selected disabled>Open this select menu</option>
                                    <option value="1">Maktab</option>
                                    <option value="2">Tashkilot</option>
                                </select>
                                <label for="floatingSelectGrid">Yo'nalishingiz</label>
                            </div>
                            {/* <Link to={'/select/home'} class="btn btn-primary">Go somewhere</Link> */}
                        </div>
                        <Link to={'/home'} class="card-footer text-white text-muted btn btn-outline-dark outline-none border-none">
                            Yo'nalishga o'tish
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectPage;