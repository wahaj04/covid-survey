import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { FloatingLabel } from 'react-bootstrap'
import '../pages/Style.css'
import Button from 'react-bootstrap/Button'
import Multiple from '../multiple/Multiple'
import { Layout } from 'antd';

const { Header } = Layout;

const Survey = () => {
    const [value, setValue] = useState('')
    const [array, setarray] = useState([
        {
            text: ''
        },
    ])

    const select = (event) => {
        setValue(event.target.value);
    }
    // console.log(value)

    const [singleObj, setSingleObj] = useState({
        Question: '',
        type: "Single",
    })
    // console.log(singleObj);
    const [multiValue, setMultiValue] = useState({
        type: 'Multiple',
        Question: ' ',
        option: []
    })

    const txtHandleChange = (event) => {

        let obj = {
            // ...singleObj,
            Question: event.target.value,
            type: "Single"
        }
        setSingleObj(obj)
    }

    const changeHandler = () => {
        setarray([...array, { name: '' }])
    }

    const multiHandleChange = (index, event) => {
        let obj = {
            ...multiValue
        }
        obj.option[index] = {
            Question: event.target.value,
            type: "Multiple"
        }
        setMultiValue(obj)
    }

    const handleForm = () => {
        let arr = []
        arr.push(singleObj)
        multiValue.option.map(item => {
            arr.push(item)
        })
        console.log(arr)
    }


    return (
        <div>
        
            <Layout>
                <Header className='head'>Covid-19 Survey</Header>
            </Layout>
         
            <p>Fail Response</p>
            Question:
            <Form.Control onChange={txtHandleChange} type="text" /><br />
            <Form.Check className='radio' label="yes" type='radio' />
            <Form.Check className='radio' label="No" type='radio' />

            <p>Type of Response</p>

            <FloatingLabel controlId="floatingSelectGrid" >
                <Form.Select aria-label="Floating label select example" onChange={select}>
                    <option value="Single">Single</option>
                    <option value="Multiple">Multiple</option>
                    <option value="Data">Data</option>
                </Form.Select>
            </FloatingLabel><br />
            <Button onClick={handleForm} variant="outline-success" className='save-btn'>Save</Button>
            {
                value === "Multiple" ? <Multiple 

                array={array}
                multiHandleChange={multiHandleChange} 
                changeHandler={changeHandler} /> : null
            }

        </div>

    )
}

export default Survey;

