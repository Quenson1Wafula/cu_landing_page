document.addEventListener('DOMContentLoaded', () => {
    const modalDiv = document.createElement('div');
    modalDiv.classList.add('modal');
    const createDynamicModal = () => {
        // created content div
      const contentDiv = document.createElement('div');
      contentDiv.classList.add('content');
      const textDiv = document.createElement('div');
      textDiv.classList.add('text');
      const mpesaLogoSpan = document.createElement('span');
      mpesaLogoSpan.classList.add('m-pesa-logo');
      const mpesaLogoImg = document.createElement('img');
      mpesaLogoImg.src = './assets/images/icons/mpesa-logo.png';
      mpesaLogoImg.alt = '';
      mpesaLogoSpan.appendChild(mpesaLogoImg);
      textDiv.appendChild(mpesaLogoSpan);
      const formElement = document.createElement('form');
      formElement.action = '#';
      const phoneNumberInput = document.createElement('input');
      phoneNumberInput.type = 'number';
      phoneNumberInput.classList.add('input');
      phoneNumberInput.required = true;
      const phoneNumberLabel = document.createElement('label');
      phoneNumberLabel.classList.add('label');
      phoneNumberLabel.innerText = 'Phone Number';
      const phoneNumberIconSpan = document.createElement('span');
      phoneNumberIconSpan.classList.add('span');
      const phoneNumberIconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      phoneNumberIconSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      phoneNumberIconSvg.setAttribute("viewBox", "0 0 24 24");
      phoneNumberIconSvg.setAttribute("width", "20px");
      phoneNumberIconSvg.setAttribute("height", "20px");
      phoneNumberIconSvg.style.fill = "#136207";
      phoneNumberIconSvg.innerHTML = '<path d="M15.75,14.85l-2.54,2.53c-1.532-0.807-2.759-1.747-3.798-2.792c-1.045-1.039-1.985-2.266-2.792-3.798l2.53-2.54L8.512,3H3 c0,0,0,0.328,0,1c0,4.539,1.84,8.874,4.966,12.034C11.126,19.16,15.461,21,20,21c0.672,0,1,0,1,0v-5.512L15.75,14.85z"/></svg>';
      phoneNumberIconSpan.appendChild(phoneNumberIconSvg);
      formElement.appendChild(phoneNumberInput);
      formElement.appendChild(phoneNumberLabel);
      formElement.appendChild(phoneNumberIconSpan);
      const amountInput = document.createElement('input');
      amountInput.type = 'text';
      amountInput.classList.add('input');
      amountInput.required = true;
      const amountLabel = document.createElement('label');
      amountLabel.classList.add('label');
      amountLabel.innerText = 'Amount';

      const amountIconSpan = document.createElement('span');
      amountIconSpan.classList.add('span');
  

      const amountIconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      amountIconSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      amountIconSvg.setAttribute("viewBox", "0 0 32 32");
      amountIconSvg.setAttribute("width", "25px");
      amountIconSvg.setAttribute("height", "30px");
      amountIconSvg.style.fill = "#136207";
      amountIconSvg.style.verticalAlign = "middle";
      amountIconSvg.innerHTML = '<path d="M 7 7 L 7 9 L 27 9 L 27 17.080078 C 27.324 17.033078 27.654094 17 27.996094 17 C 28.350094 17 28.682 17.031078 29 17.080078 L 29 7 L 7 7 z M 3 11 L 3 25 L 20 25 L 20 23 L 6.9082031 23 C 6.9640457 22.84296 7 22.676122 7 22.5 C 7 21.672 6.328 21 5.5 21 C 5.3238784 21 5.1570395 21.035954 5 21.091797 L 5 14.908203 C 5.1570395 14.964046 5.3238784 15 5.5 15 C 6.328 15 7 14.328 7 13.5 C 7 13.323878 6.9640457 13.15704 6.9082031 13 L 21.091797 13 C 21.035954 13.15704 21 13.323878 21 13.5 C 21 14.328 21.672 15 22.5 15 C 22.676122 15 22.84296 14.964046 23 14.908203 L 23 19.322266 C 23.567 18.647266 24.241 18.106844 25 17.714844 L 25 11 L 3 11 z M 14 15 C 12.35503 15 11 16.35503 11 18 C 11 19.64497 12.35503 21 14 21 C 15.64497 21 17 19.64497 17 18 C 17 16.35503 15.64497 15 14 15 z M 14 17 C 14.56503 17 15 17.43497 15 18 C 15 18.56503 14.56503 19 14 19 C 13.43497 19 13 18.56503 13 18 C 13 17.43497 13.43497 17 14 17 z M 27.996094 19 C 26.366637 19 24.999705 19.833576 24.179688 21.052734 C 23.790101 21.631949 23.51288 22.291833 23.320312 23 L 22 23 L 22 25 L 23.027344 25 C 23.019767 25.167475 23 25.330046 23 25.5 C 23 25.669954 23.019767 25.832525 23.027344 26 L 22 26 L 22 28 L 23.320312 28 C 23.51288 28.708167 23.790101 29.368051 24.179688 29.947266 C 24.999706 31.166424 26.366637 32 27.996094 32 C 29.531444 32 30.773795 31.285749 31.736328 30.236328 L 30.263672 28.884766 C 29.520205 29.695345 28.994743 30 27.996094 30 C 26.989551 30 26.358825 29.60167 25.839844 28.830078 C 25.680838 28.593677 25.547969 28.307976 25.429688 28 L 28 28 L 28 26 L 25.029297 26 C 25.019319 25.833378 25 25.672836 25 25.5 C 25 25.327164 25.019319 25.166622 25.029297 25 L 28 25 L 28 23 L 25.429688 23 C 25.547969 22.692024 25.680838 22.406323 25.839844 22.169922 C 26.358825 21.39833 26.989551 21 27.996094 21 C 28.932338 21 29.490736 21.39362 30.263672 22.236328 L 31.736328 20.884766 C 30.803264 19.867474 29.59585 19 27.996094 19 z"/></svg>';
  

      amountIconSpan.appendChild(amountIconSvg);
  

      formElement.appendChild(amountInput);
      formElement.appendChild(amountLabel);
      formElement.appendChild(amountIconSpan);
  
      const buttonElement = document.createElement('button');
      buttonElement.classList.add('button');
      buttonElement.innerText = 'GIVE';
 
      formElement.appendChild(buttonElement);
  
      contentDiv.appendChild(textDiv);
      contentDiv.appendChild(formElement);
  
      modalDiv.appendChild(contentDiv);
      document.querySelector('.modal-container').appendChild(modalDiv);

    };


    const modal_btn = document.querySelector('.btn-modal');
    modal_btn.addEventListener('click', () => {
        modalDiv.classList.add('show');
        console.log("CLicked ME")
        createDynamicModal();
        
        });
  });
  