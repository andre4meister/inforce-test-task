import {useNavigate} from "react-router-dom";
import {Button, Card} from "antd";
import styles from './ListProductsView.module.scss';
import {useState} from "react";
import CreateProductModal from "../../components/CreateProductModal/CreateProductModal";
import ConfirmDeleteProductModal from "../../components/ConfirmDeleteProduct/ConfirmDeleteProduct";
import { DeleteOutlined} from "@ant-design/icons";

const {Meta} = Card;

const ListProductsView = ({
                              products,
                              setSortBy,
                              setSortOrder,
                              sortBy,
                              sortOrder,
                              handleDeleteProduct,
                              handleCreateProduct
                          }) => {
    const navigate = useNavigate();

    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState(null);

    const handleCloseCreateModal = () => {
        setShowCreateModal(false);
    }
    const handleCloseDeleteModal = () => {
        setShowDeleteModal(false);
    }

    const handleDeleteProductClick = (e, id) => {
        e.stopPropagation();
        setSelectedProductId(id);
        setShowDeleteModal(true);
    }
    const handleProductClick = (id) => {
        navigate(`/product/${id}`);
    };

    return (
        <>
            {showCreateModal && (
                <CreateProductModal
                    handleCloseModal={handleCloseCreateModal}
                    showCreateModal={showCreateModal}
                    handleCreateProduct={handleCreateProduct}/>
            )}
            {
                showDeleteModal && (
                    <ConfirmDeleteProductModal
                        productId={selectedProductId}
                        handleCloseDeleteModal={handleCloseDeleteModal}
                        showDeleteProductModal={showDeleteModal}
                        handleDeleteProduct={handleDeleteProduct}
                    />
                )
            }
            <div className={styles.menu}>
                <div className={styles.sort}>

                </div>
                <div className={styles.actions}>
                    <Button type="primary" onClick={() => setShowCreateModal(true)}>Create</Button>
                </div>
            </div>
            <div className={styles.list}>
                {products.map(product => (
                    <Card
                        key={product._id}
                        className={styles.product}
                        cover={<img alt={product.name} className={styles.product__image} src={product.imageUrl}/>}
                        onClick={() => handleProductClick(product._id)}
                    >
                        <div className={styles.deleteIcon}>
                            <DeleteOutlined onClick={(e) => handleDeleteProductClick(e, product._id)} />
                        </div>
                        <Meta title={product.name} description={`Count: ${product.count}`}/>
                        <p>Size: {product.size.width} x {product.size.height}</p>
                    </Card>
                ))}
            </div>
        </>
    );
};

export default ListProductsView;