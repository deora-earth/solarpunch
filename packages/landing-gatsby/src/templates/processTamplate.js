import React, { useState, Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { Modal } from '@redq/reuse-modal';
import { appTheme } from 'common/src/theme/app';
import { GlobalStyle, AppWrapper, Sun } from '../containers/App/app.style';
import {
  Tabs,
  Tab,
  Content,
  ContentWrapper,
  ContentWrapperIntegration,
  FlexWrapper,
  ContentScroll,
  ContentHover,
  ContentHoverTools,
  ToolImg,
  SectionWrapper,
  StepNavigation,
  StepNavigationElement,
  HorizontalDivider,
  SetpsAccordion,
} from './tamplateComponents/processTamplate.style';
import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionBody,
  IconWrapper,
  OpenIcon,
  CloseIcon,
} from 'common/src/components/Accordion';
import MDReactComponent from 'markdown-react-js';
import { ExternalLink } from 'react-external-link';
import { ResetCSS } from 'common/src/assets/css/style';
import Navbar from '../containers/App/Navbar';
import Title from './tamplateComponents/Title/title';
import Description from './tamplateComponents/Description/description';
import Newsletter from '../containers/App/Newsletter';
import SupportBlock from '../containers/App/SupportBlock';
import Footer from '../containers/App/Footer';
import '@redq/reuse-modal/es/index.css';
import CookieBanner from 'react-cookie-banner';
import Box from 'common/src/components/Box';
import SEO from '../components/seo';
import ProcessList from '../containers/App/ProcessList';
import Heading from 'common/src/components/Heading';
import Container from 'common/src/components/UI/Container';
import Text from 'common/src/components/Text';
import { Icon } from 'react-icons-kit';
import { plus } from 'react-icons-kit/entypo/plus';
import { minus } from 'react-icons-kit/entypo/minus';

const BasicTemplate = (props) => {
  const { pageContext } = props;
  const { pageContent } = pageContext;
  const [active, setActive] = useState(0);

  const handleClick = (e) => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };
  return (
    <ThemeProvider theme={appTheme}>
      <Fragment>
        <SEO title="The best processes for self-managed and distributed teams" />
        <CookieBanner
          styles={{
            banner: { backgroundColor: '#FFDE00' },
            message: {
              fontWeight: 500,
              fontFamily: 'poppins, sans-serif',
              color: '#091632',
            },
          }}
          message="Yes, we use cookies. To enhance the user experience."
          onAccept={() => {}}
          cookie="user-has-accepted-cookies"
        />
        <Modal />
        <ResetCSS />
        <GlobalStyle />
        <AppWrapper>
          <Sun />
          <Navbar />
          <Title
            icon1={pageContent.icons.startIconUrl}
            icon2={pageContent.icons.endIconUrl}
            title={pageContent.title}
            description={pageContent.summary.abstract.substr(0, 180) + '...'}
          />
          <Description
            summaryText={pageContent.summary.abstract}
            benefitsText={pageContent.summary.benefits}
          />
          <Container>
            <SectionWrapper>
              <Heading content="Adoption Requirements" />
              <dvi>
                <Tabs>
                  <Tab onClick={handleClick} active={active === 0} id={0}>
                    <span role="img" aria-label="Organisation">
                      🌐
                    </span>{' '}
                    Org Structure
                  </Tab>

                  <Tab onClick={handleClick} active={active === 1} id={1}>
                    <span role="img" aria-label="Policies">
                      📜
                    </span>{' '}
                    Policies
                  </Tab>
                  <Tab onClick={handleClick} active={active === 2} id={2}>
                    <span role="img" aria-label="Roles">
                      🎭
                    </span>{' '}
                    Roles
                  </Tab>
                  <Tab onClick={handleClick} active={active === 3} id={3}>
                    <span role="img" aria-label="Tools">
                      ⚒️
                    </span>{' '}
                    Tools
                  </Tab>
                  <Tab onClick={handleClick} active={active === 4} id={4}>
                    <span role="img" aria-label="Values">
                      💖
                    </span>{' '}
                    Values
                  </Tab>
                </Tabs>
                <>
                  <Fragment>
                    <ContentWrapper active={active === 0}>
                      <p>
                        Organisational structures, formats and style of
                        governance that is needed to adapt the process."
                      </p>
                      <ExternalLink
                        href={pageContent.addoptionRequirements[0].link}
                      >
                        <ContentHover>
                          <Heading
                            content={pageContent.addoptionRequirements[0].name}
                          />
                          <MDReactComponent
                            text={
                              pageContent.addoptionRequirements[0].description
                            }
                          />
                        </ContentHover>
                      </ExternalLink>
                    </ContentWrapper>
                    <ContentWrapper active={active === 1}>
                      <p>
                        Policies and frameworks used in this process. These can
                        be individualized based on the organisation’s need and
                        background.
                      </p>
                      <ContentScroll>
                        <Heading content={pageContent.components[1].name} />
                        <MDReactComponent
                          text={pageContent.components[1].description}
                        />
                      </ContentScroll>
                    </ContentWrapper>
                    <ContentWrapper active={active === 2}>
                      <p>
                        Mandatory roles that are affected or created for this
                        process to work properly.{' '}
                      </p>
                      <ContentScroll>
                        <Heading content={pageContent.components[0].title} />
                        <Text content={pageContent.components[0].purpose} />
                        <Text content={pageContent.components[0].domains} />
                        <Text
                          content={pageContent.components[0].accountabilities}
                        />
                      </ContentScroll>
                    </ContentWrapper>
                    <ContentWrapper active={active === 3}>
                      <p>Tools that are used in this process.</p>
                      <FlexWrapper>
                        {pageContent.instructions.map((tool, index) => (
                          <ExternalLink href={tool.tool.link}>
                            <ContentHoverTools key={index}>
                              <ToolImg src={tool.tool.link} />
                              <Heading content={tool.tool.name} />
                            </ContentHoverTools>
                          </ExternalLink>
                        ))}
                      </FlexWrapper>
                    </ContentWrapper>
                    <ContentWrapper active={active === 4}>
                      <p>
                        Values drive the organisation and the following are
                        needed to fully adapt this process.
                      </p>
                      <Content>
                        <Heading content="Test" />
                        <Text content="Test" />
                      </Content>
                    </ContentWrapper>
                  </Fragment>
                </>
              </dvi>
            </SectionWrapper>
            <SectionWrapper>
              <Heading content="Integration Steps" />
              <ContentWrapperIntegration>
                <StepNavigation>
                  {pageContent.instructions.map((tool, index) => (
                    <StepNavigationElement key={index}>
                      <ToolImg src={tool.tool.link} />
                      <Heading content={tool.name} />
                    </StepNavigationElement>
                  ))}
                </StepNavigation>
                <HorizontalDivider />
                <SetpsAccordion>
                  <Container>
                    <Box className="row">
                      <Accordion>
                        <Fragment>
                          {pageContent.instructions.map(
                            (instructions, index) => (
                              <AccordionItem key={`accordion_key-${index}`}>
                                <Fragment>
                                  <AccordionTitle>
                                    <Fragment>
                                      <Heading content={instructions.namee} />
                                      <IconWrapper>
                                        <OpenIcon>
                                          <Icon icon={minus} size={18} />
                                        </OpenIcon>
                                        <CloseIcon>
                                          <Icon icon={plus} size={18} />
                                        </CloseIcon>
                                      </IconWrapper>
                                    </Fragment>
                                  </AccordionTitle>
                                  <AccordionBody>
                                    <Text content={instructions.description} />
                                  </AccordionBody>
                                </Fragment>
                              </AccordionItem>
                            )
                          )}
                        </Fragment>
                      </Accordion>
                    </Box>
                  </Container>
                </SetpsAccordion>
              </ContentWrapperIntegration>
            </SectionWrapper>
            <SectionWrapper>
              <Heading content="More practices" />
              <ProcessList />
            </SectionWrapper>
          </Container>
          <Newsletter />
          <SupportBlock />
          <Footer />
        </AppWrapper>
      </Fragment>
    </ThemeProvider>
  );
};

export default BasicTemplate;