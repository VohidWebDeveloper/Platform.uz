import React from 'react';

const PersonPage = () => {
    return (
        <>
            <div className="add border">
                <div className="title text-center p-4 border bg-primary text-white">
                    Ro'yhatdan o'tkazish
                </div>
                <div className="body p-4">
                    <div className="row mb-2">
                        <label className='form-label' htmlFor="tuman">Shahar / Tuman</label>
                        <select className='form-select' name="tuman" id="tuman">
                            <option value="1">Qarshi Shahri</option>
                            <option value="2">Chiroqchi tumani</option>
                            <option value="3">Muborak tumani</option>
                            <option value="4">Mirishkor tumani</option>
                            <option value="5">Nishon tumani</option>
                            <option value="6">Kasbi tumani</option>
                            <option value="7">Koson tumani</option>
                            <option value="8">Shaxrisabz tumani</option>
                            <option value="9">Kitob tumani</option>
                            <option value="10">Qamashi tumani</option>
                            <option value="11">G'uzor tumani</option>
                            <option value="12">Dehqonobod tumani</option>
                            <option value="13">Yakkabog' tumani</option>
                            <option value="14">Ko'kdala tumani</option>
                        </select>
                    </div>
                    <div className="row mb-2">
                        <label className='form-label' htmlFor="school">Maktab</label>
                        <select className='form-select' name="school" id="school">
                            <option value="1">1-maktab</option>
                            <option value="2">2-maktab</option>
                            <option value="3">3-maktab</option>
                            <option value="4">4-maktab</option>
                            <option value="5">5-maktab</option>
                            <option value="6">6-maktab</option>
                        </select>
                    </div>
                    <div className="row mb-2">
                        <label htmlFor="name" className="form-label">Ism</label>
                        <input type="text" name="name" id="name" placeholder='Ism...' className="form-control" />
                    </div>
                    <div className="row mb-2">
                        <label htmlFor="lName" className="form-label">Familya</label>
                        <input type="text" name="lName" id="lName" placeholder='Familya...' className="form-control" />
                    </div>
                    <div className="row mb-2">
                        <label htmlFor="oName" className="form-label">Otasining ismi</label>
                        <input type="text" name="oName" id="oName" placeholder='Sharf...' className="form-control" />
                    </div>
                    <div className="row mb-2">
                    <div className="d-inline-block mx-0 float-center my-2 btn btn-primary">Ro'yhatdan o'tkazish</div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default PersonPage;