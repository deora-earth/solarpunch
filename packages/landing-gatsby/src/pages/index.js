import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { Modal } from '@redq/reuse-modal';
import { appTheme } from 'common/src/theme/app';
import { GlobalStyle, AppWrapper, Sun } from '../containers/App/app.style';
import { ResetCSS } from 'common/src/assets/css/style';
import Navbar from '../containers/App/Navbar';
import DomainSection from '../containers/App/Banner';
import FeatureSection from '../containers/App/FeatureSection';
import ControllSection from '../containers/App/Control';
import PartnerHistory from '../containers/App/PartnerHistory';
import PaymentSection from '../containers/App/PaymentSection';
import SupportBlock from '../containers/App/SupportBlock';
import Footer from '../containers/App/Footer';
import UpdateScreen from '../containers/App/UpdateScreen';
import Newsletter from '../containers/App/Newsletter';
import TrialSection from '../containers/App/Trial';
import CookieBanner from 'react-cookie-banner';
import '@redq/reuse-modal/es/index.css';
import SEO from '../components/seo';

export default () => {
  return (
    <ThemeProvider theme={appTheme}>
      <Fragment>
        <SEO title="The best processes for self-managed and distributed teams" />
        <Modal />
        <ResetCSS />
        <GlobalStyle />
        <AppWrapper>
          <Sun />
          <CookieBanner
            styles={{
              banner: { backgroundColor: 'rgba(9, 22, 50, 0.1)' },
              message: {
                fontWeight: 500,
                fontFamily: 'poppins, sans-serif',
                color: '#091632',
              },
            }}
            message="Yes, we use cookies. To enhance the user experience."
            cookie="gatsby-gdpr-google-analytics"
          />
          <Navbar />
          <DomainSection />
          <FeatureSection />
          <ControllSection />
          <UpdateScreen />
          <PartnerHistory />
          <PaymentSection />
          <TrialSection />
          <Newsletter />
          <SupportBlock />
          <Footer />
        </AppWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
