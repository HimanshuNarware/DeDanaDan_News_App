/** @format */


import { Row, Col } from 'antd';
import '../../style/topicBox.css';
import { useState } from 'react';
function TopicBox(props) {
  const [data, setData] = useState('tesla');
props.sendData(data)
console.log(data)

  return (
    <Row className="row" gutter={16}>
      <Col className="gutter-row" span={3}>
        <div >
          <button  className="btn-d " value="Forbes" onClick={(e)=>setData(e.target.value)}>
            Technology
          </button>
        </div>
      </Col>
      <Col className="gutter-row" span={3}>
        <div>
          <button value="Forbes" onClick={(e)=>setData(e.target.value)} className="btn-d">
         Forbes
          </button>
        </div>
      </Col>
      <Col className="gutter-row" span={3}>
        <div>
          <button className="btn-d" value='Science' onClick={(e)=>setData(e.target.value)}>Science</button>
        </div>
      </Col>

      <Col className="gutter-row" span={3}>
        <div>
          <button className="btn-d" value="business" onClick={(e)=>setData(e.target.value)}>Business</button>
        </div>
      </Col>
      <Col className="gutter-row" span={3}>
        <div>
          <button className="btn-d" value="sport" onClick={(e)=>setData(e.target.value)}>Sports</button>
        </div>
      </Col>
      <Col className="gutter-row" span={3}>
        <div>
          <button className="btn-d" value="Jobs" onClick={(e)=>setData(e.target.value)}>Job</button>
        </div>
      </Col>
    </Row>
  );
}

export default TopicBox;
