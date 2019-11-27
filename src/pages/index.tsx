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
  JobInfo,
} from '../components';

import { JobInfoProps } from '../components/job-info';

export default class IndexPage extends React.Component {
  public render(): JSX.Element {
    const jobInfo: JobInfoProps[] = [
      {
        title: '上海哈益信息科技有限公司',
        desc: '前端开发工程师',
        startTime: '2018 年 11 月',
        workInfo: [
          {
            name: '春晖博爱基金会官网(二期)',
            desc: `春晖博爱(全称春晖博爱儿童救助公益基金会)的官网。由于一期存在手机展示效果差，页面结构混乱和无用资源加载多等问题，对网站进行了重构。使用了 Bootstrap 4 + jQuery 3 作为基础框架，抛弃了对 IE 全版本的兼容，布局大量使用了 flex。由于 OctoberCMS 存在缺陷，使用 Webpack + SCSS + PostCSS + TypeScript 进行样式和脚本的开发，解决了脚本与样式的兼容问题和代码压缩。引入了 PDF.js，使手机浏览器可以在线查看 PDF 文件。`,
          },
          {
            name: '佳得乐俱乐部微信小程序',
            desc: `百事旗下品牌佳得乐运动饮料的会员微信小程序，核心功能包含个人中心，运动打卡，积分商城，积分抽奖，推广新闻等。抛弃了 WePY + Vue 语法，采用了 Taro + React 语法，使用 TypeScript 开发，样式预处理语言从 LESS 切换到 SCSS，使用 MobX 做状态管理，大部分的 API 调用使用了 async-await。`,
          },
          {
            name: '哈公益行动加(+)微信小程序',
            desc: `行动+是公司开发的自有小程序。在工作中负责打卡模块的开发，初次接触微信小程序开发，使用了 WePY 和 LESS，并对已有的答题和捐步两个模块进行了 async-await 优化。`,
          },
          {
            name: '普陀疾控中心艾滋检查活动结果查询页',
            desc:
              '艾滋检查活动的手机版查询页，使用了 React.js，Axios 和 SCSS。',
          },
        ],
      },
      {
        title: '福州市嘀哩科技有限公司',
        desc: '开发实习生',
        startTime: '2017 年 8 月',
        endTime: '2018 年 2 月',
        workInfo: [
          {
            name: '图片反向代理',
            desc: '使用 .NET Core 和 C# 开发，运行良好。',
          },
        ],
      },
    ];

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
            <Column column={{ lg: 11 }}>
              <Card title='工作经历'>
                {jobInfo.map((job: JobInfoProps, index: number) => {
                  return (
                    <JobInfo
                      key={`job-${index}`}
                      title={job.title}
                      desc={job.desc}
                      startTime={job.startTime}
                      endTime={job.endTime}
                      workInfo={job.workInfo}
                    />
                  );
                })}
              </Card>
              <Card title='参与开源'></Card>
              <Card title='教育经历'></Card>
            </Column>
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
