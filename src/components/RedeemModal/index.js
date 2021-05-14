import React from 'react';
import './styles.css';
import ReactLoading from 'react-loading';

const RedeemModal = ({ redeemState, close }) => {
  return (
    <div>
      {redeemState && (
        <div className={`redeem-modal redeem-${redeemState}`}>
          <div className="redeem-modal-body">
            <i className="fas fa-times modal-close" onClick={close}></i>
            {redeemState === 'OK' && (
              <div className="modal-content-div">
                <i className="far fa-laugh-beam redeem-icon"></i>
                <p className="redeem-message">Product successfuly redeemed</p>
              </div>
            )}
            {redeemState === 'error' && (
              <div className="modal-content-div">
                <i className="fas fa-heart-broken redeem-icon"></i>
                <p className="redeem-message">Error please try again</p>
              </div>
            )}
            {redeemState === 'loading' && (
              <div className="modal-content-div">
                <ReactLoading
                  type={'bars'}
                  color={'#222222'}
                  height={'90px'}
                  width="90px"
                />
                <p className="redeem-message">Loading...</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default RedeemModal;
