import {Card} from "antd";
import styles from './ProductView.module.scss';

const {Meta} = Card;
const ProductView = ({product}) => {

    return (
        <Card
            cover={<img alt={product.name} src={product.imageUrl}/>}
        >
            <Meta title={product.name} description={`Count: ${product.count}`}/>
            <p>Size: {product.size.width} x {product.size.height}</p>
            <p>Weight: {product.weight}</p>
            <p>Comments:</p>
            <div className={styles.comments}>
                {product.comments.map(comment => (
                    <div className={styles.comment} key={comment._id}>
                        <h4>{`Created at ${comment.date}`}</h4>
                        <p>{comment.description}</p>
                    </div>
                ))}
            </div>
        </Card>
    );
};

export default ProductView;