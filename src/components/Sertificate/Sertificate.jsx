import React from 'react';

const Sertificate = () => {
    return (
        <>
            <div className="add border">
                <div className="title text-center p-4 border bg-primary text-white">
                    Sertifikat olish
                </div>
                <div className="body p-4">
                    <div className="row mb-2">
                        <label className='form-label' htmlFor="fName">Ism</label>
                        <input type="text" placeholder='Ism...' name="fName" id="fName" className="form-control" />
                    </div>
                    <div className="row mb-2">
                        <label className='form-label' htmlFor="lastName">Familya</label>
                        <input type="text" name="lastName" placeholder='Familya...' id="lastName" className="form-control" />
                    </div>
                    <div className="row mb-2">
                        <label className='form-label' htmlFor="id">ID</label>
                        <input className='form-control' type="number" name="id" id="id" placeholder='ID raqam' />
                    </div>

                    <div className="row mb-2">
                        <label className='form-label' htmlFor="educate">Kurs Yonalishi</label>
                        <select className='form-select' name="educate" id="educate">
                            <option className='form-option' value="">AKT sohasi</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sertificate;