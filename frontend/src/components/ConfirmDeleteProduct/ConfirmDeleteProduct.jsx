import React from 'react';
import {Button, Modal} from "antd";

const ConfirmDeleteProductModal = ({handleCloseDeleteModal, showDeleteProductModal, handleDeleteProduct, productId}) => {
    const handleSuccessDelete = () => {
        handleDeleteProduct(productId).then(() => {
            handleCloseDeleteModal();
        });
    }

    return (
        <Modal footer={null} open={showDeleteProductModal} onCancel={handleCloseDeleteModal} closable={true} >
            <h3>Deleting product</h3>
            <p>Are you sure you want do delete product?</p>
            <div style={{display: 'flex', width: '100%', justifyContent: 'flex-end', gap: '20px'}}>
                <Button onClick={() => handleCloseDeleteModal(productId)}>
                    Cancel
                </Button>
                <Button onClick={handleSuccessDelete} type="primary">
                    Delete
                </Button>
            </div>
        </Modal>
    );
};

export default ConfirmDeleteProductModal;