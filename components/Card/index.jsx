import { EditOutlined, EllipsisOutlined, FileImageOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import Link from 'next/link';
import { ImageWrapper } from './Card.styles'
const { Meta } = Card;

const CardContainer = ({ product }) => (
    <Card
        style={{
            width: 300,
        }}
        cover={
            <ImageWrapper
                src={product.image}
                width={250}
                height={250}
                alt={product.title}
            />
        }
        actions={[
            <Link href={`product/${product.id}`} key="preview" ><FileImageOutlined />Preview</Link>,
            // <EditOutlined key="edit" />,
            // <EllipsisOutlined key="ellipsis" />,
        ]}
    >
        <Meta
            avatar={<Avatar src={product.image} />}
            title={product.title}
            description={product.description.length > 75 ? product.description.slice(0, 75) + " ..." : product.description}
        />
    </Card>
);
export default CardContainer;