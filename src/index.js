import React, {Component} from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

class BootstrapComp extends Component {
    render() {
        return (
            <div>
                {/* 一、 标题与小标题
                大标题是 class = h1 -- h6
                小标题是 <small></small>*/}

                {/*<button className='btn btn-info'>hello world</button>

                <h1>标题一</h1>
                <h2>标题二</h2>
                <h3>标题三</h3>
                <h4>标题四</h4>
                <h5>标题五</h5>
                <h6>标题六</h6>
                <span className='h1'>标题一<small className='h3'>标题1.1</small></span>
                <span className='h2'>标题二</span>
                <span className='h3'>标题三</span>
                <span className='h4'>标题四</span>
                <span className='h5'>标题五</span>
                <span className='h6'>标题六</span>*/}

                {/*      二、  Bootstrap 中的排版--对齐
                .text-left
                .text-center
                .text-right
                .text-lowercase
                .text-uppercase
                .text-capitalize*/}

                {/*<p className='text-left'>杨新强</p>
                <p className='text-center'>杨新强</p>
                <p className='text-right'>杨新强</p>
                <p className='text-capitalize'>yansen!</p>*/}

                {/*  三 、 Bootstarp中的表格
                .table 全屏表格
                .table-bordered 带边框表格
                .table-striped 带条纹表格
                .table-hover 悬停变色
                .table-condensed 紧凑风格

                设置每一行的颜色
                table-warning
                table-info
                table-danger
                */}
                {/*<table className='table table-bordered table-striped table-hover '>
                    <thead>
                      <tr className='table-warning'>
                          <th>标题一</th>
                          <th>标题二</th>
                          <th>标题三</th>
                      </tr>

                    </thead>
                    <tbody>
                      <tr className='table-danger'>
                          <td>内容一</td>
                          <td>内容二</td>
                          <td>内容三</td>
                      </tr>
                      <tr>
                          <td>内容一</td>
                          <td>内容二</td>
                          <td>内容三</td>
                      </tr>
                      <tr>
                          <td>内容一</td>
                          <td>内容二</td>
                          <td>内容三</td>
                      </tr>
                    </tbody>
                </table>*/}
                {/*四、Bootstrap中的表单

                   .form-group 表示是一个组件，一个组

                   .form-inline 表示将 组件排成 一行

                   .form-control

                   .input-lg  表示大输入框
                   .input-sm  表示小输入框

                   .sr-only 表示隐藏提示信息

                */}
                {/*<form className='form-inline'>
                    <div className='form-group'>
                        <label htmlFor="" className='sr-only'>这是一个输入框：</label>
                        <input type='text' className='form-control input-lg' placeholder={'请输入用户名'}/>
                    </div>

                    <div className='form-group'>
                        <label htmlFor="">这是一个输入框：</label>
                        <select name='' id='' className='form-control'>
                            <option>北京</option>
                            <option>上海</option>
                            <option>广州</option>
                            <option>成都</option>

                        </select>
                    </div>

                    <div className='form-group'>
                        <label htmlFor="">这是一个输入框：</label>
                        <textArea cols="10" rows="5" class="form-control" ></textArea>
                    </div>
                </form>*/}
                {/* 五、按钮
                bootstrap中的按钮
                .btn 表示按钮
                .btn-lg 表示大按钮
                .btn-sm 表示小按钮
                .btn-defalut 表示按钮的颜色为默认
                .btn-success  蓝色
                .btn-primary 表示主要颜色
                .btn-danger  红色的
                .btn-info    绿色的
                .btn-warning 黄色
                .btn-link    链接按钮
                .btn-block 表示全屏大小的按钮
                .active 表示默认按下的效果
                disabled = 'disabled' 禁用按钮，按钮上方就没有小手的图标

                a标签也可以使用

                */}
                {/* <button className='btn btn-default' disabled = 'disabled'>按钮一</button>
                <button className='btn btn-success active'>按钮一</button>
                <button className='btn btn-primary'>按钮一</button>
                <button className='btn btn-danger'>按钮一</button>
                <button className='btn btn-dark'>按钮一</button>
                <button className='btn btn-info'>按钮一</button>
                <button className='btn btn-warning'>按钮一</button>
                <button className='btn btn-link'>按钮一</button>
                <a href='' onBlur=';' className='btn btn-info'>这是一个a标签的按钮</a>*/}

                {/*六、响应式宽度设置
                <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no">*/}

                {/*七、栅格布局*/}
                {/*栅格将容器分为12列，即col = 12*/}
                {/*col-lg-：大屏    >= 1170*/}
                {/*col-md-：中屏    >= 992*/}
                {/*col-sm-：小屏    >= 768*/}
                {/*col-xs-：超小屏  像素小于768*/}


                {/*<div className='col-xs-12 col-sm-6 col-md-4 col-lg-2' style={{background:'red',height:'200px'}}></div>*/}


                {/*八、字体图标*/}
               {/* <form method="get" action="#">
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="input-group">
                                <input class="form-control"></input>
                                <span class="input-group-btn">
				                  <button class="btn btn-default"><i class="glyphicon glyphicon-search"></i></button>
			                    </span>
                            </div>
                        </div>
                    </div>
                </form>*/}
                {/*九、控件组*/}
            {/*    <div className="input-group">
                    <span className="input-group-addon">$</span>
                    <input type="text" className="form-control"/>
                        <span className="input-group-addon">.00</span>
                </div>

*/}
               {/*十、带导航的效果*/}
               <nav className='navbar navbar-inverse'>
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <div className="navbar-brand">
                                杨新强
                            </div>
                        </div>
                        <ul className='nav navbar-nav'>
                            <li><a href="">首页1</a></li>
                            <li><a href="">首页2</a></li>
                            <li><a href="">首页3</a></li>

                            
                        </ul>

                    </div>

               </nav>

                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            ddd
                        </div>


                    </div>
                </div>


            </div>
        );
    }
}


render(<BootstrapComp name='yxq'/>, document.getElementById('root'));













































