import React from 'react';


var h_top={
	height:'50px',
	background:'#1292f7',
	padding:'5px',
	display:'flex',
	lineHeight:'50px'
}
var h_1={
	color:'white',
	lineHeight:'50px',
	fontSize:'15px'
}
var h_main={
	height:'50px',
	padding:'5px',
	width:'93%',
	paddingRight:'5px',
	
}
class Head extends React.Component{
	render(){
		return(	
				
				<header>
				   <div style={h_top}>
				     <i className='iconfont icon-dingwei'></i><h1 style={h_1}>杭州市人民政府</h1>
				   </div>
					<div style={h_main}>
					  <input type='text' placeholder="搜索饿了么商家，商品名称" style={{background:'white',height:'50px',width:'100%',paddingRight:'10px',border:'none',outline:'none',fontSize:'15px',textAlign:'center'}}/>
					</div>
					<div><img src='./pic/imgs.jpg' style={{width:'100%'}}/></div>
				</header>
			    
		)
	}
}

export default Head;

