import React from 'react'
import { Row, Col, PageHeader, BackTop, Timeline, Tag } from 'antd';
import { Link } from 'react-router-dom'
import classes from './Work.css'
class Work extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '经历&作品'
        }
    }

    render() {
        return (

            <Row className={classes.main} style={{ fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'` }}>
                <Row style={{ height: '50px' }}>
                    <Col lg={{ span: 12, offset: 6 }} xs={{ span: 24 }}>
                        <PageHeader
                            onBack={() => this.props.history.goBack()}
                            title={this.state.title}
                            style={{
                                left: "-20px", position: 'fixed', width: '110%', zIndex: '2', fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`
                            }}
                        />
                        <BackTop />
                    </Col>
                </Row>
                <Col xs={{ span: 24, offset: 0 }} lg={{ span: 12, offset: 6 }}>


                    <div style={{ padding: '1rem' }}>
                        <Timeline>
                            <Timeline.Item><div>2016-09</div>迈入大学校门
                            </Timeline.Item>
                            <Timeline.Item><div>2016-09</div>15天的军训过后，第一次接触编程
                            </Timeline.Item>
                            <Timeline.Item><div>2017-05</div>3此面试后 加入智邮普创工作室，第一次参观机房，见到真的交换机，服务器，EMC，刀箱
                            </Timeline.Item>
                            <Timeline.Item><div>2017-07</div>为期一个月的暑假留校生活开始（工作室传统）
                            </Timeline.Item>
                            <Timeline.Item><div>2017-12  <Tag color="geekblue">后端开发</Tag></div>使用Django写了第一个项目
                                <Link to={{ pathname: '/Life/item', state: { id: '45', title: '项目' } }}>《todolist后台》</Link>
                            </Timeline.Item>
                            <Timeline.Item><div>2018-04  <Tag color="geekblue">后端开发</Tag></div>第一个git多人合作项目
                                <Link to={{ pathname: '/Life/item', state: { id: '49', title: '项目' } }}>《银行业务管理系统》并上线</Link>
                            </Timeline.Item>
                            <Timeline.Item><div>2018-05  <Tag color="geekblue">后端开发</Tag></div>使用Django独立完成
                                <Link to={{ pathname: '/Life/item', state: { id: '52', title: '项目' } }}>《校园账单》</Link>系统的整个后台开发，期间学习了网络抓包，模拟登录，oAuth2.0认证。上线提供给全校师生使用。
                            </Timeline.Item>
                            <Timeline.Item><div>2018-06  <Tag color="red">前端开发</Tag></div>学习Vue，并和工作室成员共同重构
                                <Link to={{ pathname: '/Life/item', state: { id: '50', title: '项目' } }}>《校园账单》前端页面</Link>
                            </Timeline.Item>
                            <Timeline.Item><div>2018-06  <Tag color="red">前端+后端</Tag></div>大二下学期的课程设计，使用Jquery和Bootstarp实现
                                《瑞意特剧院票务管理》前端页面
                            </Timeline.Item>
                            <Timeline.Item><div>2018-08  <Tag color="red">前端+后端</Tag></div>第二次暑假留校(今年暑假又没有回家了)，期间独立完成
                                <Link to={{ pathname: '/Life/item', state: { id: '53', title: '项目' } }}>《ip地址分配系统》</Link>的整个前端+后台的开发
                            </Timeline.Item>
                            <Timeline.Item><div>2018-10  <Tag color="geekblue">后端开发</Tag></div>学校换新教务系统了，之前公众号查成绩接口的接口需要重新开发。使用Node.js开发
                                <Link to={{ pathname: '/Life/item', state: { id: '54', title: '项目' } }}>《成绩查询后台》</Link>包括oAuth2.0认证和SHA1加密认证。
                            </Timeline.Item>
                            <Timeline.Item><div>2018-11  <Tag color="geekblue">后端开发</Tag></div>腾讯云的网站备案审核通过了，开始写
         《个人博客后台》
                            </Timeline.Item>
                            <Timeline.Item><div>2018-12  <Tag color="red">前端开发</Tag></div>和工作室成员一起给学校招生办写招生小程序，负责一个小程序页面的开发和
                                <Link to={{ pathname: '/Life/item', state: { id: '55', title: '项目' } }}>小程序后台文章管理</Link>页面
                            </Timeline.Item>
                            <Timeline.Item><div>2018-12  <Tag color="red">前端开发</Tag></div>投了几份简历，最后选择去《绿盟科技》实习。可能是因为工作室学长之前在绿盟实现过，所以对这家公司比较有好感吧
                            </Timeline.Item>
                            <Timeline.Item><div>2019-1  <Tag color="red">实习</Tag></div>
                                <Link to={{ pathname: '/Life/item', state: { id: '56', title: '项目' } }}>Vue版本内部组件库的构建</Link>在内部Angular.js组件库基础上，进行技术栈的迁移。
                            </Timeline.Item>
                            <Timeline.Item><div>2019-3  <Tag color="red">前端开发</Tag></div>使用Echarts等可视化工具，进行
                                <Link to={{ pathname: '/Life/item', state: { id: '57', title: '项目' } }}>可视化大屏模板开发</Link>基于React
                            </Timeline.Item>
                            <Timeline.Item><div>2019-3  <Tag color="red">前端开发</Tag></div>使用React+Redux+Antd初步完成
                                <Link to={{ pathname: '/Life/item', state: { id: '58', title: '项目' } }}>个人博客前端界面</Link>
                            </Timeline.Item>
                            <Timeline.Item><div>... <Tag color="red">未来</Tag></div>学无止境
                            </Timeline.Item>
                        </Timeline>
                    </div>


                    {/* <Empty /> */}


                </Col>
            </Row>

        )
    }
}


export default Work;