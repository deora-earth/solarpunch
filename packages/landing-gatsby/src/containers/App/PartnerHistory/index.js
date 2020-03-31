import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/src/components/Box';
import Card from 'common/src/components/Card';
import Image from 'common/src/components/Image';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';
import FeatureBlock from 'common/src/components/FeatureBlock';
import Container from 'common/src/components/UI/Container';
import PartnerHistoryWrapper, { CounterUpArea } from './partnerHistory.style';
import ColonyImg from 'common/src/assets/image/app/Colony.png';
import SlackImg from 'common/src/assets/image/app/Slack.png';
import GnosisImg from 'common/src/assets/image/app/Gnosis.svg';
import MailchimpImg from 'common/src/assets/image/app/mailchimp.svg';

const PartnerHistory = ({
  row,
  col,
  cardStyle,
  title,
  description,
  btnStyle,
  sectionSubTitle,
  cardArea,
}) => {
  return (
    <PartnerHistoryWrapper id="partners">
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col} style={{ flexDirection: 'column' }}>
            <Text content="LOREM IPSUM" {...sectionSubTitle} />
            <FeatureBlock
              title={
                <Heading
                  content="LOREM IPSUM DOLOR SIT AMET CONSECTETUR."
                  {...title}
                />
              }
              description={
                <Text
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  {...description}
                />
              }
              button={<Button title="SUBMIT A TOOL" {...btnStyle} />}
            />
          </Box>
          <Box className="col" {...col} {...cardArea}>
            <CounterUpArea>
              <Card className="card" {...cardStyle}>
                <Image src={ColonyImg} alt="Colony" />
                <Text content="Colony" />
              </Card>
              <Card className="card" {...cardStyle}>
                <Image src={SlackImg} alt="Slack" />
                <Text content="Slack" />
              </Card>
              <Card className="card" {...cardStyle}>
                <Image src={GnosisImg} alt="Gnosis Safe" />
                <Text content="Gnosis Safe" />
              </Card>
              <Card className="card" {...cardStyle}>
                <Image src={MailchimpImg} alt="MailChimp" />
                <Text content="MailChimp" />
              </Card>
            </CounterUpArea>
          </Box>
        </Box>
      </Container>
    </PartnerHistoryWrapper>
  );
};

PartnerHistory.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  cardStyle: PropTypes.object,
};

PartnerHistory.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  col: {
    pr: '15px',
    pl: '15px',
    width: [1, 1, 1 / 2, 1 / 2, 1 / 2],
    flexBox: true,
    alignSelf: 'center',
  },
  cardStyle: {
    p: '53px 40px 35px',
    borderRadius: '10px',
    border: '2px solid #091632',
    boxShadow: '2px 2px 0px #091632',
  },
  title: {
    fontSize: ['20px', '24px', '24px', '24px', '30px'],
    fontWeight: '700',
    color: '#0f2137',
    letterSpacing: '0.07em',
    mb: '20px',
    maxWidth: ['100%', '100%', '100%', '490px', '490px'],
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '2.1',
    mb: '33px',
  },
  sectionSubTitle: {
    as: 'span',
    textAlign: 'left',
    fontSize: '14px',
    letterSpacing: '0.13em',
    fontWeight: '700',
    color: '#82E3E3',
    mb: '10px',
  },
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
  },
  cardArea: {
    pl: [0, 0, '40px', 0, 0],
  },
};

export default PartnerHistory;