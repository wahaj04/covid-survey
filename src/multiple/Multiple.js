import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import { Breadcrumb } from 'antd';

const Multiple = ({array,multiHandleChange,changeHandler}) => {
  


    return (
        <div>

            <FloatingLabel controlId="floatingInputGrid" >
                <p>Fail response</p>
                <Form.Check className='radio' label="yes" type='radio' />
                <Form.Check className='radio' label="No" type='radio' />
                <Breadcrumb>
                    <a href="#" onClick={changeHandler}>Add</a>
                </Breadcrumb>
                

            </FloatingLabel>
            <p>Type of response</p>
            <FloatingLabel controlId="floatingSelectGrid">

                <p>Options: </p>
                {
                    array.map((item, i) => {

                        return <div>

                            <Form.Control type="text" placeholder='Options' onChange={(e) => multiHandleChange(i, e)} key={i} />
                            <br />
                        </div>

                    })
                }

                
            </FloatingLabel><br />
            
        </div>
    )
}

export default Multiple;
