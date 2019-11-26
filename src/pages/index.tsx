import React from 'react';

import {
  Identification16,
  Education16,
  FaceCool16,
  Enterprise16,
  Location16,
  Email16,
  Chat16,
  LogoGithub16,
  LogoLinkedin16,
} from '@carbon/icons-react';

import {
  Layout,
  SEO,
  Grid,
  Row,
  Column,
  Card,
  Info,
  ExperienceRate,
  Footer,
} from '../components';

export default class IndexPage extends React.Component {
  public render(): JSX.Element {
    return (
      <Layout>
        <SEO title='Home' />
        <Grid>
          <Row>
            <Column column={{ lg: 5 }}>
              <Card title='个人信息'>
                <Info title='姓名' content='栗健智'>
                  <Identification16 />
                </Info>
                <Info title='学历' content='大学专科'>
                  <Education16 />
                </Info>
                <Info title='头衔' content='初级前端工程师'>
                  <FaceCool16 />
                </Info>
                <Info title='工作经验' content='一年半'>
                  <Enterprise16 />
                </Info>
              </Card>
              <Card title='联系信息'>
                <Info title='地址' content='上海市浦东新区'>
                  <Location16 />
                </Info>
                <Info
                  title='邮箱'
                  content='me@550.moe'
                  href='mailto:me@550.moe'>
                  <Email16 />
                </Info>
                <Info title='微信' content='@Garfield550'>
                  <Chat16 />
                </Info>
                <Info
                  title='GitHub'
                  content='@Garfield550'
                  href='https://github.com/Garfield550'
                  isExternal>
                  <LogoGithub16 />
                </Info>
                <Info
                  title='Linkedin'
                  content='Garfield Lee'
                  href='https://www.linkedin.com/in/garfieldlee/'
                  isExternal>
                  <LogoLinkedin16 />
                </Info>
              </Card>
              <Card title='技术经验'>
                <ExperienceRate title='HTML' rate={3} />
                <ExperienceRate title='CSS & SCSS' rate={3} />
                <ExperienceRate title='JavaScript' rate={3} />
                <ExperienceRate title='TypeScript' rate={2} />
                <ExperienceRate title='C#' rate={1} />
                <ExperienceRate title='React.js' rate={3} />
                <ExperienceRate title='Gatsby.js' rate={2} />
                <ExperienceRate title='Taro' rate={3} />
                <ExperienceRate title='微信小程序' rate={3} />
                <ExperienceRate title='Git' rate={3} />
                <ExperienceRate title='Webpack' rate={2} />
              </Card>
            </Column>
            <Column column={{ lg: 11 }}>Text</Column>
          </Row>
          <Row>
            <Column>
              <Footer />
            </Column>
          </Row>
        </Grid>
      </Layout>
    );
  }
}
