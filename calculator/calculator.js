let input=document.getElementById('input');
const btn_zero=document.getElementById('block0');
const btn_one=document.getElementById('block1');
const btn_two=document.getElementById('block2');
const btn_three=document.getElementById('block3');
const btn_four=document.getElementById('block4');
const btn_five=document.getElementById('block5');
const btn_six=document.getElementById('block6');
const btn_seven=document.getElementById('block7');
const btn_eight=document.getElementById('block8');
const btn_nine=document.getElementById('block9');
const dot_btn =document.getElementById('dot');
const pulse_btn =document.getElementById('pulse');
const minus_btn =document.getElementById('minus');
const multiply_btn =document.getElementById('multiply');
const divide_btn =document.getElementById('divide');
const ans_btn =document.getElementById('ans');
const clear_btn=document.getElementById('clr');
for (let i = 0; i <= 9; i++) {
    const button = document.getElementById(`block${i}`);
    button.addEventListener('click', () => {
        if (input.value === '0') {
            input.value = i;
        } else {
            input.value += i;
        }
    });
}

// operation buttons
pulse_btn.addEventListener('click', () => input.value += pulse_btn.innerHTML);
minus_btn.addEventListener('click', () => input.value += minus_btn.innerHTML);
multiply_btn.addEventListener('click', () => input.value += multiply_btn.innerHTML);
divide_btn.addEventListener('click', () => input.value += divide_btn.innerHTML);
dot_btn.addEventListener('click', () => input.value += dot_btn.innerHTML);

//  equals button
ans_btn.addEventListener('click', () => {
    try {
        input.value = eval(input.value);
        if (input.value === Infinity) {
            input.value = 'Infinity';
        } else if (isNaN(input.value)) {
            input.value = 'NaN';
        }
    } catch (error) {
        input.value = 'Error';
    }
});

   // clear button
   clear_btn.addEventListener('click', () => {
    input.value = '0';
});