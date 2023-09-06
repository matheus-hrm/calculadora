function createCalculator() {
  return {
    display: document.querySelector('.display'),

    start() {
      this.click();
      this.pressEnter();
    },

    click (button) {
      document.addEventListener('click', (event) => {
        const element = event.target;

        if (element.classList.contains('btn-num')) {
          this.btnForDisplay(element.innerText);
          this.display.focus();
        }
        if (element.classList.contains('btn-clear')) this.clearDisplay();
        if (element.classList.contains('btn-del')) this.del();
        if (element.classList.contains('btn-eq')) this.calculate();
      });
    },

    btnForDisplay(value) {
      this.display.value += value;
    },

    clearDisplay() {
      this.display.value = '';
    },

    del() {
      this.display.value = this.display.value.slice(0, -1);
    },

    pressEnter() {
      this.display.addEventListener('keyup', (event) => {
        if (event.keyCode === 13) {
          this.calculate();
        }
      });
    },

    calculate() {
      let conta = this.display.value;

      try {
        conta = eval(conta); 

        if (!conta) {
          alert('Conta inválida');
          return;
        }

        this.display.value = String(conta);
      } catch (e) {
        alert('Conta inválida');
        return;
      }
    },
  };
}

const calculator = createCalculator();
calculator.start();
