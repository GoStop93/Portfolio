import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

export const Toast = styled(ToastContainer)`
  .Toastify__toast {
    font-size: 16px;
    min-height: 45px;
    font-family: 'GT Cinetype', 'Roboto';
    color: red !important;
    border: 1px solid #5733a8;
  }

  .Toastify__toast-body {
    margin: 0;
    padding: 0 6px;
  }

  .Toastify__toast-icon {
    width: 24px;
  }

  .Toastify__toast--success {
    background-color: #171a2c !important;
    color: #33bb1c !important;
    .Toastify__close-button {
      align-self: center;
      color: #33bb1c !important;
    }
  }

  .Toastify__toast--error {
    background-color: #171a2c !important;
    color: #de5342 !important;
    .Toastify__close-button {
      align-self: center;
      color: #de5342 !important;
    }
  }
`;
