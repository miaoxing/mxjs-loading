import {LoadingOutlined} from '@ant-design/icons';
import {Box} from '@mxjs/box';

export default (props) => <Box text-24 brand500 {...props}>
  <LoadingOutlined spin/>
</Box>;
