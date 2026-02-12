
class TotoRandomNumber extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'wrapper');

    const numbersContainer = document.createElement('div');
    numbersContainer.setAttribute('class', 'numbers-container');

    // Create initial placeholders
    for (let i = 0; i < 6; i++) {
      const numberElement = document.createElement('span');
      numberElement.setAttribute('class', 'number-item');
      numberElement.textContent = '--';
      numbersContainer.appendChild(numberElement);
    }

    const generateButton = document.createElement('button');
    generateButton.textContent = 'Generate Random Numbers';
    generateButton.addEventListener('click', () => {
      const numberItems = shadow.querySelectorAll('.number-item');
      numberItems.forEach(item => {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        item.textContent = randomNumber;
      });
    });

    const style = document.createElement('style');
    style.textContent = `
      .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px;
        border: 1px solid #ccc;
        border-radius: 12px;
        background-color: #f9f9f9;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      }
      .numbers-container {
        display: flex;
        gap: 15px;
        margin-bottom: 25px;
      }
      .number-item {
        font-size: 2em;
        font-weight: bold;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #ddd;
        border-radius: 8px;
        background-color: #fff;
      }
      button {
        padding: 12px 25px;
        border: none;
        border-radius: 8px;
        background-color: #007bff;
        color: white;
        font-size: 1.1em;
        cursor: pointer;
        transition: background-color 0.3s, transform 0.2s;
      }
      button:hover {
        background-color: #0056b3;
      }
      button:active {
        transform: scale(0.98);
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    wrapper.appendChild(numbersContainer);
    wrapper.appendChild(generateButton);
  }
}

customElements.define('toto-random-number', TotoRandomNumber);
