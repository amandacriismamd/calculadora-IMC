const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const weight = document.getElementById('weight').value; //vai pegar o elemento weight e add value
    const height = document.getElementById('height').value;

    const bmi = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let description = ' '

    value.classList.add('warn')


    document.getElementById('infos').classList.remove('hidden');

    if (bmi < 18.5) {
        description = 'Atenção: seu IMC indica que você está com peso abaixo do ideal!' 
    } else if (bmi >= 18.5 && bmi <= 25) {
        description = 'Parabéns! Seu IMC está dentro da faixa ideal para sua saúde.'
        value.classList.remove('warn')
        value.classList.add('normal')
    } else if (bmi >= 25 && bmi <= 30) {
        description = 'Seu IMC sugere sobrepeso. Considere consultar um profissional para ajustar sua saúde.'
    } else if (bmi >= 30 && bmi <= 35) {
        description = 'Seu peso está acima do recomendado, classificado como obesidade moderada. Invista em cuidados para melhorar sua qualidade de vida.'
    } else if (bmi >= 35 && bmi <= 40) {
        description = 'Atenção: seu IMC está na faixa de obesidade severa. É fundamental buscar apoio médico e ajustar hábitos para proteger sua saúde.'
    } else {
        description = 'Alerta: seu IMC indica obesidade grave. É importante buscar acompanhamento especializado o quanto antes.'
    }

    value.textContent = bmi.replace('.', ',')

    document.getElementById('description').textContent = description;
    
});