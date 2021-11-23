import {LoadingOutlined} from '@ant-design/icons';
import {Box} from '@mxjs/box';

export default (props) => <Box text-24 brand {...props}>
  <LoadingOutlined spin/>
</Box>;
