import {createRef, useState} from 'react';
import {Button, Form, Input, Modal} from "antd";

const CreateProductModal = ({handleCreateProduct, showCreateModal, handleCloseModal}) => {
    const formRef = createRef();
    const [form] = Form.useForm();

    const [disabledSave, setDisabledSave] = useState(true);

    const handleFormChange = () => {
        const hasErrors = form.getFieldsError().some(({ errors }) => errors.length);
        setDisabledSave(hasErrors);
    };

    const onSubmit = (values) => {
        const body = {
            ...values,
            size: {
                width: values.width,
                height: values.height
            }
        };

        handleCreateProduct(body).then(() => {
            handleCloseModal();
        });
    };

    return (
        <Modal title="Реєстрація" open={showCreateModal} onCancel={handleCloseModal} footer={null}>
            <Form
                layout="vertical"
                ref={formRef}
                name="createProductForm"
                onFinish={onSubmit}
                form={form}
                onFieldsChange={handleFormChange}
            >
                <Form.Item
                    name="name"
                    label="Product Name"
                    rules={[
                        {
                            required: true,
                            min: 3,
                            max: 40,
                            whitespace: true,
                        },
                    ]}
                >
                    <Input placeholder="Product Name" autoComplete="off" />
                </Form.Item>
                <Form.Item
                    name="imageUrl"
                    label="Image URl"
                    rules={[{ required: true, message: 'Incorrect input image URL', type: 'url' }]}
                >
                    <Input  placeholder="Image URl" autoComplete="off" />
                </Form.Item>
                <Form.Item
                    name="count"
                    label="Count"
                    rules={[{ required: true, min: 1, whitespace: false, message: 'Incorrect count, try another' }]}
                >
                    <Input
                        placeholder="Count"
                        autoComplete="off"
                    />
                </Form.Item>
                <Form.Item
                    name="width"
                    label="Width"
                    rules={[{ required: true, whitespace: false, message: 'Incorrect width, try another' }]}
                >
                    <Input
                        placeholder="Width"
                        autoComplete="off"
                    />
                </Form.Item>
                <Form.Item
                    name="height"
                    label="Height"
                    rules={[{ required: true, whitespace: false, message: 'Incorrect height, try another' }]}
                >
                    <Input
                        placeholder="Height"
                        autoComplete="off"
                    />
                </Form.Item>
                <Form.Item
                    name="weight"
                    label="Weight"
                    rules={[{ required: true, whitespace: false, message: 'Incorrect weight, try another' }]}
                >
                    <Input
                        placeholder="Weight"
                        autoComplete="off"
                    />
                </Form.Item>
                <Form.Item style={{display: 'flex', justifyContent: 'flex-end', gap: '20px'}}>
                    <Button type="default" htmlType="button" onClick={handleCloseModal}>
                        Cancel
                    </Button>
                    <Button type="primary" htmlType="submit" disabled={disabledSave}>
                        Create product
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default CreateProductModal;