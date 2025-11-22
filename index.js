
    let exp = '';
    const dis = document.getElementById('display');

    function press(n) {
      exp += n;
      dis.textContent = exp;
    }

    function clearAll() {
      exp = '';
      dis.textContent = '0';
    }

    function backspace() {
      exp = exp.slice(0, -1);
      dis.textContent = exp || '0';
    }

    function calculate() {
      if (!exp) return;

      let correctAns;
      try {
        correctAns = eval(exp.replace('%', '*0.01'));
      } catch (e) {
        dis.textContent = 'Error';
        return;
      }

      // 10% chance correct
      const isCorrect = Math.random() < 0.1;

      if (isCorrect) {
        dis.textContent = correctAns;
      } else {
        // simple wrong answer: add or subtract 5
        let wrong = correctAns + (Math.random() < 0.5 ? 5 : -5);
        dis.textContent = wrong;
      }

      exp = dis.textContent;
    }

