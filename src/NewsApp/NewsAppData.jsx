import React from 'react';
import './style.css';
import { Button, Card } from 'antd';
import { Meta } from 'antd/es/list/Item';
function NewsAppData({news}) {
const def="www.via.placeholder.com/200x200"
  return (
    <Card className='Card'
    hoverable
    style={{width:240}}
   
    cover={<img  className="img"alt="e" src={news.urlToImage}/>}
  >
    <h3 className='Meta' title={news.title} ></h3>
    <p className='des'>{news.description}</p>
    <Button className='read-more' type='primary' onClick={()=>window.open(news.url)}>Read More</Button>
  </Card>
 
  )

}

export default NewsAppData