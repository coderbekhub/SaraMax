import React from 'react';
import { useTranslation } from 'react-i18next';
import FooterBrend from '../../img/brend.png';
import '../slider.scss'
import Instagram from '../../img/instagram.png';
import Telegram from '../../img/telegram.png';
import Phone from '../../img/phone.png';

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__left">
          <img src={FooterBrend} alt="SaraMax Brand" />
          <span className="footer__copy">
            © {year} · {t('layout.footer.rights')}
          </span>
        </div>

        <div className='socialContent'>
          <div className='socialInfo'>
            <a href="https://t.me/seyfoptim" target='_blank'>
              <img src={Telegram} alt="Telegram" />
            </a>
          </div>
          <div className='socialInfo'>
            <a href="https://www.instagram.com/seyf_fonar_optom?igsh=N25vbGl5NGhrOG43" target='_blank'>
              <img src={Instagram} alt="Instagram"/>
            </a>
          </div>
          <div className='socialInfo socialPhone'> 
            <a href="tel:+998946687353">
              <img src={Phone} alt="Phone" />
            </a>
          </div>
        </div>

        <div className="footer__right">
          <span className="footer__crafted">
            {t('layout.footer.crafted')}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

