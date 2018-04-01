import React from 'react';


var hi={
			display:'flex',
			flexDirection:'column',
			height:'60px',
			background:'#ffffff'
		}
class Footer extends React.Component{
render(){
			
		
		
return(
			<footer>
			   	<div style={hi}>
					<ul className="oul">
						<li><i className='iconfont icon-changyonglogo40'></i><span>首页</span></li>
						<li><i className='iconfont icon-faxian'></i><span>发现</span></li>
						<li><i className='iconfont icon-dingdan'></i><span>订单</span></li>
						<li><i className='iconfont icon-wode'></i><span>我的</span></li>
					</ul>
				</div>
			</footer>
		)
	}
}


export default Footer;

