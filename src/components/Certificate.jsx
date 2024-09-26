import React from 'react';
import CertificateImg from '../assets/certificate.jpg';

const Certificate = () => {
  return (
    <div className="bg-gray-100 py-10 px-5 flex justify-center items-center">
      <div className="max-w-lg bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">
          Certificate of Registration
        </h2>
        <div className="flex justify-center mb-6">
          <img
            src={CertificateImg}
            alt="NGO Certificate"
            className="w-full h-auto rounded-md shadow-lg"
          />
        </div>
        <p className="text-gray-700 text-center">
          Hema Mahila Kalyan Samiti is a registered NGO with a mission to empower women and provide social and economic development. This certificate validates our commitment and work toward building a better society.
        </p>
      </div>
    </div>
  );
};

export default Certificate;
