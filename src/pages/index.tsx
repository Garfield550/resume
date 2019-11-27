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
  ProjectInfo,
  EducationalInfo,
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
              <Card title='参与开源'>
                <ProjectInfo
                  name='NervJS/Taro'
                  href='https://github.com/NervJS/taro/commits?author=Garfield550'>
                  Taro 是由京东凹凸实验室开发的多端统一开发框架。自使用 Taro
                  开发以来，多次为 Taro
                  项目修复问题，完善文档，并积极帮助他人解决问题。
                </ProjectInfo>
                <ProjectInfo
                  name='NervJS/Taro UI'
                  href='https://github.com/NervJS/taro-ui/commits?author=Garfield550'>
                  Taro UI 是一款基于 Taro 框架开发的多端 UI 组件库。由于在 Taro
                  社区积极贡献，被邀请加入 Taro UI 项目进行日常维护和功能更新。
                </ProjectInfo>
                <ProjectInfo
                  name='MvvmCross/MvvmCross'
                  href='https://github.com/MvvmCross/MvvmCross/commits?author=Garfield550'>
                  MvvmCross 是一款使用 C# 编写的跨平台 MVVM 框架，几乎横跨所有
                  .Net 开发平台。2017
                  年接触该框架时，由于其文档站显示效果不佳，移动设备布局混乱，便主动为他们重构了
                  <a
                    href='https://github.com/MvvmCross/MvvmCross/pull/1852'
                    target='_blank'
                    rel='noopener noreferrer'>
                    首页和文档站
                  </a>
                  ，后续又为他们构建了{' '}
                  <a
                    href='https://github.com/MvvmCross/MvvmCross/pull/2111'
                    target='_blank'
                    rel='noopener noreferrer'>
                    Hackfest 2017 活动宣传页
                  </a>
                  。
                </ProjectInfo>
                <ProjectInfo
                  name='AOSC-Dev/aosc-os-abbs'
                  href='https://github.com/AOSC-Dev/aosc-os-abbs/commits?author=Garfield550'>
                  AOSC OS 是由一群国内年轻 Linux 开发者创造的 GNU/Linux
                  发行版，主打开发者友好和旧设备兼容。我为他们维护过一段时间的软件包更新。
                </ProjectInfo>
                <ProjectInfo
                  name='WeCase/wecase.github.com'
                  href='https://github.com/WeCase/wecase.github.com'>
                  WeCase 是一款 Linux 下易用的微博客户端(2017
                  年已停止开发)。我为他们的官网贡献过代码。
                </ProjectInfo>
              </Card>
              <Card title='教育经历'>
                <EducationalInfo
                  name='山东信息职业技术学院'
                  grade='全日制大学专科'
                  major='软件工程'
                  minor='Web 前端'
                  startTime='2015 年 8 月'
                  endTime='2018 年 7 月'
                />
              </Card>
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
