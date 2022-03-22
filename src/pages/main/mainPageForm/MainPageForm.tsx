import React, { FC, useState } from 'react';
import { Input, Form, Button } from 'antd';
import c from './mainPageForm.module.css'
import { rules } from './../../../utils/rules';

interface MainPageFormProps {
    addNewImage: (id: string) => void;
}

const MainPageForm: FC<MainPageFormProps> = (props) => {
    const [imgUrl, setImgUrl] = useState('')
    const [form] = Form.useForm();

    const submit = () => {
        setImgUrl('')
        form.resetFields()
        props.addNewImage(imgUrl)
    }

    return (
        <Form form={form} onFinish={submit} className={c.form_container}>
            <p>Добавьте изображение в слайдер!</p>
            <Form.Item
                label="ссылка на изображение"
                name="imgUrl"
                key="1"
                rules={[rules.requiredUrl(imgUrl)]}
            >
                <Input value={imgUrl} onChange={e => setImgUrl(e.target.value)} />
            </Form.Item>
            <Form.Item key="2">
                <Button type="primary" htmlType='submit'>Добавить</Button>
            </Form.Item>
        </Form>
    );
};

export default MainPageForm;