import './AboutMe.css';
import ScrollToTop from 'react-scroll-to-top';
import { ReactComponent as MySVG } from './uparrow2_89326.svg';
import Photo1 from '../../images/DSC_0063.jpg';
import Photo2 from '../../images/IMG_6670.jpg';
import Photo3 from '../../images/DSC_0393.jpg';

function AboutMe() {
  return (
    <div className='about-me'>
      <h1 className='greetings'>
        Привет, меня зовут Маша и я люблю шКодить &#128075;&#128572;
      </h1>
      <div className='school-container'>
        <img
          className='school__last-call'
          src={Photo1}
          alt='последний звонок'
        ></img>
        <img className='school__graduation' src={Photo2} alt='выпускной'></img>
        <img className='school__prom' src={Photo3} alt='селфи'></img>
      </div>
      <div className='about-me__container'>
        <p className='about-me__text'>
          Как я пришла к этому занятию? Спонтанно. Знакомые увлекались и
          постоянно рассказывали о том, что такое программирование и как классно
          создавать сайты и оживлять их.
        </p>
        <p className='about-me__text'>
          Так что я решила рискнуть, попробовать новую сферу, нырнуть с головой
          как говорится. Мне нравится не сидеть на месте и постоянно развиваться
          &#128105;&#8205;&#128187; &#128583;&#8205;&#9792;&#65039;
        </p>
        <p className='about-me__text'>
          Программирование предоставляет максимум возможностей, от простенькой
          анимации до масштабных многостраничных сайтов с логикой авторизации и
          регистрации, обращение к API и множеством всего что не сосчитать. Это
          заряжает, вдохновляет и мотивирует.
        </p>
        <p className='about-me__text'>
          Также это взаимодействие с командой, общение с интересными людьми.
          Узнавать от них лайфхаки и новые фитчи, а также быть полезной, учить и
          самой учиться &#128070;
        </p>
        <p className='about-me__text'>
          P.S. если подняться вверх и щелкнуть на питомца можно увидеть Шкод на
          Github &#128579;
        </p>
        <p className='about-me__text'>
          А ниже я покажу прикольную фитчу с использованием CSS &#128071;
        </p>
        <ScrollToTop smooth component={<MySVG />} />
      </div>
    </div>
  );
}
export default AboutMe;
